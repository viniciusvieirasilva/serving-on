import Content from '../../components/Content';
import { sleeper } from '../../helpers.js'
import { Typography } from 'antd';

const { Link, Text } = Typography;

export default function isg(props) {
    const date = new Date(props.now).toLocaleString();
    return (
        <>
            <Content title='Página ISR (Incrementally Static Regenerated)' date={date} />
            <p>Essa página foi criada pelo servidor Node do Next.js antes de ser acessada no navegador utilizando a função <Text strong>getStaticProps</Text> e fica em cache ao invés de ser recriada a cada requisição.</p>
            <p>Isso permite não sobrecarregar o servidor caso ocorram muitos acessos simultâneos.</p>
            <p>Contudo ao utilizar o <Text italic>fallback: true</Text> as páginas que não foram definidas para serem geradas estáticamente na função <Text strong>getStaticPaths</Text> são criadas automaticamente em um determinado tempo de revalidação.</p>
            <p>Visite as páginas <Link href='/isr/foobar' >foobar</Link> e <Link href='/isr/undefined'>undefined</Link> para entender melhor as páginas ISR.</p>
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
    await sleeper(5)()
    return {
        props: {
            now: Date.now(),
            slug: context.params.slug
        },
        revalidate: 5,
    }
}