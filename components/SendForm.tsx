import React, {useState} from "react";
import styled from "styled-components";

type Props = {
    onSend: (message: string) => Promise<boolean>
}

export const SendForm = (props: Props) => {

    const [message, setMessage] = useState<string>('')

    const handleChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('----handleClick message=', message)
        e.preventDefault()
        if (!message) {
            return
        }
        if (await props.onSend(message)) {
            setMessage('')
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type={'text'} value={message} onChange={handleChangeMessage} autoFocus={true} placeholder={'Enter message'} />
            <SubmitButton onClick={handleClick} disabled={!message} />
        </Form>
    )
}

const Form = styled.form`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`
const Input = styled.input`
  outline: 0;
  min-width: 600px;
  background: transparent;
  color: white;
  border: 3px solid pink;
  border-radius: 10px;
  padding: 9px;
`

const SubmitButton = styled.button`
  display: none;
`