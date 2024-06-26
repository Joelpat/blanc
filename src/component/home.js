import React from "react";
import ReactAvatarEditor from "react-avatar-editor";

class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            allowZoomOut: false,
            position: { x: 0.5, y: 0.5},
            scale: 1,
            rotate: 0,
            borderRadius: 50, preview: null, width: 230, heigth: 230,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNewImage = (e) => {
        this.setState({ image: e.target.files[0] });
    };

    handleScale = (e) => {
        const scale = parseFloat(e.target.value);
        this.setState({ scale });
    };

    handlePositionChange = (position) => {
        this.setState({ position });
    };

    setEditorRef = (editor) => (this.editor = editor);

    async handleSubmit(e) {
        if(this.editor) {
            const img = this.editor.getImageScaledToCanvas().toDataURL();
        }
    }

    render() {
        return (
            <div>
              <div>
                <ReactAvatarEditor ref={this.setEditorRef} scale={parseFloat(this.state.scale)}
                width={this.state.width} height={this.state.heigth} position={this.state.position}
                onPositionChange={this.handlePositionChange} rotate={parseFloat(this.state.rotate)}
                borderRadius={this.state.width / (100 / this.state.borderRadius)} image={this.state.image}

                color={[255, 255, 255, 0.6]} className="editor-canvas"
                />

              </div>
              <br />
              <label>
                <input
                name="upload-img-input" type="file" onChange={this.handleNewImage} />

                 <h3>upload Photo</h3>
              </label>
              <br />
              <h3>Zoom</h3>
              <input name="scale" type="range" onChange={this.handleScale} 
              min={this.state.allowZoomOut ? "0.1" : "1"} max="2"
              
              step= "0.01"
              defaultValue="1"
              />
              <div>
                <button onClick={this.handleSubmit}>SUBMIT</button>
              </div>
              
            </div> 
        )
    }
}
const Home = () => {
    const date = new Date();
    const ourTime =  date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '' + '';
    const regisTime = date.getHours;
    return (
        <>
        <UploadImage />
        <h3>{ourTime}</h3>;
        <h3>{(regisTime < 8 || regisTime > 17) ? 'The registration is closed!' : 'The registration is opened'}</h3>;
        </>
    )
}

export default Home;