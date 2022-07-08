import { useState } from "react";
import supabase from "../../utils/supabase";
import { Button, Container, Input } from "@chakra-ui/react";
import Navbar from "../global/Navbar";

export default function LoginPage() {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
  
    const handleLogin = async () => {
      console.log(email);
      try {
        setLoading(true)
        const { error } = await supabase.auth.signIn({ email })
        if (error) throw error
        alert('Check your email for the login link!')
      } catch (error: any) {
        alert(error.error_description || error.message)
      } finally {
        setLoading(false)
      }
    }

    return (
      <>
        <Navbar />
        <Container>
            <div className="group block p-8 bg-black hover:cursor-pointer shadow-md border border-slate-600 rounded-lg max-w-sm">
              <Input focusBorderColor="gray" colorScheme="gray" color="gray.300" id='email' placeholder='Email' onChange={event => setEmail(event.currentTarget.value)} />
              <div className="pt-4 flex justify-center">
                <Button className="shadow-lg shadow-green-500/25" color='green.400' variant='outline' onClick={() => handleLogin()}>Login</Button>
              </div>
            </div>
        </Container>
      </>
    );
}