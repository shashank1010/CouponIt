import Header from "../components/Header"
import Head from 'next/head'

function Home() {
    const moreMeta = <meta name="charset" content="utf-8" />
    const meta = [
        { "name": "keyword", "content": "keywords Test" },
        { "name": "description", "content": "HURRAY"}
    ]
    return <>
        <Header moreMeta={ moreMeta } title="Home" meta={ meta }></Header>
    </>;
}

export default Home;