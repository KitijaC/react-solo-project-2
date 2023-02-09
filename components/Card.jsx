import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card--image">
                <img className="card--image-url" src={props.item.imageUrl}/>
            </div>
            <div className="card--content">
                <div className="card--location">
                    <FaMapMarkerAlt className="card--location-icon" />
                    <p className="card--location-name">{props.item.location}</p>
                    <a className="card--location-link" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <div className="card--title-description">
                    <h1 className="card--title-name">{props.item.title}</h1>
                    <p className="card--date">{props.item.startDate} - {props.item.endDate}</p>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}