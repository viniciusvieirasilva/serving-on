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
      <Content title='Página CSR (Client Side Rendered)' date={date} />
      <p>
        Essa página foi criada pelo JavaScript do navegador e é recriada sempre
        que for recarregada.
      </p>
      <p>
        O carregamento inicial pode ser mais lento em relação ao{' '}
        <Text strong>Server Side Rendered</Text> porém pode ser útil para trazer
        um conteúdo personalizado.
      </p>
      <p>
        O ideial é utilizar a técnica de <Text italic>hydration</Text> que
        combina as vantagens do SSR e CSR.
      </p>
    </>
  )
}
