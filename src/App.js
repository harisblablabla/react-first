import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import HandlingEvent from './component/HandlingEvent'
import { Link, Route } from 'react-router-dom';
// import { Flip } from 'react-reveal/Flip'
import Axios from 'axios';

class App extends Component {


  constructor(props) {
    super(props)
    this.nama_panjang = 'andi'
    this.state = {
      nama: '',
      umur: '',
      judul:[],
      data: 0
    }

    //pake bind, jadi pas dipanggil tinggal panggil biasa gaharus masukin fungsi (arrow function)
    this.setNewNumber = this.setNewNumber.bind(this)
  }

  componentDidMount() {
    this.getFacebook()
  }

  getFacebook = () => {
    Axios.get('http://www.omdbapi.com/?s=avatar&apikey=90c122f6')
    .then(res => {
      var film = res
      var optionArray = []
      for(var i = 0;i<film.data.Search.length;i++) {
        var x = (film.data.Search[i].Title)
        optionArray.push(x)
      }
      this.setState({
        judul: optionArray
      })
      console.log(this.state.judul)
    })
  }

  sum(x) {
    return x += 3
  }

  
  setNewNumber() {
    this.setState({data:this.state.data + 1})
  }



  render() {

    var nama = 'johan'
    var style_h1 = {
      color: 'yellow',
      background: 'blue'
    }

    var biodata = {
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
        <div>
            <button onClick={this.setNewNumber}>tambah bro</button>
            <h1>{this.state.data}</h1>
            <HandlingEvent lifecycle={this.state.data}></HandlingEvent>
        </div>
        
      <h1 style={style_h1}>Hello World! {nama} !</h1>
      <h1>coba get data</h1>
       <h1>{this.state.judul[2]}</h1>
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
      <center>
        <h1>coba routing</h1>
        <ul>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/Header">Header</Link></li>
          <li><Link to="/HandlingEvent">Handling Event</Link></li>
          <li><Link to="/Footer">Footer</Link></li>
        </ul>
        {/* <Flip>
        <h1 style={{fontSize:'30px'}}>halo flip</h1>
      </Flip> */}
      </center>
      

  
    {/* <Route path="/" component={'Home'}/> */}
    <Route path="/Header" component={Header}/>
    <Route path="/Footer" component={Footer}/>
    <Route path="/HandlingEvent" component={HandlingEvent}/>

    
    </div>
    );
  }
}

export default App;
