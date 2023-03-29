import Head from 'next/head'
import Content from '../components/Content'
import Clock from '@/components/Clock'
import { Typography } from 'antd'
import { useEffect, useState } from 'react'

const { Text } = Typography

export default function Home () {
  const [date, setDate] = useState(null)
  useEffect(() => {
    setDate(new Date(Date.now()))
  }, [])

  if (!date) return <h1>Carregando</h1>
  return (
    <>
      <Head>
        <title>Página Inicial</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Content title='Página Inicial' date={date} />
    </>
  )
}
