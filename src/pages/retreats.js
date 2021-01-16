import React from "react";
import Layout from '../components/layout-pages';
import pic06 from '../assets/images/support.png' 

export default () => (
<Layout>
<section id="one" className="main style1">
<div className="grid-wrapper">
    <div className="col-6">
        <header className="major">
            <h2>Retreat Offerings</h2>
        </header>
        <h3>Male Journeys: Supporting our Sprits in these Challenging Times</h3>
Since the beginning of the pandemic we have been hosting <a href="../online">regular zoom calls</a> with men who have attended our previous retreats. We found that we were able to share a deep sense of connection despite our physical separation.

Building on these experiences, we will be offering a series of four virtual retreats during early 2021, open to anyone.
    </div>
    <div className="col-6">
        <br></br>
        <br></br>        
        <br></br>       
        <br></br>
        Our two hour retreats will occur on Saturdays, 10:00 AM to 12:00 PM Pacific Time, on the following dates: January 30, February 27, March 27, April 17.
        <br></br>
        <br></br>
        <span className="image fit"><img src={pic06} alt="" /></span>
        <p><h6>(<a href="https://www.flickr.com/photos/bananer/">Images</a> licensed under a <a href="https://creativecommons.org/licenses/by/2.0/legalcode">Creative Commons Attribution-2.0 Generic licence.</a>)</h6></p>
        <br></br>
    </div>
</div>
<center>
    <ul className="actions uniform">
        <li><a href="https://www.eventbrite.com/e/male-journeys-supporting-our-spirits-in-these-challenging-times-tickets-134914614243" className="button special">Register</a></li>
    </ul>
</center>
</section>

<section id="two" className="main style2">
<div>
    <center><h2>What can I expect at these retreats?</h2>

    <p> During this retreat we offer a hospitable space for men of all ages to show up authentically and live wholeheartedly. We co-create a trustworthy circle in which we can listen to each other with courage and compassion as we find our way together in community. In virtual large group, small group and solitary settings we will invite you to rest, connect with your surroundings and contemplate the poetry, art and stories of wisdom traditions. We welcome anyone identifying as male, regardless of birth assignment. </p>


    <p>Jeff has written this <a href={'/Mens-Retreat-Chapter.pdf'} target="_blank">reflection on one of our early in person retreats</a>, describing in detail some of our practices and shared experiences.</p>

        
    </center>
    <center>
        <p><h2>Other Considerations and Information</h2></p> 
        <p>We welcome anyone identifying as male, regardless of birth assignment.</p>
        <p>Our retreats are framed within the <a href="http://www.couragerenewal.org/approach/#practices">Circle of Trust Approach</a> where people can find hospitable spaces to nuture personal growth.</p>
        <p>The Circle of Trust is bounded by a series of <a href="http://www.couragerenewal.org/touchstones/">Touchstones</a>.</p>
        <p>We commit to co-creating an inclusive environment that honors the diversity and uniqueness of every participant.</p>
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
