import styled from "styled-components";
import {MessageList} from "./MessageList";
import {SendForm} from "./SendForm";
import {useMoralis, useMoralisQuery} from "react-moralis";
import {Message} from "../types";
import {useEffect, useState} from "react";

export const Messages = () => {

    const [messages, setMessages] = useState<Message[]>([])

    const { Moralis, user } = useMoralis()
    const { data, isLoading, isFetching, error } = useMoralisQuery<Message>(
        'Messages',
        (query) => query.ascending('createdAt'),
        [],
        {live: true}
    )

    useEffect(() => {
        if (!data) {
            return
        }
        const msgs: Message[] = []
        for (let d of data) {
            const msg: Message = {
                id: d.id,
                createdAt: d.createdAt,
                text: d.get('text'),
                username: d.get('username'),
                ethAddress: d.get('ethAddress')
            }
            msgs.push(msg)
        }
        setMessages(msgs)
    }, [data])

    console.log('---data=', data)

    const handleSend = async (message: string) => {
        console.log('---handleSend1 user=', user, ' message=', message)
        if (!user) {
            return false
        }
        const Messages = Moralis.Object.extend('Messages')
        const msgs = new Messages()
        const msgObj = {
            text: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress')
        }
        await msgs.save(msgObj)
        /*
        const newMessages = [...messages, {...msgObj, createdAt: new Date(), id: '123', username: user.getUsername() || '', ethAddress: user.get('ethAddress')}]
        setMessages(newMessages)
        console.log('---handleSend2 messages=', newMessages)

         */
        return true
    }

    return (
        <Container>
            <MessageList messages={messages} isLoading={isLoading || isFetching}/>
            <SendForm onSend = {handleSend} />
        </Container>
    )
}

const Container = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`