import styled from "styled-components"
import { useState } from "react"


export default function Login(){

    let [email,setEmail] = useState("");
    let [pass,setPass] = useState("");

    const handleEmail =(e)=>{
        setEmail(e.target.value)
        console.log(email)
    }

    const handlePass =(e)=>{
        setPass(e.target.value)
        console.log(pass);
    }
    const handleSubmit=()=>{
        //logins user
    }

    return(
        <Container>
            
            <LoginCnt>
                <Heading>Login</Heading>
                <SecondaryDiv>
                    <Formitem><input style={{height:"40px",width:"100%",border:"none"}} type="email" value={email} onChange={handleEmail} placeholder="Enter email"></input></Formitem>
                    <Formitem><input style={{height:"40px",width:"100%",border:"none"}} type="email" value={pass} onChange={handlePass} placeholder="Enter password"></input></Formitem>
                </SecondaryDiv>
                
                <Button onClick={handleSubmit}>Login</Button>

            </LoginCnt>
        </Container>
    )


}
// const LoginBtn = styled.button`
//     p
// `

const Heading = styled.h2`
    color: white;
    letter-spacing: 1px;
`
const Button = styled.button`
    padding: 10px 25px 10px 25px;
    background: #1B66CA;
    color: white;
    letter-spacing: 1px;
    border-radius: 6px;
    
`

const Container = styled.div`
    min-height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    
    

`
const SecondaryDiv = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
// background: green;
border: 0.5px solid lightgray;
height:55%;
width:100%;
`

const LoginCnt = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: lightgray;
    padding: 25px;
    height: 400px;
    min-width:300px;
`

const Formitem = styled.div`
    width: 100%;
    display: flex;
    background: gray;
`