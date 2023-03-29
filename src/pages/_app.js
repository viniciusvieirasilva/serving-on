import '@/styles/globals.css'
import Link from 'next/link'
import { Layout, Menu, Card } from 'antd'
import {
  DatabaseOutlined,
  DesktopOutlined,
  HistoryOutlined,
  BuildFilled,
  BuildOutlined
} from '@ant-design/icons'

const { Header, Content } = Layout

const items = [
  {
    label: (
      <Link href='/' className='logo'>
        next.js
      </Link>
    ),
    key: 'logo'
  },
  {
    label: (
      <Link href='/ssr/any-slug' className='item'>
        SSR
      </Link>
    ),
    key: 'SSR',
    icon: <DatabaseOutlined style={{ fontSize: '18px' }} />
  },
  {
    label: (
      <Link href='/csr/any-slug' className='item'>
        CSR
      </Link>
    ),
    key: 'CSR',
    icon: <DesktopOutlined style={{ fontSize: '20px' }} />
  },
  {
    label: (
      <Link href='/ssg/lorem-ipsum' className='item'>
        SSG
      </Link>
    ),
    key: 'SSG',
    icon: <BuildFilled style={{ fontSize: '22px' }} />
  },
  {
    label: (
      <Link href='/isg/lorem-ipsum' className='item'>
        ISG
      </Link>
    ),
    key: 'ISG',
    icon: <BuildOutlined style={{ fontSize: '22px' }} />
  },
  {
    label: (
      <Link href='/isr/lorem-ipsum' className='item'>
        ISR
      </Link>
    ),
    key: 'ISR',
    icon: <HistoryOutlined style={{ fontSize: '18px' }} />
  }
]

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Layout className='main'>
        <Header style={{ height: '72px' }}>
          <Menu theme='dark' mode='horizontal' items={items} />
        </Header>
        <Content>
          <Card bordered={false} style={{ margin: '40px' }}>
            <Component {...pageProps} />
          </Card>
        </Content>
      </Layout>
    </>
  )
}
