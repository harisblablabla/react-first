import React, {Component} from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer" style={{background:'yellow', color:'red'}}>
                <h1>footer</h1>
                <h2>buatan haris</h2>
                <button className="btn btn-primary">footer nih</button>
                <h4>{this.props.content + ' ' + this.props.usia}</h4>
                <h4>{this.props.usia}</h4>
            </div>
        )
    }
}

export default Footer;