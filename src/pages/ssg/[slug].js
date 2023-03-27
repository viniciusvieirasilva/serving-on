import Content from "../../components/Content";
import { Typography } from 'antd';

const { Link, Text } = Typography;

export default function ssg({ date }) {
    return (
        <>
            <Content title='Página SSG (Static Site Generated)' repositories={[]} date={date} />
            <p>Essa página foi criada pelo servidor Node do Next.js antes de ser acessada no navegador utilizando a função <Text strong>getStaticProps</Text> e fica em cache ao invés de ser recriada a cada requisição.</p>
            <p>Isso permite não sobrecarregar o servidor caso ocorram muitos acessos simultâneos.</p>
            <p>Contudo ao utilizar o <Text italic>fallback: false</Text> as páginas que não foram definidas para serem geradas estáticamente na função <Text strong>getStaticPaths</Text> não são criadas.</p>
            <p>Visite as páginas <Link href='/ssg/foobar' >foobar</Link> e <Link href='/ssg/undefined'>undefined</Link> para entender melhor as páginas SSG.</p>
        </>
    )
}

export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: 'lorem-ipsum' } },
            { params: { slug: 'foobar' } },
        ],
        fallback: false,
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