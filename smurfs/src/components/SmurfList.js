import React, { useContext, useEffect } from 'react';
import styled from 'styled-components/macro';
import { AppContext } from '../contexts/AppContext';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  margin: 1rem 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  overflow: hidden;
`;

const CardInfoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  margin-top: 2rem;
`;

const SmurfList = () => {
  const { smurf, smurfs, fetchSmurf } = useContext(AppContext);
  useEffect(() => {
    fetchSmurf();
  }, [smurfs]);
  return (
    <CardWrapper>
      {smurfs.map(smurf => (
        <CardInfoList key={smurf.id}>
          <div>
            <h1>{smurf.name}</h1>
            <h3>{smurf.age}</h3>
            <h3>{smurf.height}</h3>
          </div>
        </CardInfoList>
      ))}
    </CardWrapper>
  );
};

export default SmurfList;
