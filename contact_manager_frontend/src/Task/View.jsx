import React, { useEffect, useState } from 'react'
// import WeatherService from './WeatherService'
import Spinner from '../Components/Spinner/Spinner'
import axios from 'axios'

const View = () => {
    let [state, setState] = useState({
        loading: false,
        temperature: [],
        errorMessage: ""
    })
    useEffect(() => {
        let promise = new Promise((res, rej) => {
            setState({ ...state, loading: true })
            let response = axios.get("http://localhost:7000/temperature")
            console.log(response)
            res(response)
        })
        promise.then((re1) => {
            setState({ ...state, loading: false, temperature: re1.data })
        }).catch(() => {
            setState({ ...state, loading: false, errorMessage: alert("data is not available") })
        })
    }, [])

    let { loading, temperature, errorMessage } = state
    return (
        <div>
            {/* <pre>
                {JSON.stringify(temperature)}
            </pre> */}
            <div className="container">
                <div className="row mt-3">
                    <img src="" alt="" />
                    <p className="h2 text-center text-info">WEATHER FORECASTING OF MAHARASTRA</p>
                </div>
                <div className="row">
                    {
                        loading ? <Spinner /> : <React.Fragment>
                            {
                                temperature.length>0 && temperature.map((temp) => {
                                    return (<div className="col-md-6 mx-auto mt-3">
                                        <div className="card p-3 my-2">
                                            <div className="card-title text-center"><p className="h3"><i className='fa fa-cloud text-info'/> {temp.city}</p></div>
                                            <div className="card-body align-item-center">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <img src={temp.photo} className='img-fluid weather-img' alt="" />
                                                    </div>
                                                    <div className="col-md-6">
                                                        <ul className="list-group">
                                                            <li className="list-group-item list-group-item-action">
                                                                <p className="h5 text-warning">Temperature: <span className='text-dark '>{temp.temperature}</span>
                                                                </p></li>
                                                            <li className="list-group-item list-group-item-action">Humidity: {temp.humidity}</li>
                                                            <li className="list-group-item list-group-item-action">Wind: {temp.wind}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                                })
                            }
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default View