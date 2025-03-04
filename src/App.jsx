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
    <Canvas dpr={[1,2]} shadows camera={{fov: 45}}>
      <color attach="background" args={["#101010"]} />
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]}>
        
      </PresentationControls>
    </Canvas>
  )
}

export default App
