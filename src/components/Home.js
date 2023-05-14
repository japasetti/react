import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const Description = () => {
    return (
      <div className="container">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro aliquam cupiditate voluptatibus consequatur veniam sapiente doloremque rem,
          necessitatibus dolores. Et quis veniam quasi accusantium, quia deleniti dolore saepe autem iste?</p>
      </div>
    );
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="main-heading">
          <div className="image">
            <img src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <div className="description">
            <h2>We Provide Best Quality Services Ever</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga tempore asperiores recusandae rerum harum, doloribus unde consequuntur vitae, sequi vel temporibus suscipit commodi totam cumque quis repellendus! Alias voluptatem illo vitae repellendus corporis, illum perspiciatis eos voluptatum nulla quaerat fugit culpa est facere quasi mollitia sint velit at officiis. Facilis molestiae qui unde quod quae odit, quia excepturi nulla facere magni accusantium eveniet, fuga perspiciatis?</p>
            <button onClick={toggleDescription} className="btn btn-primary btn-lg">Learn More</button>
            {showDescription && <Description />}
          </div>
        </div>
      </div>
      <div className="main-contents mt-4">
        <div className="content">
          <div className="image">
            <img src="https://th.bing.com/th/id/OIP.yp2tUbhcxuR9It7d-XxfbQHaE7?pid=ImgDet&rs=1" alt="" width="450px" height="400px" />
          </div>
          <div className="heading-one">
            <h4>Employee's</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit...!</p>
            <button className='btn btn-success btn-lg'><Link className='text-decoration-none text-white' to="http://localhost:3000/emp">Employee's</Link></button>
          </div>
        </div>
      </div>



      <div className="main-contents mt-4">
        <div className="content">
          <div className="image">
            <img src="https://healingspringswellness.com/wp-content/uploads/2020/12/AdobeStock_354245058.jpeg" alt="" width="450px" height="400px" />
          </div>
          <div className="heading-two">
            <h4>Service's</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit...!</p>
            <button className='btn btn-success btn-lg'><Link className='text-decoration-none text-white' to="http://localhost:3000/emp">Service's</Link></button>
          </div>
        </div>

        <div className="main-contents mt-4">
          <div className="content">
            <div className="image">
              <img src="https://media.istockphoto.com/photos/rendering-of-v8-engine-with-explosions-picture-id961804664?k=6&m=961804664&s=170667a&w=0&h=1JzAmypAHv_DgC9LTJOvd6Nm_D0Ep5whQjPRyWUXDgM=" alt="" width="450px" height="400px" />
            </div>
            <div className="heading-three">
              <h4>Engine's</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit  sit amet, consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit...!</p>
              <button className='btn btn-success btn-lg'><Link className='text-decoration-none text-white' to="http://localhost:3000/engines">Engine's</Link></button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Home;
