import React from "react";
import Layout from '../components/layout-pages';
import pic01 from '../assets/images/pic04.jpg'

export default () => (
    <Layout>
<section id="one" className="main style1">

    <div>
        <center>
            <header className="major">
            <h2>Online Communities</h2>
            </header>
            <p>We are hosting a series of one hour, bi-weekly virtual gatherings with men who have joined any of our previous in-person retreats.</p>
            <p><strong>Our next Zoom call:</strong>
                <ul> 
                    <li>Tuesday June 16, 2020 from 7:00 - 8:00 PM Pacific.</li>
                    <li>Facilitated by Jeff Creswell and Aaron Bishop</li>
                </ul>
            </p>   
          {/* 
          <p>Here are the <a href={'/mens-zoom-call-poems-19May2020.pdf'} target="_blank">poems for this week</a>.</p>
          */}
        </center>
</div>


</section>

<section id="two" className="main style2">
<div>
    <center><h2>What can I expect on these calls?</h2>
    <p>We will begin each call with a reflection on the <a href={'/touchstones.pdf'} target="_blank">touchstones</a>.</p> 
    <p>We will invite everyone to introduce themselves, share a poem, and converse in small groups using Zoom breakout rooms.</p>

        
    </center>

    <center>
        <p><h2>Collection of Poems from our Previous Calls</h2></p> 
        <p>Tuesday 19 May 2020: "Mercy" (<a href={'/mens-zoom-call-poems-02Jun2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 19 May 2020: "Security" (<a href={'/mens-zoom-call-poems-19May2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 5 May 2020: "Shoulders" (<a href={'/mens-zoom-call-poems-05May2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 21 April 2020: "Shedding Skin" (<a href={'/mens-zoom-call-poems-21Apr2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 23 March 2020: "Old Maps no Longer Work" (<a href={'/mens-zoom-call-poems-23Mar2020.pdf'} target="_blank">poems)</a>.</p> 
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

