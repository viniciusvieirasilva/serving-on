import Content from '../../components/Content'
import { sleeper } from '../../helpers.js'
import { Typography } from 'antd'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useMemo } from 'react'

const { Link, Text } = Typography

export default function Isg (props) {
  const date = useMemo(() => new Date(props.now), [props.now])
  const router = useRouter()

  if (router.isFallback)
    return (
      <main>
        <Head>
          <title>Página ISR (Incrementally Static Generation)</title>
        </Head>
        <h1>Página ISR (Incrementally Static Generation)</h1>
        <p>Aguarde, a página está sendo gerada no servidor.</p>
      </main>
    )

  return (
    <>
      <Content
        title='Página ISG (Incrementally Static Generation)'
        date={date}
      />
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
        Contudo ao utilizar o <Text italic>fallback: true</Text> as páginas que
        não foram definidas para serem geradas estáticamente na função{' '}
        <Text strong>getStaticPaths</Text> são criadas ao serem acessadas.
      </p>
      <p>
        Visite as páginas <Link href='/isg/foobar'>foobar</Link> e{' '}
        <Link href='/isg/undefined'>undefined</Link> para entender melhor as
        páginas ISG.
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
    fallback: true
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
