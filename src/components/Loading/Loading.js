import React from 'react';
import styled from 'styled-components';
const Loading = () => {
  return <LoadingWrapper><h1>LOADING...</h1></LoadingWrapper>;
};

export default Loading;

const LoadingWrapper = styled.div`
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);

`
