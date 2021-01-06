import React, {Component} from 'react'

class ErrorBoundry extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            hasError: false
        }
    }
    compnentDidCatch(error,info){
        this.setState({ hasError:true})
    }
    render()
    {
        if(this.state.hasError)
        {
            <h1>Ooooops. Thats not good</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundry;