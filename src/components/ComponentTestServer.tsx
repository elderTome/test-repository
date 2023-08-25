import moment from 'moment'
import Image from 'next/image'

interface Props {
  name: string
}

interface IData {
  name: string
  avatar_url: string
  location: string
  bio: string
  created_at: string
}

export async function ComponentTestServer({ name }: Props) {
  async function getData() {
    return new Promise<IData>((resolve) => {
      setTimeout(async () => {
        const response = await fetch(`https://api.github.com/users/${name}`, {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
          cache: 'no-store',
        })

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        resolve(response.json())
      }, 5000)
    })
  }

  const data = await getData()

  return (
    <div className="flex flex-col gap-7">
      <div className="w-[32.75rem] flex items-start bg-zinc-800 p-6 gap-6 rounded-xl">
        <Image
          className="rounded-full animate-fade-in"
          width={114}
          height={114}
          src={data.avatar_url}
          alt="Imagem de perfil"
          priority
        />
        <div className="flex w-full gap-4 flex-col animate-fade-in">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p>Nome</p>
              <p className="text-zinc-400">{data.name}</p>
            </div>
            <div className="flex flex-col">
              <p>Localização</p>
              <p className="text-zinc-400">{data.location}</p>
            </div>
            <div className="flex flex-col">
              <p>Criação</p>
              <p className="text-zinc-400">
                {moment(data.created_at).format('DD/MM/YYYY')}
              </p>
            </div>
          </div>
          <div className="flex flex-col">
            <p>Descrição</p>
            <p className="text-zinc-400">{data.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
