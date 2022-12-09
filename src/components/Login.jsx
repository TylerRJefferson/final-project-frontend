import { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, 
  signInWithPopup } from "firebase/auth";
import { Box, Button, Card, CardBody, CardFooter, Carousel, Form, FormField,
   Grommet, Image, TextInput } from "grommet";

const firebaseConfig = {
  apiKey: "AIzaSyCVe4J0EdfxXa1tDkx6T8XxjVf0id_2CKk",
  authDomain: "pocket-mechanic-auth.firebaseapp.com",
  projectId: "pocket-mechanic-auth",
  storageBucket: "pocket-mechanic-auth.appspot.com",
  messagingSenderId: "184534658125",
  appId: "1:184534658125:web:6f83af284a4de14b460004"
};

export default function Login({ setUser }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = async(e) => {
    e.preventDefault()
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const response = await signInWithEmailAndPassword(auth, email, password)
      .catch(alert);
    setUser(response.user)
  }

  const handleGoogleLogin = async() => {
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const response = await signInWithPopup(auth, provider)
      .catch(alert);
    setUser(response.user)
  }

  return (
    <Grommet>
      <Box height="medium" width="fill" overflow="hidden">
        <Carousel fill controls={false} play={5000}>
          <Image fit="cover" src="//images.unsplash.com/photo-1629479363534-ee1aa11b1e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" />
          <Image fit="cover" src="//images.unsplash.com/photo-1617137556171-8e0832a88829?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" />
          <Image fit="cover" src="//images.unsplash.com/photo-1595558884516-0a2eb78964e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDMwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" />
          <Image fit="cover" src="//images.unsplash.com/photo-1619844175408-c05947985e2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDI1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" />
        </Carousel>
      </Box>
        <Card style={{margin: "auto"}} background="light-4">
          <CardBody pad="medium">
            <Form onSubmit={handleLogin}>
              <FormField htmlFor="email">Email:{" "}
                <TextInput type="email" name="email"
                  value={email} onChange= {e => setEmail(e.target.value)}
                  placeholder="youremail@email.com" />
              </FormField> 
              <FormField htmlFor="password">Password:{" "}
                <TextInput type="password" name="password"
                  value={password} onChange= {e => setPassword(e.target.value)}
                  placeholder="••••••" />
              </FormField>
              <Button primary label="Login" type="submit"/> <br/>
            </Form>
          </CardBody>
          <CardFooter pad="small" direction="row" gap="medium" alignSelf="center">
            <Button secondary label="Sign In With Google" onClick={handleGoogleLogin} />
          </CardFooter>
        </Card>      
    </Grommet>
  )
}
