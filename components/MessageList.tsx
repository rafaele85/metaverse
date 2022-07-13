import styled from "styled-components";
import {MessageListItem} from "./MessageListItem";
import {Loading} from "./Loading";
import {Message} from "../types";

type Props = {
    messages: Message[]
    isLoading: boolean
}

export const MessageList = (props: Props) => {

    if (props.isLoading) {
        console.log('----return loading')
        return <Loading />
    }

    const jsx: JSX.Element[] = []

    for (let msg of (props.messages || []) ) {
        jsx.push((
            <MessageListItem key={msg.id} message={msg} />
        ))
    }

    return (
        <Container>
            {jsx}
        </Container>
    )
}

const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  border: 1px solid pink;
  border-radius: 3px;
`
