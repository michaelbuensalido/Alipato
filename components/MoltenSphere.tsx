"use client";

import { useEffect, useRef } from "react";

/*
 * The hero visual: a molten wireframe sphere with a twisting ribbon orbiting it,
 * drawn on three stacked canvases so it can weave through the headline:
 *   back canvas (contour lines, far half of the ribbon)  z-[1]
 *   headline, solid copy                                 z-[2]
 *   body canvas (the sphere itself, hides the fill)      z-[3]
 *   headline, outline copy                               z-[4]
 *   front canvas (near half of the ribbon)               z-[5]
 * The canvases fill their positioned parent. On desktop the sphere keeps the
 * 1440×900 composition's coordinates; below lg it centres on the headline,
 * which is marked with [data-sphere-anchor].
 */

type Vec3 = [number, number, number];
type Pt = [number, number, number];
type RGB = [number, number, number];

const ORANGE: RGB = [255, 94, 26];
const CRIMSON: RGB = [242, 19, 104];
const HOT: RGB = [255, 196, 150];
const DARK: RGB = [9, 6, 7];

const mix = (a: RGB, b: RGB, t: number): RGB => [
  a[0] + (b[0] - a[0]) * t,
  a[1] + (b[1] - a[1]) * t,
  a[2] + (b[2] - a[2]) * t,
];
const rgb = (c: RGB, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;

function rot(v: Vec3, ay: number, ax: number, az: number): Vec3 {
  let [x, y, z] = v;
  let c: number, s: number;
  if (az) {
    c = Math.cos(az);
    s = Math.sin(az);
    [x, y] = [x * c - y * s, x * s + y * c];
  }
  c = Math.cos(ay);
  s = Math.sin(ay);
  [x, z] = [x * c + z * s, -x * s + z * c];
  c = Math.cos(ax);
  s = Math.sin(ax);
  [y, z] = [y * c - z * s, y * s + z * c];
  return [x, y, z];
}

function disp(x: number, y: number, z: number, t: number) {
  return (
    0.085 * Math.sin(2.1 * x + 1.3 * y + t * 0.7) * Math.cos(1.7 * z - 1.1 * y + t * 0.5) +
    0.05 * Math.sin(3.3 * y + 2.2 * z - t * 0.9) +
    0.028 * Math.sin(5 * x - 4 * z + t * 1.3)
  );
}

const LIGHT: Vec3 = (() => {
  const v: Vec3 = [-0.55, -0.65, 0.55];
  const n = Math.hypot(...v);
  return [v[0] / n, v[1] / n, v[2] / n];
})();

type Blob = { c: [number, number]; r: [number, number]; n: number; ph: number; sp: number };
// Contour lines in the 1440×900 design space.
const BLOBS: Blob[] = [
  { c: [470, 360], r: [470, 250], n: 9, ph: 0, sp: 0.22 },
  { c: [1235, 236], r: [165, 105], n: 7, ph: 2, sp: 0.3 },
  { c: [700, 700], r: [390, 92], n: 8, ph: 4, sp: 0.18 },
];

type Layout = {
  w: number;
  h: number;
  cx: number;
  cy: number;
  r: number;
  sx: number;
  sy: number;
  ox: number;
  nt: number;
  np: number;
  ns: number;
};

function blobPath(ctx: CanvasRenderingContext2D, b: Blob, t: number, L: Layout) {
  const pts: [number, number][] = [];
  for (let i = 0; i < b.n; i++) {
    const a = (i / b.n) * Math.PI * 2 + 0.15 * Math.sin(t * b.sp + i);
    const k = 1 + 0.22 * Math.sin(t * b.sp * 1.3 + b.ph + i * 2.1) + 0.12 * Math.sin(i * 3.7 + b.ph);
    pts.push([
      L.ox + (b.c[0] + Math.cos(a) * b.r[0] * k) * L.sx,
      (b.c[1] + Math.sin(a) * b.r[1] * k) * L.sy,
    ]);
  }
  ctx.beginPath();
  for (let i = 0; i < b.n; i++) {
    const p0 = pts[(i - 1 + b.n) % b.n];
    const p1 = pts[i];
    const p2 = pts[(i + 1) % b.n];
    const p3 = pts[(i + 2) % b.n];
    if (i === 0) ctx.moveTo(p1[0], p1[1]);
    ctx.bezierCurveTo(
      p1[0] + (p2[0] - p0[0]) / 6,
      p1[1] + (p2[1] - p0[1]) / 6,
      p2[0] - (p3[0] - p1[0]) / 6,
      p2[1] - (p3[1] - p1[1]) / 6,
      p2[0],
      p2[1],
    );
  }
  ctx.closePath();
}

function draw(
  back: CanvasRenderingContext2D,
  body: CanvasRenderingContext2D,
  front: CanvasRenderingContext2D,
  t: number,
  L: Layout,
) {
  const { w, h, cx, cy, r: R } = L;
  const D = 5;
  const proj = (v: Vec3): Pt => {
    const s = D / (D - v[2]);
    return [cx + v[0] * R * s, cy + v[1] * R * s, v[2]];
  };
  back.clearRect(0, 0, w, h);
  body.clearRect(0, 0, w, h);
  front.clearRect(0, 0, w, h);

  // contour lines
  back.lineWidth = 1.1;
  back.strokeStyle = "rgba(248,240,234,.22)";
  for (const b of BLOBS) {
    blobPath(back, b, t, L);
    back.stroke();
  }
  // faint core heat
  const g = back.createRadialGradient(cx, cy, 0, cx, cy, R * 1.9);
  g.addColorStop(0, "rgba(255,70,40,.16)");
  g.addColorStop(1, "rgba(255,70,40,0)");
  back.fillStyle = g;
  back.fillRect(0, 0, w, h);

  // sphere vertices
  const { nt: NT, np: NP } = L;
  const ay = t * 0.11;
  const ax = -0.32;
  const az = 0.12;
  const V: Pt[][] = [];
  const N: Vec3[][] = [];
  for (let i = 0; i <= NT; i++) {
    const th = (i / NT) * Math.PI;
    const row: Pt[] = [];
    const nrow: Vec3[] = [];
    for (let j = 0; j <= NP; j++) {
      const ph = (j / NP) * Math.PI * 2;
      const d: Vec3 = [Math.sin(th) * Math.cos(ph), -Math.cos(th), Math.sin(th) * Math.sin(ph)];
      const rr = 1 + disp(d[0], d[1], d[2], t);
      const wv = rot([d[0] * rr, d[1] * rr, d[2] * rr], ay, ax, az);
      row.push(proj(wv));
      nrow.push(wv);
    }
    V.push(row);
    N.push(nrow);
  }

  // body: front-facing quads, dark core and molten fresnel rim
  body.lineWidth = 0.8;
  for (let i = 0; i < NT; i++) {
    for (let j = 0; j < NP; j++) {
      const a = V[i][j];
      const b = V[i][j + 1];
      const c = V[i + 1][j + 1];
      const d = V[i + 1][j];
      const cross =
        (b[0] - a[0]) * (d[1] - a[1]) -
        (b[1] - a[1]) * (d[0] - a[0]) +
        (c[0] - b[0]) * (d[1] - b[1]) -
        (c[1] - b[1]) * (d[0] - b[0]);
      const n00 = N[i][j];
      const n01 = N[i][j + 1];
      const n11 = N[i + 1][j + 1];
      const n10 = N[i + 1][j];
      const m: Vec3 = [
        (n00[0] + n01[0] + n11[0] + n10[0]) / 4,
        (n00[1] + n01[1] + n11[1] + n10[1]) / 4,
        (n00[2] + n01[2] + n11[2] + n10[2]) / 4,
      ];
      const e1: Vec3 = [n11[0] - n00[0], n11[1] - n00[1], n11[2] - n00[2]];
      const e2: Vec3 = [n01[0] - n10[0], n01[1] - n10[1], n01[2] - n10[2]];
      let nx = e1[1] * e2[2] - e1[2] * e2[1];
      let ny = e1[2] * e2[0] - e1[0] * e2[2];
      let nz = e1[0] * e2[1] - e1[1] * e2[0];
      const nl = Math.hypot(nx, ny, nz) || 1;
      nx /= nl;
      ny /= nl;
      nz /= nl;
      if (nx * m[0] + ny * m[1] + nz * m[2] < 0) {
        nx = -nx;
        ny = -ny;
        nz = -nz;
      }
      if (m[2] < -0.05 && cross > 0) continue;
      if (nz <= 0) continue;
      const rim = Math.pow(1 - nz, 2.1);
      const syN = Math.max(0, Math.min(1, (a[1] - (cy - R)) / (2 * R)));
      const molten = mix(ORANGE, CRIMSON, syN);
      const lam = Math.max(0, nx * LIGHT[0] + ny * LIGHT[1] + nz * LIGHT[2]);
      const hx = LIGHT[0];
      const hy = LIGHT[1];
      const hz = LIGHT[2] + 1;
      const hl = Math.hypot(hx, hy, hz);
      const spec = Math.pow(Math.max(0, (nx * hx + ny * hy + nz * hz) / hl), 40);
      let col = mix(DARK, molten, Math.min(1, rim * 1.05 + lam * 0.07));
      col = mix(col, HOT, spec * 0.55);
      body.fillStyle = body.strokeStyle = rgb(col);
      body.beginPath();
      body.moveTo(a[0], a[1]);
      body.lineTo(b[0], b[1]);
      body.lineTo(c[0], c[1]);
      body.lineTo(d[0], d[1]);
      body.closePath();
      body.fill();
      body.stroke();
    }
  }

  // wires across the visible face
  const wb = Array.from({ length: 6 }, () => new Path2D());
  const seg = (p: Pt, q: Pt, nz: number) => {
    if (nz <= 0) return;
    const k = Math.min(5, (nz * 6) | 0);
    wb[k].moveTo(p[0], p[1]);
    wb[k].lineTo(q[0], q[1]);
  };
  for (let i = 2; i < NT; i += 2)
    for (let j = 0; j < NP; j++) seg(V[i][j], V[i][j + 1], (N[i][j][2] + N[i][j + 1][2]) / 2);
  for (let j = 0; j < NP; j += 2)
    for (let i = 0; i < NT; i++) seg(V[i][j], V[i + 1][j], (N[i][j][2] + N[i + 1][j][2]) / 2);
  const wg = body.createLinearGradient(cx - R, cy - R, cx + R, cy + R);
  wg.addColorStop(0, "#FF8A4A");
  wg.addColorStop(0.5, "#FF4E2A");
  wg.addColorStop(1, "#F21368");
  body.strokeStyle = wg;
  body.lineWidth = 1;
  wb.forEach((p, k) => {
    body.globalAlpha = 0.7 - k * 0.1;
    body.stroke(p);
  });
  body.globalAlpha = 1;

  // ribbon: a twisting molten band orbiting the sphere, split by depth
  const NS = L.ns;
  const rA = t * 0.16;
  const rX = 1.02;
  const rZ = -0.62;
  type RP = { A: Pt; B: Pt; z: number; s: number; A3: Vec3; B3: Vec3 };
  const pts: RP[] = [];
  for (let k = 0; k <= NS; k++) {
    const s = (k / NS) * Math.PI * 2;
    const rr = 1.28 + 0.07 * Math.sin(2 * s + t * 0.6);
    const c: Vec3 = [rr * Math.cos(s), 0.14 * Math.sin(3 * s + t * 0.8), rr * Math.sin(s)];
    const al = 1.5 * s + t * 0.35;
    const wv: Vec3 = [Math.cos(s) * Math.sin(al), Math.cos(al), Math.sin(s) * Math.sin(al)];
    const hw = 0.1 * (0.5 + 0.5 * Math.sin(2 * s - t * 0.5)) + 0.025;
    const A3 = rot([c[0] + wv[0] * hw, c[1] + wv[1] * hw, c[2] + wv[2] * hw], rA, rX, rZ);
    const B3 = rot([c[0] - wv[0] * hw, c[1] - wv[1] * hw, c[2] - wv[2] * hw], rA, rX, rZ);
    pts.push({ A: proj(A3), B: proj(B3), z: (A3[2] + B3[2]) / 2, s, A3, B3 });
  }
  const quads: { p: RP; q: RP; z: number; nz: number }[] = [];
  for (let k = 0; k < NS; k++) {
    const p = pts[k];
    const q = pts[k + 1];
    const e1: Vec3 = [q.A3[0] - p.A3[0], q.A3[1] - p.A3[1], q.A3[2] - p.A3[2]];
    const e2: Vec3 = [p.B3[0] - p.A3[0], p.B3[1] - p.A3[1], p.B3[2] - p.A3[2]];
    const n: Vec3 = [
      e1[1] * e2[2] - e1[2] * e2[1],
      e1[2] * e2[0] - e1[0] * e2[2],
      e1[0] * e2[1] - e1[1] * e2[0],
    ];
    quads.push({ p, q, z: (p.z + q.z) / 2, nz: Math.abs(n[2]) / (Math.hypot(...n) || 1) });
  }
  quads.sort((a, b) => a.z - b.z);
  for (const Q of quads) {
    const ctx = Q.z < 0 ? back : front;
    const base = mix(ORANGE, CRIMSON, 0.5 + 0.5 * Math.sin(Q.p.s));
    let col = mix(DARK, base, 0.28 + 0.72 * Q.nz);
    col = mix(col, HOT, Math.pow(Q.nz, 14) * 0.6);
    ctx.fillStyle = ctx.strokeStyle = rgb(col, Q.z < 0 ? 0.78 : 1);
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(Q.p.A[0], Q.p.A[1]);
    ctx.lineTo(Q.q.A[0], Q.q.A[1]);
    ctx.lineTo(Q.q.B[0], Q.q.B[1]);
    ctx.lineTo(Q.p.B[0], Q.p.B[1]);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  // ribbon edge filaments
  const edges: ["A" | "B", string][] = [
    ["A", "rgba(255,214,180,"],
    ["B", "rgba(255,120,90,"],
  ];
  for (const [e, c] of edges) {
    for (let k = 0; k < NS; k++) {
      const p = pts[k];
      const q = pts[k + 1];
      const behind = (p.z + q.z) / 2 < 0;
      const ctx = behind ? back : front;
      ctx.strokeStyle = c + (behind ? 0.35 : 0.8) + ")";
      ctx.lineWidth = 0.9;
      ctx.beginPath();
      ctx.moveTo(p[e][0], p[e][1]);
      ctx.lineTo(q[e][0], q[e][1]);
      ctx.stroke();
    }
  }
}

const DESKTOP = 1024;

function measure(host: HTMLElement): Layout {
  const w = host.clientWidth;
  const h = host.clientHeight;
  if (window.matchMedia(`(min-width: ${DESKTOP}px)`).matches) {
    const k = w / 1440;
    return { w, h, cx: 612 * k, cy: 450 * k, r: 246 * k, sx: k, sy: k, ox: 0, nt: 30, np: 60, ns: 260 };
  }
  // Below desktop the sphere sits behind the headline block.
  const anchor = host.querySelector<HTMLElement>("[data-sphere-anchor]");
  const hostBox = host.getBoundingClientRect();
  let cx = w * 0.58;
  let cy = h * 0.38;
  let r = w * 0.34;
  if (anchor) {
    const a = anchor.getBoundingClientRect();
    cx = a.left - hostBox.left + a.width * 0.6;
    cy = a.top - hostBox.top + a.height * 0.5;
    r = Math.min(w * 0.36, a.height * 0.46);
  }
  // Contour lines keep their proportions: uniform scale, centred.
  const k = h / 1100;
  return { w, h, cx, cy, r, sx: k, sy: k, ox: w / 2 - 720 * k, nt: 22, np: 44, ns: 180 };
}

const canvasClass = "pointer-events-none absolute inset-0 h-full w-full animate-fade-in";

export default function MoltenSphere() {
  const backRef = useRef<HTMLCanvasElement>(null);
  const bodyRef = useRef<HTMLCanvasElement>(null);
  const frontRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvases = [backRef.current, bodyRef.current, frontRef.current];
    if (canvases.some((c) => !c)) return;
    const [cb, cm, cf] = canvases as HTMLCanvasElement[];
    const host = cb.parentElement;
    const ctxs = canvases.map((c) => c!.getContext("2d"));
    if (!host || ctxs.some((c) => !c)) return;
    const [back, body, front] = ctxs as CanvasRenderingContext2D[];

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let layout = measure(host);
    let visible = true;
    let raf = 0;
    const t0 = performance.now();
    const time = () => (reduce ? 3 : 3 + (performance.now() - t0) / 1000);

    const resize = () => {
      layout = measure(host);
      const dpr = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
      for (const [c, ctx] of [
        [cb, back],
        [cm, body],
        [cf, front],
      ] as const) {
        c.width = Math.round(layout.w * dpr);
        c.height = Math.round(layout.h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      draw(back, body, front, time(), layout);
    };

    const loop = () => {
      draw(back, body, front, time(), layout);
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (reduce || raf || !visible || document.hidden) return;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    // Headline font swap changes the anchor's box on smaller screens.
    document.fonts?.ready.then(resize);

    const ro = new ResizeObserver(resize);
    ro.observe(host);
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(host);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);
    start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <>
      <canvas ref={backRef} aria-hidden="true" className={`${canvasClass} z-[1]`} />
      <canvas ref={bodyRef} aria-hidden="true" className={`${canvasClass} z-[3]`} />
      <canvas ref={frontRef} aria-hidden="true" className={`${canvasClass} z-[5]`} />
    </>
  );
}
