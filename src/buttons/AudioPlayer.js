import { Audio, AudioLoader, AudioAnalyser, AudioListener} from "three"


class AudioPlayer {
    constructor(props) {
        this.props = props;
        // this is how you create an HTML Element in Javascript
        this.button = document.createElement("button"); // <button></button>
        this.button.innerHTML = ("play"); // <button> Play </button>
        this.button.style = `
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        `;

        this.addEventListeners()
    }

    getFrequencyData = () => {
        return this.audioAnalyser.getFrequencyData();
    }

    addEventListeners = () => {
        this.button.addEventListener("click", this.handleClick);
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API 
    handleClick = () => {;
        const listener = new AudioListener();
        const audio = new Audio(listener); // <audio></audio>
        this.props.camera.add(listener);
        const loader = new AudioLoader();
        loader.load(this.props.song, function(buffer) {
            audio.setBuffer(buffer)
            audio.play()
            this.props.onAudioPlay()
        }.bind(this));
        this.audioAnalyser = new AudioAnalyser(audio, this.props.frequencyCount || 2048);
    }

}
 
export default AudioPlayer;

