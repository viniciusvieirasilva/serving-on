import Content from "./components/content";
import { Typography } from 'antd';

const { Link, Text } = Typography;

export default function isg({ date }) {
    return (
        <>
            <Content title='Página ISG (Incrementally Static Generate)' date={date} />
            <p>Essa página foi criada pelo servidor Node do Next.js antes de ser acessada no navegador utilizando a função <Text strong>getStaticProps</Text> e fica em cache ao invés de ser recriada a cada requisição.</p>
            <p>Isso permite não sobrecarregar o servidor caso ocorram muitos acessos simultâneos.</p>
            <p>Contudo ao utilizar o <Text italic>fallback: true</Text> as páginas que não foram definidas para serem geradas estáticamente na função <Text strong>getStaticPaths</Text> são criadas ao serem acessadas.</p>
            <p>Visite as páginas <Link href='/isg/foobar' >foobar</Link> e <Link href='/isg/undefined'>undefined</Link> para entender melhor as páginas ISG.</p>
        </>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: 'lorem-ipsum' } },
            { params: { slug: 'foobar' } },
        ],
        fallback: true,
    }
}

export const getStaticProps = async(context) => {
    return {
        props: {
            date: new Date().toLocaleString(),
            slug: context.params.slug
        }
    }
}