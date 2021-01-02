import React from "react";
import Layout from '../components/layout-pages';
import pic01 from '../assets/images/sawtooths1.jpg'

export default () => (
    <Layout>
<section id="one" className="main style1">
<div className="grid-wrapper">
    <div className="col-6">
        <header className="major">
            <h2>Wilderness Hike</h2>
        </header>
        <p>We are waiting until it is safe to return to group activites before scheduling additional wilderness trips.</p>
    </div>
    <div className="col-6">
        <br></br>
        <br></br>
        <span className="image fit"><img src={pic01} alt="" /></span>
    </div>
</div>

<center>
    <ul className="actions uniform">
        <li><a href="../" className="button special">Back</a></li>
    </ul>
</center>

</section>

<section id="two" className="main style2">
<div>
    <center>
        <p><h3>Information</h3></p> 
    </center>     

</div>
</section>

</Layout>

)

