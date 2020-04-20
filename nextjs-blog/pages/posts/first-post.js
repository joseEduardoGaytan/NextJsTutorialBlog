import Link from 'next/link';

export default function FirstPost(){
    return (
        <>
            <h1>First Post</h1>
            <h2>
                {/* Add the className to the a tag instead of Link one */}
                <Link href="/">
                    <a className="">Back to home</a>
                </Link>
            </h2>
        </>
    );
}