import React from "react";
import "./imageList.css";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imagRef = React.createRef();
    this.state = { span: 0 };
  }

  componentDidMount() {
    this.imagRef.current.addEventListener("load", this.setspan);
  }

  setspan = () => {
    const span = Math.ceil(this.imagRef.current.clientHeight / 10);
    this.setState({ span });
    console.log(span);
  };
  render() {
    const { urls, description } = this.props.imag;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imagRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
