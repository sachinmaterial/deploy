import React, { Component } from 'react';
// import CropEasy from './CropEasy';

function scrollDiv_r() {
    document.getElementById("d").scrollLeft += 400;
}

function scrollDiv_l() {
    document.getElementById("d").scrollLeft -= 400;
}
let index = 0;
function removeData() {
    this.fileArray.splice(1);
}



export class PortfolioImageUploader extends Component {

    fileObj = [];
    fileArray = [];
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
        this.uploadMultipleFiles = this.uploadMultipleFiles.bind(this)
        this.uploadFiles = this.uploadFiles.bind(this)
    }
    uploadMultipleFiles(e) {
        this.fileObj.push(e.target.files)
        for (let i = 0; i < this.fileObj[0].length; i++) {
            this.fileArray.push(URL.createObjectURL(this.fileObj[0][i]))
        }
        this.setState({ file: this.fileArray })
    }
    uploadFiles(e) {
        e.preventDefault()
    }







    deletePortfolioImages = (portindex) => {
        const myportfolio = (this.fileArray || []);
        myportfolio.splice(portindex, 1);
        this.setState({ file: this.fileArray })
    }

    render() {
        let MultiplePreview;
        if (this.state.file) {
            MultiplePreview =
                <>
                    <button className="button_arrow_left" onClick={scrollDiv_l}><i className="fa fa-angle-left arrow"></i></button>
                    <button className="button_arrow_right" onClick={scrollDiv_r}><i className="fa fa-angle-right arrow"></i></button>
                    <div className="scroller" id="d">

                        {(this.fileArray || []).map((url, index) => {
                            return <>
                                <img className="multiple_image_size" src={url} alt="..." />
                                <img className="relative_image" onClick={this.deletePortfolioImages.bind(this, index)} src="/icons/cross.svg" alt="..." />
                            </>
                        })}

                    </div>
                </>
        }
        




        return (
            <div className='project-image-upload-file'>
                <input type="file" onChange={this.uploadMultipleFiles} multiple />
                <div className='upload-icon-container'>
                    <img src="/icons/backup.png" alt="upload" />
                    <div className='upload_discription'>Drop file or Choose a File</div>
                </div>
                {this.fileArray.length != 0 ? MultiplePreview : null}
            </div>
        )
    }
}

export default PortfolioImageUploader