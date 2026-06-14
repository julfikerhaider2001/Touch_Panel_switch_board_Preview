import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js'
import { useEffect } from 'react'
import * as THREE from 'three'

// Simple color materials - no MTL dependency
const MATERIAL_COLORS = {
  // Based on your MaterialsGrid component colors
  grey: '#b3b3b3',    // Housing body
  glass: '#f6f6f3',   // Glass panel  
  brass: '#f3cb7c',   // Brass buttons
  steel: '#a0a0a0'    // Steel parts
}

export default function Model() {
  console.log('Loading OBJ file...')
  
  const obj = useLoader(OBJLoader, '/Touch panel board copied.obj')

  useEffect(() => {
    console.log('Model loaded, applying materials...')
    
    const colors = Object.values(MATERIAL_COLORS)
    let meshIndex = 0
    
    obj.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
        
        // Apply different colors to different meshes
        const color = colors[meshIndex % colors.length]
        
        child.material = new THREE.MeshStandardMaterial({
          color: color,
          roughness: 0.4,
          metalness: 0.3
        })
        
        console.log(`Applied color ${color} to mesh ${meshIndex}`)
        meshIndex++
      }
    })
    
    console.log(`Applied materials to ${meshIndex} meshes`)
  }, [obj])

  return <primitive object={obj} position={[0, 0, 0]} />
}
