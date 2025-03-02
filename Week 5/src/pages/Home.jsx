import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Notification from "../components/Notification";

// Import local images
import laptopImg from "../assets/images/laptop.jpeg";
import phoneImg from "../assets/images/phone.jpeg";
import headphonesImg from "../assets/images/headphones.jpeg";
import smartwatchImg from "../assets/images/smartwatch.jpeg";
import tabletImg from "../assets/images/tablet.jpeg";
import cameraImg from "../assets/images/cameraImg.jpeg";
import consoleImg from "../assets/images/consoleImg.jpeg";
import speakerImg from "../assets/images/speakerImg.jpeg";
import monitorImg from "../assets/images/monitorImg.jpeg";
import keyboardImg from "../assets/images/keyboardImg.jpeg";
import mouseImg from "../assets/images/mouseImg.jpeg";
import printerImg from "../assets/images/printerImg.jpeg";
import hardDriveImg from "../assets/images/harddriveImg.jpeg";
import usbImg from "../assets/images/usbImg.jpeg";
import routerImg from "../assets/images/routerImg.jpeg";
import earbudsImg from "../assets/images/earbudsImg.jpeg";
import powerBankImg from "../assets/images/powerbankImg.jpeg";
import trackerImg from "../assets/images/trackerImg.jpeg";
import vrImg from "../assets/images/vrImg.jpeg";
import droneImg from "../assets/images/droneImg.jpeg";


const products = [
  { id: 1, name: "Laptop", price: 60000, image: laptopImg }, // Mid-range laptop
  { id: 2, name: "Phone", price: 25000, image: phoneImg }, // Mid-range smartphone
  { id: 3, name: "Headphones", price: 3000, image: headphonesImg }, // Good quality headphones
  { id: 4, name: "Smartwatch", price: 8000, image: smartwatchImg }, // Mid-range smartwatch
  { id: 5, name: "Tablet", price: 20000, image: tabletImg }, // Mid-range tablet
  { id: 6, name: "Camera", price: 45000, image: cameraImg }, // DSLR or mirrorless camera
  { id: 7, name: "Gaming Console", price: 50000, image: consoleImg }, // Modern gaming console
  { id: 8, name: "Bluetooth Speaker", price: 5000, image: speakerImg }, // Branded Bluetooth speaker
  { id: 9, name: "Monitor", price: 15000, image: monitorImg }, // Decent 24-inch monitor
  { id: 10, name: "Keyboard", price: 2500, image: keyboardImg }, // Mechanical keyboard
  { id: 11, name: "Mouse", price: 1200, image: mouseImg }, // Good wireless mouse
  { id: 12, name: "Printer", price: 12000, image: printerImg }, // Laser printer
  { id: 13, name: "External Hard Drive", price: 6000, image: hardDriveImg }, // 1TB external HDD
  { id: 14, name: "USB Flash Drive", price: 800, image: usbImg }, // 32GB USB flash drive
  { id: 15, name: "Router", price: 4000, image: routerImg }, // High-speed WiFi router
  { id: 16, name: "Earbuds", price: 3500, image: earbudsImg }, // True wireless earbuds
  { id: 17, name: "Power Bank", price: 2500, image: powerBankImg }, // 20,000mAh power bank
  { id: 18, name: "Fitness Tracker", price: 4500, image: trackerImg }, // Basic fitness tracker
  { id: 19, name: "VR Headset", price: 35000, image: vrImg }, // Mid-range VR headset
  { id: 20, name: "Drone", price: 75000, image: droneImg }, // Camera-equipped drone
];


const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification(`${product.name} added to cart!`);
  
    // Auto-hide notification after 2 seconds
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };
  

  return (
    <div className="home-container">
      {notification && (
        <Notification message={notification} onClose={() => setNotification(null)} />
      )}

      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <h3>{product.name}</h3>
            <p>₹{product.price.toLocaleString("en-IN")}</p> {/* Convert to INR format */}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;