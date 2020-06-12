import React from "react"
import * as THREE from "three"
import {getRandomRetroColor} from "../Util"
import AudioPlayer from"../buttons/AudioPlayer"

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

        this.generateMatrix()
        this.setUpAudio()
        this.renderer = new THREE.WebGLRenderer() 
        this.renderer.setSize(this.W, this.H)
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.shadowMap.enabled = true
        this.mount.appendChild(this.renderer.domElement) 
        this.renderer.render(this.scene, this.camera)   

    }

    generateMatrix() {
        const geometry = new THREE.BoxGeometry(1,1,1)
        const material = new THREE.MeshBasicMaterial({color: getRandomRetroColor()})
        this.mesh = new THREE.Mesh(geometry, material) 
        this.mesh.position.set(0,0,0)
        this.scene.add(this.mesh)
    

        const sphereGeometry = new THREE.SphereGeometry(3)
        const sphereMaterial = new THREE.MeshBasicMaterial({color: getRandomRetroColor(), shading: THREE.SmoothShading})
        this.wesh = new THREE.Mesh(sphereGeometry, sphereMaterial)
        this.wesh.position.set(15,0,-10)
        this.scene.add(this.wesh)
    }
    update = () => {
        requestAnimationFrame(this.update)

        // this.wesh.rotation.x -= 0.01
        this.mesh.rotation.x += 0.01

        const frequencyList = this.audioPlayer.getFrequencyData()
        const amplitude = (frequencyList[0] / 50) + 1
        console.log(amplitude)
        this.mesh.scale.set(amplitude, amplitude, amplitude)  
        this.wesh.scale.set(amplitude, amplitude, amplitude)

        this.renderer.render(this.scene, this.camera)
    }

    setUpAudio = () => {
        this.audioPlayer = new AudioPlayer({
            camera: this.camera,
            song: this.props.song,
            onAudioPlay: this.onAudioPlay,
            frequencyCount: 128
        })
        this.mount.appendChild(this.audioPlayer.button);
    }

    onAudioPlay = () => {
        this.mount.removeChild(this.audioPlayer.button);
        this.update()
    }


    render() {
        return (     
            <div ref={ref => (this.mount = ref)} />
        )
    }
}

export default Visualizer