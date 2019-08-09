import React from 'react';

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.state = { spans : 0};

        this.imageRef = React.createRef();
    }

    componentDidMount(){   //adding event listener waiting for the image to load
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 150);   //finding out how many spans does an image need

        this.setState = ({ spans});   //setting state to match the number of spans needed
    };

    render() {
        const {description, urls} = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img 
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;