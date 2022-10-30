import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import Card from '../components/Card';
function Home({type}) {
  const [videos,setVideos] = useState([]);

  useEffect(()=> {
    const fetchVideos = async () => {
      const fetch = await axios.get(`/videos/${type}`);
      setVideos(fetch.data);
      
    }

    fetchVideos();
  },[type]);

  return (
    <Container>
      {
        videos.map(video => {
          
          <Card video={video} key={video._id} />
        })
      }
    </Container>

    )
}

const Container= styled.div`
display:flex;
justify-content:space-between;
flex-wrap:wrap;
`;
export default Home