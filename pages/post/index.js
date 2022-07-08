import { useState } from "react";
import supabase from "../../utils/supabase";
import { useEffect } from "react";
import Post from '../../components/post/index'
import Login from '../../components/post/login'

export default function PostPage() {
    const [session, setSession] = useState(null)

    useEffect(() => {
      setSession(supabase.auth.session())
  
      supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })
    }, [])

    return (
        <>
            {!session ? <Login /> : <Post />}
        </>
    );
}