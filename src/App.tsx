import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas } from '@react-three/fiber';
import { createXRStore, XR } from '@react-three/xr';

const store = createXRStore()

function App() {
   const [red, setRed] = useState(false)
  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas>
        <XR store={store}>
           <ambientLight />
          <mesh pointerEventsType={{ deny: 'grab' }} onClick={() => setRed(!red)} position={[0, 1, -1]}>
             <boxGeometry args={[0.2, 0.2, 0.2]}/>
            <meshBasicMaterial color={red ? 'red' : 'blue'} />
          </mesh>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
