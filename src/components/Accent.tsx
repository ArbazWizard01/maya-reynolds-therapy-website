/** Hand-written accent word used inside serif headings (e.g. "exhale"). */
export default function Accent({ children }: { children: React.ReactNode }) {
  return <span className="script">{children}</span>;
}
