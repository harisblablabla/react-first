import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import HandlingEvent from './component/HandlingEvent'

class App extends Component {


  constructor() {
    super()
    this.nama_panjang = 'andi'
    this.state = {
      nama: 'andi kangen band',
      umur: '30'
    }
  }

  sum(x) {
    return x += 3
  }

  render() {

    var nama = 'johan'
    var style_h1 = {
      color: 'yellow',
      background: 'blue'
    }

    const biodata = {
      nama: 'johan',
      marga: 'batak'
    }

    function embed_express(id) {
      return id.nama + ' ' + id.marga
    }

    function conditional_rendering(x) {
      const udah_login = x
      if(udah_login) {
        return 'udah login'
      }
      return 'belum login'
    }

    var teks = 'this footer created by props'
    const siswa = ['bagas','aji','sby']
    const listSiswa = siswa.map((siswa,index_siswa) => 
     <li key={index_siswa}>{siswa} indexnya {index_siswa}</li>
    )

    // UPDATE STATE PAKE SETSTATE BIASA
    setTimeout(() => {
      this.setState({nama: 'abbiramax'})
    },3000)

    return (
      <div>
        <Header></Header>
      <h1 style={style_h1}>Hello World! {nama} !</h1>
      <h2>puspa = {this.sum(8)}</h2>
      <div>
      <p style={{color:'green',textAlign:'center'}}>jangan jangan jangan</p>
      {/* agak bingung constructor dibawah tapi di declarenya pake this */}
      <p> constructor {this.nama_panjang}</p>  
      {/* embedded expression  */}
      <h3> biodata {embed_express(biodata)}</h3>
      {/* conditional_rendering */}
     <h3 style={{color:'red'}}>kondisi => {conditional_rendering(true)}</h3>
     {/* multiple rendering */}
    <ul><h3>{listSiswa}</h3></ul>
      </div>

      {/* state */}
    <h4>STATE {this.state.nama + " " + this.state.umur}</h4>

      <Footer content={this.state.nama} usia={this.state.umur}></Footer>
      <h1>...........</h1>
      <HandlingEvent></HandlingEvent>
    </div>
    );
  }
}

export default App;
