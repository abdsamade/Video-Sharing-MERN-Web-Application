import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Card({type,video}) {
  return (
    <Link to={`/video/${video._id}`}>
      <Container>
      <Container type={type}>
        <Image
          type={type}
          src={video.imgUrl}
        />
        
        <Details type={type}>
          <ChannelImage
            type={type}
            src={channel.img}
          />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} views • {format(video.createdAt)}</Info>
          </Texts>
        </Details>
      </Container>
      </Container>
    
    </Link>

      );
}
const Container= styled.div`
width:300px;
cursor:pointer;
margin-bottom:45px;
`

const Image= styled.img`
width:100%;
height:205px;
background-color:red;
cursor:pointer;
`


const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

export default Card