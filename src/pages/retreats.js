import React from "react";
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
        <h3> Male Journeys: Supporting our Sprits in these Challenging Times
            </h3>
        We will be offering a series of four online retreats.
    </div>
    <div className="col-6">
        <br></br>
        <br></br>
        <span className="image fit"><img src={pic01} alt="" /></span>
    </div>
</div>
<center>
<h3> To Register:</h3>
</center>
</section>

<section id="two" className="main style2">
<div>
    <center><h2>What can I expect at these retreats?</h2>
    <p>Jeff has written this <a href={'/Mens-Retreat-Chapter.pdf'} target="_blank">reflection on one of our early offerings</a>, describing in detail some of our practices and shared experiences.</p>

        
    </center>
    <center>
        <p><h2>Other Considerations and Information</h2></p> 
        <p>We welcome anyone identifying as male, regardless of birth assignment.</p>
        <p>Our retreats are framed within the <a href="http://www.couragerenewal.org/approach/#practices">Circle of Trust Approach</a> where people can find hospitable spaces to nuture personal growth.</p>
        <p>The Circle of Trust is bounded by a series of <a href="http://www.couragerenewal.org/touchstones/">Touchstones</a>.</p>
        <p>The hallmark practice of every retreat is a <a href="http://www.couragerenewal.org/clearnesscommittee/">Clearness Committee</a>.</p>
        <p>We commit to co-creating an inclusive environment that honors the diversity and uniqueness of every participant.</p>
        <p>During our time outdoors, we provide multiple options so that everyone to be included in our activities.</p>
        <p>All of our activities are invitational.</p>
        <p><h3>Questions? Contact us: <a href="mailto:malejourneys@gmail.com">malejourneys@gmail.com</a></h3></p>
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
