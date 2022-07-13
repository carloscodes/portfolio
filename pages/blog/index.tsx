import Navbar from '../../components/global/Navbar'
import Footer from '../../components/global/Footer'
import Blog from '../../components/blog';
import supabase from '../../utils/supabase';
import Header from '../../components/global/Header';
import { motion } from 'framer-motion';

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
            <Header />
            <Navbar />
                <motion.div exit={{opacity: 0}} initial={{opacity: 0}} animate={{opacity: 1}}>
                    {posts.map((post: any) => <Blog key={post.id} post={post}/>)}
                </motion.div>
            <Footer />
        </>
    );
}