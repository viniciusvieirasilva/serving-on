import Head from 'next/head'
import Clock from './Clock'
import { Typography } from 'antd';

const { Text } = Typography;

export default function Content ({ title, description, date }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <h1>{title}</h1>
            <span>{description}</span>
            <p><span>Página criada em <Text mark><time>{date.toLocaleString()}</time></Text> mas são <Text mark><Clock /></Text> agora.</span></p>
        </>
    )
}