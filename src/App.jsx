import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import './App.css';
import * as THREE from 'three';


function BirthdayCake() {
  return (
    <mesh position={[0, -1, 0]}>
      {/* <planeGeometry args={[2, 1]} /> */}
      im
      <meshStandardMaterial>
        {/* Adding the cake GIF as a texture */}
        {/* <meshBasicMaterial map={new THREE.TextureLoader().load('/images/cake.gif')} /> */}
      </meshStandardMaterial>
    </mesh>
  );
}

function FlowerAnimation() {
  return (
    <motion.div
      className="flower-animation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <img src="images/flower.gif" alt="Flowers" className="flower-gif" />
    </motion.div>
  );
}

function Banner() {
  return (
    <motion.div
      className="banner"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1>Happy Birthday, My Love!</h1>

    </motion.div>
  );
}

function ImageGallery() {
  const images = [
    { src: 'images/memory1.jpg', text: 'Moon is just a white ball in front of your cuteness' },
    { src: 'images/memory2.jpg', text: 'Laughs that never end. November 16 2006' },
    { src: 'images/memory3.jpg', text: 'Forever in my heart.' },
  ];

  return (
    <div className="scroll-container">
      {images.map((item, index) => (
        <motion.div
          key={index}
          className="image-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          <img src={item.src} alt={`Memory ${index + 1}`} />
          <p>{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <BirthdayCake />
          <OrbitControls />
        </Canvas>
        <Banner />
        <FlowerAnimation />
      </header>
      <main>
        <ImageGallery />
        
      </main>
      <footer>
      <div className="my-feel">
        <p className='feel'>My Dear Wife I Love you so much this is 3rd year which we celebrating togather your place in my heart never changed you are the girl who i mention in my prayers. Now i Really understand one thing that is you are something more than my life. You are my 1st priority and your my 1st thought in morning and last dream at night. Your presence makes me happy, Your sadness makes me cry, Your mood handles me. This Life is Yours This body is yours This soul is yours. ..... When it comes to your cuteness Can i say it in telugu..? why becouse i am not fluent in english... Nee navvu oka varam... Nee chupulu commandos.. Nee nadumu parupu... Nee kurulu samudram lo alalu... Nee buggalu boorelu... Your smell is like a perfume which is more costly in the world.... Neetho polisthe Moon is nothing... Inthakana ikkada pogidithe bagodhu Last ga oka mata cheppali... I LOVE YOU More Than Anything... Lets make more memories together.... Happy Birthday Once Again Bangaram...!!</p>
        <div className="by">
          <p className="yl">Yours Lovingly-</p>
          <p className="name">Your Husband,</p>
          <p className="name">Riya</p>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
