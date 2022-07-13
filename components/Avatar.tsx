import Image from 'next/image'
import styled from "styled-components";

type Props = {
    username: string
    onClick?: () => void
    isBig?: boolean
}

export const Avatar = (props: Props) => {
    const username = props.username

    const handleClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }

    const avatarUrl = `https://avatars.dicebear.com/api/male/${username}.svg`
    const size = props.isBig ? 60 : 30
    const borderSize = props.isBig ? 4 : 0
    return (
        <AvatarContainer size={size} borderSize={borderSize}>
            <StyledImage src={avatarUrl} width={size} height={size} onClick={handleClick}/>
        </AvatarContainer>
    )
}

const StyledImage = styled(Image)`
  cursor: pointer;
`
const AvatarContainer = styled.div<{size: number, borderSize: number}>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  max-width: ${p => p.size}px;
  max-height: ${p => p.size}px;
  border: ${p => p.borderSize}px solid pink;
  border-radius: 100%;
  padding: 4px;
  &:hover {
    opacity: 0.75;
  }

`