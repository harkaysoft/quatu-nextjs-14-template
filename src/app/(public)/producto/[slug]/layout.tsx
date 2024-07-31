export default function ProductLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { slug: number }
}) {
  return <>{children}</>
}
