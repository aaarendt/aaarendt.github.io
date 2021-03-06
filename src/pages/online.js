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
            <p>From March to December 2020 we hosted a series of virtual calls with men who had attended our previous retreats. We invite you to view the poems from these sessions below.</p>
                
            <h3> Please visit our <a href="../retreats">virtual retreats page</a> to register for our longer format retreats during January to April, 2021.</h3>
        </center>
</div>


</section>

<section id="two" className="main style2">
<div>
   {/* <center><h2>What can I expect on these calls?</h2>
    <p>We will begin each call with a reflection on the <a href={'/touchstones.pdf'} target="_blank">touchstones</a>.</p> 
    <p>We will invite everyone to introduce themselves, share a poem, and converse in small groups using Zoom breakout rooms.</p>
    </center>
   */}
    <center>
        <p><h2>Collection of Poems from our Previous Calls</h2></p> 
        <p>Thursday 10 December 2020: "Man" (<a href={'/mens-zoom-call-poems-10Dec2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Thursday 5 November 2020: "The Flavor of Unity" (<a href={'/mens-zoom-call-poems-05Nov2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 18 August 2020: "Waking" (<a href={'/mens-zoom-call-poems-18Aug2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 4 August 2020: "The Rabbit Hole" (<a href={'/mens-zoom-call-poems-04Aug2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 14 July 2020: "The Leap" (<a href={'/mens-zoom-call-poems-14Jul2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 30 June 2020: "Thresholds" (<a href={'/mens-zoom-call-poems-30Jun2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 16 June 2020: "Hurricane" (<a href={'/mens-zoom-call-poems-16Jun2020.pdf'} target="_blank">poems)</a>.</p>
        <p>Tuesday 2 June 2020: "Mercy" (<a href={'/mens-zoom-call-poems-02Jun2020.pdf'} target="_blank">poems)</a>.</p>
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

