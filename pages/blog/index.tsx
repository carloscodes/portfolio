import Navbar from '../../components/global/Navbar'
import Footer from '../../components/global/Footer'
import Blog from '../../components/blog';
import supabase from '../../utils/supabase';

export async function getStaticProps(){
    const { data: posts, error } = await supabase.from('posts').select('*');

    return {
        props: {
            posts,
        },
    }
}

export default function BlogPage({posts}: any) {
    return (
        <>
        <Navbar />
            {posts.map((post: any) => <Blog key={post.id} post={post}/>)}
        <Footer />
        </>
    );
}