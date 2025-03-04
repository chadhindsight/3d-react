import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
// Imported hooks that let us use react functionality in three.js
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';


function Model(props) {
  const {scene} = useGLTF("/bmw_m4.glb");

  return <primitive object={scene} {...props} />
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Canvas >
      
    </Canvas>
  )
}

export default App
