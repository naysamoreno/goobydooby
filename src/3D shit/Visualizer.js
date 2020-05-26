import React from "react"
import * as THREE from "three"

class Visualizer extends React.Component {
    componentDidMount() {
        this.H = window.innerHeight
        this.W = window.innerWidth
        
        this.scene = new THREE.Scene() 
        this.scene.background = new THREE.Color("skyblue")

        const fieldOfView = 95
        const aspectRatio = this.W/this.H 
        const nearPlane = 0.1
        const farPlane =  1000
        this.camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane)
        this.camera.position.x = 0
        this.camera.position.y = 0
        this.camera.position.z = 10
        this.camera.lookAt(this.scene.position)

        const light = new THREE.AmbientLight(0x404040)
        this.scene.add(light)

        this.makeCube()

        this.renderer = new THREE.WebGLRenderer() 
        this.renderer.setSize(this.W, this.H)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.shadowMap.enabled = true
        this.mount.appendChild(this.renderer.domElement) 
        this.renderer.render(this.scene, this.camera)    
    }

    makeCube() {
        const geometry = new THREE.BoxGeometry(50,50,50)
        const material = new THREE.MeshBasicMaterial({color: "black"})
        const mesh = new THREE.Mesh(geometry, material) 
        // mesh.position.set(0,0,0)
        this.scene.add(mesh)
    }

    render() {
        return (     
            <div ref={ref => (this.mount = ref)} />
        )
    }
}

export default Visualizer