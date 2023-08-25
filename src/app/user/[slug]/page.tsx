import { Suspense } from 'react'
import { ComponentTestServer } from '@/components/ComponentTestServer'
import { SkeletonUser } from '@/components/skeleton/SkeletonUser'

interface Props {
  params: {
    slug: string
  }
}

export default function User({ params }: Props) {
  const gitHubName = params.slug

  return (
    <main className="flex flex-col p-24">
      <h1>User</h1>
      <div className="flex mt-4">
        <Suspense fallback={<SkeletonUser />}>
          <ComponentTestServer name={gitHubName} />
        </Suspense>
      </div>
    </main>
  )
}
