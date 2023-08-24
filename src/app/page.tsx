import dynamic from 'next/dynamic'

const ComponentTestServer = dynamic(
  () => import('./components/ComponentTestServer'),
  {
    loading: () => <p>Loading...</p>,
  },
)

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <h1>test-repository</h1>
      <ComponentTestServer />
    </main>
  )
}
