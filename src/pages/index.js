import Clock from '@/components/Clock'
import Head from 'next/head'
import { Typography } from 'antd';

const { Text } = Typography;

export default function Home() {
  const date = new Date(Date.now())
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <h1>Página Inicial</h1>
      <p>Página estática criada em <Text mark><time>{date.toLocaleString()}</time></Text> mas são <Text mark><Clock /></Text> agora.</p>
    </>
  )
}
