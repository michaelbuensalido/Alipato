"use client";

import type { CSSProperties } from "react";
import { Icon as Iconify } from "@iconify/react";

type Props = {
  icon: string;
  size: number;
  className?: string;
  style?: CSSProperties;
};

export default function Icon({ icon, size, className, style }: Props) {
  return <Iconify icon={icon} width={size} height={size} className={className} style={style} />;
}
