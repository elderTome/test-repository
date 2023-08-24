interface IData {
  name: string
  location: string
  bio: string
  created_at: string
}

export default async function ComponentTestClient() {
  async function getData() {
    return new Promise<IData>((resolve) => {
      setTimeout(async () => {
        const response = await fetch(
          'https://api.github.com/users/elder-tome',
          {
            cache: 'no-store',
          },
        )

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        resolve(response.json())
      }, 2000)
    })
  }

  const data = await getData()

  return (
    <main className="mt-4">
      <div className="flex flex-row">
        <p>{`Nome: ${data.name}`}</p>
      </div>
      <div className="flex flex-row">
        <p>{`Localização: ${data.location}`}</p>
      </div>
      <div className="flex flex-row">
        <p>{`Descrição: ${data.bio}`}</p>
      </div>
      <div className="flex flex-row">
        <p>{`Data de criação: ${data.created_at}`}</p>
      </div>
    </main>
  )
}
