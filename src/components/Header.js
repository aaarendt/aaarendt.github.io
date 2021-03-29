import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <h1>Male Journeys</h1>
                    <h2>A Courage and Renewal Experience</h2> 
                    <h3>Retreats, wilderness hikes and online forums to support men's inner journey toward wholeness and community.</h3>
                    <h4>Join us for our next <a href="retreats">virtual retreat</a>: April 17, 2021</h4>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Welcome</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
