import {Message} from "../types";
import styled from "styled-components";
import {useMoralis} from "react-moralis";
import {Avatar} from "./Avatar";

type Props = {
    message: Message
}

export const MessageListItem = (props: Props) => {
    const { user } = useMoralis()

    const message = props.message

    const isUserMessage = user && props.message.ethAddress === user.get('ethAddress')

    if (isUserMessage) {
        const username = user?.getUsername() || 'anonymous'
        return (
            <Container>
                <TextAndAvatar>
                    <UserMessage>{message.text}</UserMessage>
                    <Avatar username={message.username} isBig={false} />
                </TextAndAvatar>
                <Username>{username}</Username>
            </Container>
        )
    }
    return (
        <Container>
            <TextAndAvatar>
                <Avatar username={message.username} isBig={false} />
                <OtherMessage>{message.text}</OtherMessage>
            </TextAndAvatar>
            <Username>{message.username}</Username>
        </Container>
    )

}
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`
const TextAndAvatar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`

const UserMessage = styled.span`
  min-width: 100px;
  color: black;
  background: pink;
  border-radius: 10px;
  border-bottom-right-radius: 0;
  padding: 10px;
  margin-right: 5px;
`
const OtherMessage = styled.span`
  min-width: 100px;
  color: black;
  background: lightblue;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  padding: 10px;
  margin-left: 5px;
`
const Username = styled.div`
  font-size: 0.7rem;
  color: pink;
`