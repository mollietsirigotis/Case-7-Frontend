import image from '../assets/star-icon.png';

function Main() {
  return (
    <main className="flex-1 p-4 pt-10 text-white flex flex-row items-center justify-center">
      {/* <h1>WELCOME TO ASTERI CINEMA</h1> */}
      <div className="bg-transparent p-8 max-w-3xl text-center">
        <h1 className="text-3xl font-bold mb-4">WELCOME TO ASTERI CINEMA</h1>
        <p className="text-lg">
          Experience the magic of the movies under the stars at Asteri Cinema. 
          We offer a unique outdoor cinema experience with a stunning view of the night sky. 
          Enjoy the latest blockbusters, timeless classics, and indie gems in a cozy and inviting atmosphere.
        </p>
        <button className="mt-6 mb-6 bg-white text-black font-bold py-2 px-4 rounded">
          OUR MOVIES
        </button>
      </div>
      <img src={image} alt="Asteri Cinema Logo" className="w-16"/>
      <div className="bg-transparent p-8 max-w-3xl text-center mt-10">
        <h2 className="text-2xl font-bold mb-4">NOW SHOWING</h2>
        <ul className="list-disc list-inside">
          <li>Movie 1</li>
          <li>Movie 2</li>
          <li>Movie 3</li>
        </ul>
        <button className="mt-4 bg-white text-black font-bold py-2 px-4 rounded">
          GET TICKETS
        </button>
      </div>
    </main>
  );
}

export default Main;
