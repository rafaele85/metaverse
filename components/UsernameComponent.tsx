import React, {useState} from "react";

import styled from "styled-components";
import Edit from '@material-ui/icons/Edit'
import Check from '@material-ui/icons/Check'
import {useMoralis} from "react-moralis";

type Props = {
    username: string
}

export const UsernameComponent = (props: Props) => {
    const [isEditing, setEditing] = useState<boolean>(false)
    const [username, setUsername] = useState<string>(props.username)

    const {setUserData} = useMoralis()

    const handleEdit = () => {
        setEditing(true)
    }

    const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const handleSave = async () => {
        setEditing(false)
        if (username) {
            await setUserData({
                username
            })
        }

    }

    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Escape') {
            setUsername(props.username)
            setEditing(false)
        }
    }


    let jsxUsername
    let jsxButton
    if (isEditing) {
        jsxUsername = (
            <Input type={'text'} value={username} onChange={handleChangeUsername} onKeyUp={handleKey} />
        )
        jsxButton = (
            <SaveButton onClick={handleSave}/>
        )
    } else {
        jsxUsername = (
            <UsernameText>{username}</UsernameText>
        )
        jsxButton = (
            <EditButton onClick={handleEdit}/>
        )
    }

    return (
        <Container>
            {jsxUsername}
            {jsxButton}
        </Container>
    )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const UsernameText = styled.span`
  font-size: 1rem;
  font-weight: bold;
`

const EditButton = styled(Edit)`
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`
const SaveButton = styled(Check)`
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`

const Input = styled.input`
  font-size: 1rem;
  font-weight: bold;
`
