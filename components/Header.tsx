import styled from "styled-components";
import {useMoralis} from "react-moralis";
import {Avatar} from "./Avatar";
import {UsernameComponent} from "./UsernameComponent";

export const Header = () => {
    const { user, logout } = useMoralis()
    const username = user?.getUsername() || 'anonymous'

    const handleLogout = async () => {
        await logout()
    }

    return (
        <Container>
            <h1> Welcome to Metaverse </h1>
            <Avatar onClick={handleLogout} isBig={true} username={username}/>
            <UsernameComponent username={username}  />
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`