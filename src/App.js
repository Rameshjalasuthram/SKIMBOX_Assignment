import {Component} from 'react'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="carding2">
        <div className="title">
          <h1 className="titlehead">
            <hr /> Bundle & Save <hr />
          </h1>
        </div>
        <div className="card2">
          <div className="container">
            <div className="radioOption">
              <input type="radio" className="radio" />

              <div className="mini_card">
                <p className="par1">1 pair</p>
                <p className="amount">DKK 195.00</p>
              </div>
            </div>
            <h1 className="card2heading">50% OFF</h1>
          </div>
        </div>

        <div className="card3">
          <div className="container">
            <div className="radioOption">
              <input type="radio" checked className="radio" />

              <div className="mini_card">
                <p className="par1">1 pair</p>
                <p className="amount">DKK 195.00</p>
              </div>
            </div>
            <p className="last">DKK 105.00</p>
            <div className="most">
              <p className="mosting">Most Popular</p>
              <h1 className="cardheading">40% OFF</h1>
            </div>
          </div>
          <div className="color_setting">
            <div className="size_Setting">
              <p className="last1">size</p>
              <div className="part1">
                <p className="cardheading">#1</p>
                <select className="selcetd">
                  <option className="cardheading">S</option>
                </select>
              </div>
              <div className="part1">
                <p className="cardheading">#2</p>
                <select className="selcetd">
                  <option className="cardheading">S</option>
                </select>
              </div>
            </div>
            <div className="size_Setting">
              <p className="last1">Color</p>
              <div className="part1">
                <p className="cardheading">#1</p>
                <select className="selcetd">
                  <option className="cardheading">Color</option>
                </select>
              </div>
              <div className="part1">
                <p className="cardheading">#2</p>
                <select className="selcetd">
                  <option className="cardheading">Color</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="card2">
          <div className="container">
            <div className="radioOption">
              <input type="radio" className="radio" />

              <div className="mini_card">
                <p className="par1">3 pair</p>
                <p className="amount">DKK 528.00</p>
              </div>
            </div>
            <h1 className="card2heading">60% OFF</h1>
          </div>
        </div>
        <div className="total">
          <h1 className="totalhead">free 2 days shipping</h1>
          <h1 className="totalhead1">
            Total : <span className="par1">DKK 360.00</span>
          </h1>
        </div>
        <div className="button">
          <button type="button" className="btn">
            + Add To Cart
          </button>
        </div>
      </div>
    )
  }
}

export default App
