import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <h1>Male Journeys</h1>
                    <h2>(website under construction, Oct 2019)</h2> 
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Welcome</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
