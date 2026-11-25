/** Re-mounts on every route change, so each page fades in. Opacity only: a transform here would break the fixed navbar. */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-grow flex-col animate-[pageIn_.6s_cubic-bezier(.22,1,.36,1)_both]">
      {children}
    </div>
  );
}
