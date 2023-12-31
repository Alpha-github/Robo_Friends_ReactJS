import React, {Component} from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError:false
        }
    }

    componentDidCatch(error,info){   // Like the try-catch block
        this.setState({hasError:true});
    }

    render(){
        if(this.state.hasError){
            return <h1>Oops! That isn't good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;