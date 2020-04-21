import Head from 'next/head'
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost(){
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                {/* Add the className to the a tag instead of Link one */}
                <Link href="/">
                    <a className="">Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
}