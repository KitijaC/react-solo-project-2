import React from 'react'
import data from "./data"
import Title from "./components/Title"
import Card from "./components/Card"

export default function App() {
    const cards = data.map(item => {
        return ( 
            <Card 
                item={item}
            />
        )
    })
    return (
        <div>
            <Title />
            <section className="cards--list">
                {cards}
            </section>
        </div>
    )
}

