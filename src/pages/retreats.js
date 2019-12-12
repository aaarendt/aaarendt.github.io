import React from "react";
import Footer from '../components/Footer';
import Layout from '../components/layout-pages';
import pic01 from '../assets/images/Breitenbush-tub.jpg'

export default () => (
    <Layout>
<section id="one" className="main style1">
<div className="grid-wrapper">
    <div className="col-6">
        <header className="major">
            <h2>Retreat Offerings</h2>
        </header>
        <h3> <a href="https://breitenbush.com">Breitenbush Hot Springs</a>, Sept. 4-7, 2020 </h3>
        <h4> A Courage and Renewal<sup>&copy;</sup> Retreat </h4>
        <p>During this retreat we offer a hospitable space for men of all ages to show up authentically and live wholeheartedly. We co-create a trustworthy circle in which we can listen to each other with courage and compassion as we find our way together in community. In group and solitary settings we will invite you to rest, hike, connect with nature and contemplate the poetry, art and stories of wisdom traditions.  </p>
    </div>
    <div className="col-6">
        <br></br>
        <br></br>
        <span className="image fit"><img src={pic01} alt="" /></span>
    </div>
</div>
<center>
<h3> To Register, contact Breitenbush Hot Springs: 503-854-3320. Cost: $325 ($275 if registered by 8/10).</h3>
</center>
</section>

<section id="two" className="main style2">
<div>
    <center>
        <p><h3>Considerations and Information</h3></p> 
        <p>We welcome anyone identifying as male, regardless of birth assignment.</p>
        <p>Our retreats are framed within the <a href="http://www.couragerenewal.org/approach/#practices">Circle of Trust Approach</a> where people can find hospitable spaces to nuture personal growth.</p>
        <p>The Circle of Trust is bounded by a series of <a href="http://www.couragerenewal.org/PDFs/Touchstones-Updated2019.pdf">Touchstones</a>.</p>
        <p>The hallmark practice of every retreat is a <a href="http://www.couragerenewal.org/clearnesscommittee/">Clearness Committee</a>.</p>
        <p>We commit to co-creating an inclusive environment that honors the diversity and uniqueness of every participant.</p>
        <p>During our time outdoors, we provide multiple options so that everyone to be included in our activities.</p>
        <p>All of our activities are invitational.</p>

    </center>     

    <center>
    <ul className="actions uniform">
        <li><a href="../" className="button special">Back</a></li>
    </ul>
</center>

</div>
</section>

</Layout>

)

