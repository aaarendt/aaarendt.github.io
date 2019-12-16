import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/AJA.jpg'
import pic02 from '../assets/images/altar1.jpg'
import pic03 from '../assets/images/sawtooths1.jpg'
import pic04 from '../assets/images/circle.png'
import pic05 from '../assets/images/online-community.png'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Male Journeys";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>A Courage and Renewal Experience</h2>
                            </header>
                            <p>"New Leadership is needed for new times, but it will not come from finding more wily ways to manipulate the external world. It will come as we who serve and teach and lead find the courage to take an inner journey toward both our shadows and our light." Parker J. Palmer</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="image fit"><img src={pic01} alt="Anthony, Jeff and Aaron" /></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>About Us</h2>
                            </header>
                            <p>Jeff Creswell is a <a href="http://www.couragerenewal.org/">Center for Courage and Renewal<sup>&copy;</sup></a> facilitator mentored by activist and writer Parker Palmer. He is also an educational consultant.
                            </p>
                            <p>Anthony Arendt is an earth scientist at the University of Washington in Seattle. He is enrolled in the Courage and Renewal Facilitator preparation program.
                            </p>
                            <p>Aaron Bishop is an active outdoorsman and co-facilitator of several Courage and Renewal offerings. He works for Walmart as a Health and Wellness Director.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Current Offerings</h2>
                            </header>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>Men's Retreats</h3>
                            <p>Multi-day retreats providing opportunties for reflection and finding our way in community.</p>
                            <ul className="actions">
                                <li><a href="retreats" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>Wilderness Trips</h3>
                            <p>Guided outdoor backpacking trips where we deepen our connection to our selves, each other and the natural world.</p>
                            <ul className="actions">
                                <li><a href="wilderness" className="button">More</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic05} alt="" /></span>
                            <h3>Online Communities</h3>
                            <p>Facilitated virtual conversations where we listen to each other's stories and explore specific topics.</p>
                            <ul className="actions">
                                <li><a href="online" className="button">More</a></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Contact Us</h2>
                        </header>
                        <p>For more information, contact us via e-mail. We are glad to provide additional details about our offerings.</p>
                        <ul className="actions uniform">
                            <li><a href="mailto:malejourneys@gmail.com" className="button special">E-mail</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
