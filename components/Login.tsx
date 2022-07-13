import styled from "styled-components";
import {useMoralis} from "react-moralis";

export const Login = () => {
    const { authenticate } = useMoralis()

    const handleLogin = async () => {
        await authenticate()
    }

    return (
        <Container>
            <h1>Login</h1>
            <LoginButton onClick={handleLogin}>Login to Metaverse</LoginButton>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  color: white;
  background: url(https://links.papareact.com/55n) no-repeat;
  background-size: cover;
`

const LoginButton = styled.div`
  flex: 0;
  width: fit-content;
  height: fit-content;
  padding: 20px;
  background: #cdbb32;
  font-weight: bold;
  border-radius: 10px;
  text-wrap: none;
  white-space: nowrap;
  cursor: pointer;
`