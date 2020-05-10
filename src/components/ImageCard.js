import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }


    setSpans = () => {
        console.log(this.imageRef.current.clientHeight)
    }

    render() {
        return (
            <div>
                <img
                    alt={this.props.image.description}
                    src={this.props.image.urls.regular}
                    ref={this.imageRef} />
            </div>
        );
    }
}

export default ImageCard;