import "./featured.css";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.thegolfhousebd.com/wp-content/uploads/2022/02/Visit-Bangladesh-07.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cox's Bazar</h1>
          <h2>123 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://res.cloudinary.com/dnvftrlhk/image/upload/f_webp/c_fill,h_360,w_573/v1694241741/tour_image/dhaka-bandarban-dhaka-non-ac/dhaka-bandarban-dhaka-non-ac.3.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bandarban</h1>
          <h2>532 properties</h2>
        </div>
      </div>

            
      <div className="featuredItem">
        <img
          src="https://www.shutterstock.com/image-photo/tea-gardens-bangladesh-beautiful-sylhet-260nw-2176391687.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Sylhet</h1>
          <h2>533 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;