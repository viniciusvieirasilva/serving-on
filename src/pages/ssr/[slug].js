import Content from '../../components/Content'
import { Typography } from 'antd'
import { useMemo } from 'react'

const { Text } = Typography

export default function Ssr (props) {
  const date = useMemo(() => new Date(props.now), [props.now])
  return (
    <>
      <Content title='Página SSR (Server Side Rendered)' date={date} />
      <p>
        Essa página foi criada pelo servidor Node do Next.js antes de ser
        acessada no navegador utilizando a função{' '}
        <Text strong>getServerSideProps</Text> e é recriada sempre que for
        recarregada.
      </p>
      <p>
        Isso permite um carregamento inicial mais rápido e uma melhor indexação
        em relação ao <Text strong>Client Side Rendered</Text>.
      </p>
    </>
  )
}

export const getServerSideProps = async context => {
  return {
    props: {
      now: Date.now(),
      slug: context.query.slug
    }
  }
}
