import { Component } from "react"



class Token3D extends Component
{
    static getInitialProps(props)
    {
        const tokenURL = `background-image: ${props.Token_URL}`
        console.log(tokenURL);
        return tokenURL;
    }
    render()
    {
        return(
            <div className="coin">
                <img src={this.props.Token_URL} className='coin__front' style={this.props.tokenURL} width="500" height="600" />
                <div className="coin__edge">
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>

                </div>
                <img src={this.props.Token_URL} className='coin__back' width="500" height="600" />
                <div className="coin__shadow"></div>
            </div>
        )
    }
}
export default Token3D;