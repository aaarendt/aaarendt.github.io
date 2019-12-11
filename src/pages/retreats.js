import React from "react";
import Footer from '../components/Footer';
import Layout from '../components/layout-pages';
import pic01 from '../assets/images/pic01.jpg'

export default () => (
    <Layout>
<div className="grid-wrapper">
<div className="col-6">
    <header className="major">
        <h2>Retreat Offerings</h2>
    </header>
    <h3> Breitenbush Hot Springs, Sept. 4-7, 2020 </h3>
    <h4> A Courage and Renewal<sup>&copy;</sup> Retreat </h4>
    <p>During this retreat we offer a hospitable space for men of all ages to show up authentically and live wholeheartedly. We co-create a trustworthy circle in which we can listen to each other with courage and compassion as we find our way together in community. In group and solitary settings we will invite you to rest, hike, connect with nature and contemplate the poetry, art and stories of wisdom traditions. We welcome anyone identifying as male, regardless of birth assignment. </p>
</div>
<div className="col-6">
    <br></br>
    <br></br>
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
</div>

<div>
    <center>
        <p><h3>Answers to some common questions</h3></p> 
    </center>     
</div>
</Layout>

)

