import Content from '../../components/Content'
import { Typography } from 'antd'
import { useEffect, useState } from 'react'

const { Text } = Typography

export default function Csr () {
  const [date, setDate] = useState(null)
  useEffect(() => {
    setDate(new Date(Date.now()))
  }, [])
  if (!date) return <h1>Carregando</h1>
  return (
    <>
      <Content title='Página CSR (Client Side Rendering)' date={date} />
      <p>
        Essa página foi criada pelo JavaScript do navegador e é recriada sempre
        que for recarregada.
      </p>
    </>
  )
}
