import { motion } from "framer-motion";
import React from "react";

const About = () => {
  const [rotate, setRotate] = React.useState(false);
  const [move, setMove] = React.useState(false);
  return (
    <div className="about">
      <motion.div
        whileHover={{ scale: 1.1 }} // Scale up the card on hover
        whileTap={{ scale: 0.9 }} // Scale down the card on tap
        transition={{ duration: 0.2 }} // Transition duration for the animation
        initial={{ y: 100 }}
        className="card bg-gray-800 rounded-lg p-2 text-white w-32 my-2"
      >
        <div className="card-content">
          <h3 className="text-xl font-semibold">Boby</h3>
          <p className="text-gray-300">Description: Kalo</p>
        </div>
      </motion.div>
      <motion.div
        animate={{ x: move ? 200 : 0}}
        // transition={{ type: "twin", duration: 0.1}}
        // transition={{ type: "spring", bounce: 5}} 
        onClick={() => {
          setMove(!move);
        }}
        className="card bg-gray-800 rounded-lg p-2 text-white w-32 my-2"
      >
        <div className="card-content">
          <h3 className="text-xl font-semibold">Boby</h3>
          <p className="text-gray-300">Description: Kalo</p>
        </div>
      </motion.div>
      <motion.div
        animate={{ rotate: rotate ? 360 : 0 }}
        onClick={() => {
          setRotate(!rotate);
        }}
        initial={{ y: 100 }}
        className="card bg-gray-800 rounded-lg p-2 text-white w-32 my-2"
      >
        <div className="card-content">
          <h3 className="text-xl font-semibold">Boby</h3>
          <p className="text-gray-300">Description: Kalo</p>
        </div>
      </motion.div>
      <motion.div drag="x"
        dragConstraints ={{ left: 30}}
        initial={{ y: 100 }}
        className="card bg-gray-800 rounded-lg p-2 text-white w-32"
      >
        <div className="card-content">
          <h3 className="text-xl font-semibold">Boby</h3>
          <p className="text-gray-300">Description: Kalo</p>
        </div>
      </motion.div>
      {/* <motion.div
        animate={{ rotate: [0, 300, 200, 0],  x: [0, 400, 400, 0, -100, -200, 0]}}
        transition={{ repeat: Infinity, duration: 1}}
        className="card bg-gray-800 rounded-lg p-2 text-white w-32 my-2"
      >
        <div className="card-content">
          <h3 className="text-xl font-semibold">Boby</h3>
          <p className="text-gray-300">Description: Kalo</p>
        </div>
      </motion.div> */}
    </div>
  );
};

export default About;
