import React,{useEffect} from 'react';
import './main.css';
//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi';
import {HiOutlineClipboardCheck} from 'react-icons/hi';
//

//importing images
import img1 from '../../Assets/img(1).jpg';
import img2 from '../../Assets/img(2).jpg';
import img3 from '../../Assets/img(3).jpg';
import img4 from '../../Assets/img(4).jpg';
import img5 from '../../Assets/img(5).jpg';
import img6 from '../../Assets/img(6).jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Data=[
  {
  id:1,
  imgSrc:img1,
  destTitle:'Changed',
  location:'NEW Zeland',
  grad:'CULTURAL RELAX',
  fees:'$700',
  discription:'The epitome of romance,Bora Bora is one of the best travel destination in the world.this place is known for its luxurious stays and adventurous activities.'
},
{
  id:2,
  imgSrc:img2,
  destTitle:'Bora Bora',
  location:'NEW Zeland',
  grad:'CULTURAL RELAX',
  fees:'$700',
  discription:'The epitome of romance,Bora Bora is one of the best travel destination in the world.this place is known for its luxurious stays and adventurous activities.'
},
{
  id:3,
  imgSrc:img3,
  destTitle:'Bora Bora',
  location:'NEW Zeland',
  grad:'CULTURAL RELAX',
  fees:'$700',
  discription:'The epitome of romance,Bora Bora is one of the best travel destination in the world.this place is known for its luxurious stays and adventurous activities.'
},
{
  id:4,
  imgSrc:img4,
  destTitle:'Bora Bora',
  location:'NEW Zeland',
  grad:'CULTURAL RELAX',
  fees:'$700',
  discription:'The epitome of romance,Bora Bora is one of the best travel destination in the world.this place is known for its luxurious stays and adventurous activities.'
},
{
  id:5,
  imgSrc:img5,
  destTitle:'Bora Bora',
  location:'NEW Zeland',
  grad:'CULTURAL RELAX',
  fees:'$700',
  discription:'The epitome of romance,Bora Bora is one of the best travel destination in the world.this place is known for its luxurious stays and adventurous activities.'
},
{
  id:6,
  imgSrc:img6,
  destTitle:'Changed',
  location:'NEW Zeland',
  grad:'CULTURAL RELAX',
  fees:'$700',
  discription:'The epitome of romance,Bora Bora is one of the best travel destination in the world.this place is known for its luxurious stays and adventurous activities.'
},

]
const Main = () => {
  //lets create a react hook to add a scroll animation...
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="main container section">
<div className="secTitle">
  <h3 data-aos="fade-right" 
  className="title">
    Most Visited Destinations
  </h3>
</div>

<div className="secContent grid">
  {/* here we are using high order method (map)
  to do that we shall use a list of object in one array.i'm going to create an array named data and from that we shall .map() array to fetch each each destinations at once . i hope this will make sense to you!*/}
{
  Data.map(({
id,imgSrc,destTitle,location,grade,fees,discription

  })=>{
return (
  <div key={id}
   className="SingleDestination">
    {/*here it will return single array id from the map array*/}
    <div className="imageDiv">
      <img src={imgSrc} alt={destTitle} />
    </div>
     <div className="cardInfo">
      <h4 className="destTitle">
        {destTitle}
      </h4>
      <span className="content flex">
      <HiOutlineLocationMarker className='icon'/>
      <span className="name">{location}</span>
      </span>
      <div className="fees flex">
        <div className="grade">
          <span>{grade}<small>+1</small></span>
        </div>
        <div className="price">
          <h5>{fees}</h5>
        </div>
      </div>
      <div className="desc">
        <p>{discription}</p>
      </div>
      
      <button className='btn flex'>
        DETAILS <HiOutlineClipboardCheck className="icon"/>
      </button>
     </div>
   </div>
)

  })
}

</div>


    </section>

  )
}

export default Main