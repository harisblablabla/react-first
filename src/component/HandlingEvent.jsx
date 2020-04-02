import React, {Component} from 'react';

class HandlingEvent extends Component {

    constructor() {
        super()
        this.state = {
            nama: 'ahmad',
            usia: '90',
            lokasi: 'jakarta',
            count: 0
        }
    }

    componentDidMount() {
        console.log('component did mount ' + this.state.nama)
    }

    UNSAFE_componentWillMount() {
        this.setState({nama:'will smith'})
        console.log('will mount ' + this.state.nama)
    }

    tambah() {
        this.setState({count: this.state.count + 1})
    }

    kurang() {
        this.setState({count: this.state.count - 1})
    }

    klik(x,y) {
        alert('udah di klik boss ' + x + ' di ' + y)
    }

    updateName(x) {
        this.setState({nama: x,usia: this.refs.age.value})
    }

    render() {

        var bio = {
            nama: 'haris',
            usia: '22'
        }
        return(
            <div className="handling">
                <h1>INI BELAJAR HANDLING EVENT</h1>
                <h1 style={{background:'red',color:'blue'}}>Halo {this.state.nama}</h1>
                <button onClick={() => {this.updateName(bio.nama)}}>ubah nama anda</button>
                <button onClick={() => {this.klik(this.state.nama,this.state.lokasi)}}>klik disini</button>
                
                <center>
                    <h2>{this.state.count}</h2>
                    <button onClick={() => {this.tambah()}}>tambah</button>
                    <span>   </span>
                    <button onClick={() => {this.kurang()}}>kurang</button>
                    <h3>Halo {this.state.usia}</h3>
                    <input ref="age" type="text"/>
                    <button onDoubleClick={() => {this.updateName(bio.nama)}}>ubah usia</button>

                    {/* <input ref="age" type="text" onInput={() => {this.updateName(bio.nama)}}/> */}
                    
                </center>
            </div>
        )
    }
}

export default HandlingEvent 