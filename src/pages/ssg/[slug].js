import Content from '../../components/Content'
import { Typography } from 'antd'
import { useMemo } from 'react'
import { sleeper } from '@/helpers'

const { Link, Text } = Typography

export default function Ssg (props) {
  const date = useMemo(() => new Date(props.now), [props.now])
  return (
    <>
      <Content title='Página SSG (Static Site Generation)' date={date} />
      <p>
        Essa página foi criada pelo servidor Node do Next.js antes de ser
        acessada no navegador utilizando a função{' '}
        <Text strong>getStaticProps</Text> e fica em cache ao invés de ser
        recriada a cada requisição.
      </p>
      <p>
        Isso permite não sobrecarregar o servidor caso ocorram muitos acessos
        simultâneos.
      </p>
      <p>
        Contudo ao utilizar o <Text italic>fallback: false</Text> as páginas que
        não foram definidas para serem geradas estáticamente na função{' '}
        <Text strong>getStaticPaths</Text> não são criadas.
      </p>
      <p>
        Visite as páginas <Link href='/ssg/foobar'>foobar</Link> e{' '}
        <Link href='/ssg/undefined'>undefined</Link> para entender melhor as
        páginas SSG.
      </p>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { slug: 'lorem-ipsum' } },
      { params: { slug: 'foobar' } }
    ],
    fallback: false
  }
}

export const getStaticProps = async context => {
  await sleeper(5)()
  return {
    props: {
      now: Date.now(),
      slug: context.params.slug
    }
  }
}
