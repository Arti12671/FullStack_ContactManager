import axios from 'axios'
import React, { Component } from 'react'

export default class WeatherService extends Component {
  
  static serverUrl="http://localhost:7000"
  static getData(){
    let baseUrl=`${this.serverUrl}/temperature`
    return axios.get(baseUrl)
  }
}
