import "./Testimonials.css";

function Testimonials() {

const testimonials = [

{
name:"Ramesh Kumar",
text:"AgriSmart AI helped me increase my crop yield by 30%.",
},

{
name:"Sita Devi",
text:"Disease detection feature saved my crops from major damage.",
},

{
name:"Rahul Singh",
text:"Weather prediction is very accurate and easy to use.",
}

];

return (

<section className="testimonials">

<h2>Farmer Testimonials</h2>

<p>See what our users say about AgriSmart AI.</p>

<div className="testimonial-grid">

{testimonials.map((item,index)=>(

<div className="testimonial-card" key={index}>

<p>"{item.text}"</p>

<h3>{item.name}</h3>

</div>

))}

</div>

</section>

);

}

export default Testimonials;