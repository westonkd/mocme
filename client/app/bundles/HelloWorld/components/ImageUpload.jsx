import PropTypes from 'prop-types';
import React from 'react';

export default class ImageUpload extends React.Component {
  static propTypes = {
    phase: PropTypes.object,
    setBusy: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
  }

  imageSuccess = (e) => {
    this.props.setBusy(false);
    console.log("Image Uploaded");
  }

  imageFailure = (e) => {
    this.props.setBusy(false);
    alert("Error uploading image. Please make sure you are using the latest version of Chrome.");
    console.log(e);
  }

  handleSubmit(e) {
    e.preventDefault();
    self = this;

    this.props.setBusy(true);

    $.ajax({
      headers: {
        'Authorization': 'Client-ID ed30829b8d63619' // TODO move to env
      },
      type: 'POST',
      url: 'https://api.imgur.com/3/image',
      data: {image: this.state.imagePreviewUrl.split(',')[1]},
      success: self.imageSuccess,
      error: self.imageFailure
    });
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let previewImage = (
      <div className="mdl-cell--2-col">
        <div className="imgPreview">
          <img src={imagePreviewUrl} />
        </div>
      </div>
    );

    if (!imagePreviewUrl) {
      previewImage = null;
    }

    return (
      <div className="previewComponent mdl-grid mdl-grid--no-spacing">
        { previewImage }
        <div className="mdl-cell--10-col">
          <form onSubmit={(e)=>this.handleSubmit(e)}>
            <input
              type="file"
              onChange={(e)=>this.handleImageChange(e)}
              id="file-select-button"/>

            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
              type="submit"
              onClick={(e)=>this.handleSubmit(e)}>Upload Image</button>
          </form>
        </div>
      </div>
    )
  }
}
