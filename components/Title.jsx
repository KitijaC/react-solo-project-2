import React from "react"
import { FaGlobeAmericas } from "react-icons/fa"

export default function Title() {
    return (
        <div className="title">
            <FaGlobeAmericas className="title--icon"/>
            <p className="title--text">my travel journal.</p>
        </div>
    )
}