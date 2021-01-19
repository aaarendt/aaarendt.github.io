import React from "react";
import Layout from '../components/layout-pages';
import pic01 from '../assets/images/sawtooths2.jpg'
import pic02 from '../assets/images/Sawtooths-map.png'
import pic03 from '../assets/images/sawtooths1.jpg'
import Footer from "../components/Footer";

export default () => (
    <Layout>
<section id="one" className="main style1">
<div className="grid-wrapper">
    <div className="col-6">
        <header className="major">
            <h2>Wilderness Hikes</h2>
        </header>
        <p><center>As brothers we roam <br></br>
With the triumph of each step <br></br>
Heavy loads lighten<br></br><br></br>
- Ryan <br></br>
(in honor of the Men’s Sawtooth Mountains <br></br>
Backpacking adventure, 26-29 July, 2019) </center>
<br></br>
<span className="image fit"><img src={pic02} alt="" /></span>
</p>
    </div>
    <div className="col-6">
        <br></br>
        <br></br>
        <span className="image fit"><img src={pic01} alt="" /></span>
        <center>Aaron, Ned, Anthony, Ryan and Jeff, July 2019</center>
    </div>
</div>

</section>

<section id="two" className="main style2">
<div className="grid-wrapper">
    <div className="col-6">
        <header className="major">
            <h2>Come as you are; the mountains welcome us equally</h2>
        </header>
        <span className="image fit"><img src={pic03} alt="" /></span>
</div>
<div className="col-6">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    
    <p>In 2018 and 2019 we guided small groups of men on 3 day backpacking trips in the Sawtooth Range of Idaho. In our experinece, wildernss is a uniquely connecting space for men. We also know that the outdoors can be a forum for proving ourselves and pushing our limits in unhealthy ways. When it is again safe to gather together, we look forward to exploring new ways to be together as men in nature free from expecations around fitness, endurance or any other ways that our culture expects men to act in the outdoors.</p>
</div>
</div>
<center>
    <ul className="actions uniform">
        <li><a href="../" className="button special">Back</a></li>
    </ul>
</center>
</section>

</Layout>

)

