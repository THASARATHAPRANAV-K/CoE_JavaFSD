import laptopImg from "./assets/laptop.jpg";
import phoneImg from "./assets/phone.jpg";
import headphonesImg from "./assets/headphones.jpg";
import smartwatchImg from "./assets/smartwatch.jpg";
import tabletImg from "./assets/tablet.jpg";
import cameraImg from "./assets/camera.jpg";
import consoleImg from "./assets/console.jpg";
import speakerImg from "./assets/speaker.jpg";
import monitorImg from "./assets/monitor.jpg";
import keyboardImg from "./assets/keyboard.jpg";

const products = [
  { id: 1, category: "Laptop", brands: [
      { name: "Dell Inspiron 15", price: 60000, image: laptopImg, rating: 4.5, offer: "10% off", availability: "In Stock" },
      { name: "HP Pavilion x360", price: 65000, image: laptopImg, rating: 4.3, offer: "12% off", availability: "In Stock" },
      { name: "Lenovo IdeaPad 3", price: 58000, image: laptopImg, rating: 4.2, offer: "8% off", availability: "Limited Stock" },
      { name: "Asus VivoBook 14", price: 62000, image: laptopImg, rating: 4.6, offer: "15% off", availability: "In Stock" },
      { name: "Acer Aspire 7", price: 59000, image: laptopImg, rating: 4.4, offer: "10% off", availability: "In Stock" }
    ]
  },
  { id: 2, category: "Phone", brands: [
      { name: "iPhone 14", price: 75000, image: phoneImg, rating: 4.8, offer: "5% off", availability: "In Stock" },
      { name: "Samsung Galaxy S23", price: 72000, image: phoneImg, rating: 4.7, offer: "8% off", availability: "Limited Stock" },
      { name: "OnePlus 11", price: 57000, image: phoneImg, rating: 4.6, offer: "10% off", availability: "In Stock" },
      { name: "Google Pixel 7", price: 68000, image: phoneImg, rating: 4.5, offer: "12% off", availability: "In Stock" },
      { name: "Xiaomi 13 Pro", price: 60000, image: phoneImg, rating: 4.3, offer: "10% off", availability: "Limited Stock" }
    ]
  },
  { id: 3, category: "Headphones", brands: [
      { name: "Sony WH-1000XM5", price: 29000, image: headphonesImg, rating: 4.8, offer: "10% off", availability: "In Stock" },
      { name: "Bose QC 45", price: 32000, image: headphonesImg, rating: 4.7, offer: "12% off", availability: "In Stock" },
      { name: "JBL Live 650", price: 11000, image: headphonesImg, rating: 4.5, offer: "15% off", availability: "In Stock" },
      { name: "Sennheiser HD 450BT", price: 13000, image: headphonesImg, rating: 4.4, offer: "10% off", availability: "Limited Stock" },
      { name: "Boat Rockerz 550", price: 3500, image: headphonesImg, rating: 4.3, offer: "20% off", availability: "In Stock" }
    ]
  },
  { id: 4, category: "Smartwatch", brands: [
      { name: "Apple Watch Series 8", price: 42000, image: smartwatchImg, rating: 4.9, offer: "5% off", availability: "In Stock" },
      { name: "Samsung Galaxy Watch 5", price: 32000, image: smartwatchImg, rating: 4.7, offer: "10% off", availability: "In Stock" },
      { name: "Fitbit Sense 2", price: 25000, image: smartwatchImg, rating: 4.5, offer: "12% off", availability: "Limited Stock" },
      { name: "Garmin Venu 2", price: 28000, image: smartwatchImg, rating: 4.6, offer: "15% off", availability: "In Stock" },
      { name: "Amazfit GTS 4", price: 18000, image: smartwatchImg, rating: 4.3, offer: "10% off", availability: "In Stock" }
    ]
  },
  { id: 5, category: "Tablet", brands: [
      { name: "Apple iPad Air", price: 60000, image: tabletImg, rating: 4.8, offer: "10% off", availability: "In Stock" },
      { name: "Samsung Galaxy Tab S8", price: 55000, image: tabletImg, rating: 4.7, offer: "8% off", availability: "Limited Stock" },
      { name: "Lenovo Tab P11", price: 35000, image: tabletImg, rating: 4.5, offer: "12% off", availability: "In Stock" },
      { name: "Microsoft Surface Go 3", price: 52000, image: tabletImg, rating: 4.6, offer: "15% off", availability: "In Stock" },
      { name: "Realme Pad X", price: 25000, image: tabletImg, rating: 4.4, offer: "10% off", availability: "In Stock" }
    ]
  },
  { id: 6, category: "Camera", brands: [
      { name: "Canon EOS R6", price: 190000, image: cameraImg, rating: 4.9, offer: "10% off", availability: "In Stock" },
      { name: "Nikon Z6 II", price: 175000, image: cameraImg, rating: 4.8, offer: "8% off", availability: "Limited Stock" },
      { name: "Sony Alpha 7 IV", price: 220000, image: cameraImg, rating: 4.7, offer: "12% off", availability: "In Stock" },
      { name: "Fujifilm X-T4", price: 140000, image: cameraImg, rating: 4.6, offer: "15% off", availability: "In Stock" },
      { name: "Panasonic Lumix GH6", price: 155000, image: cameraImg, rating: 4.4, offer: "10% off", availability: "In Stock" }
    ]
  },
  { id: 7, category: "Gaming Console", brands: [
      { name: "PlayStation 5", price: 50000, image: consoleImg, rating: 4.9, offer: "5% off", availability: "In Stock" },
      { name: "Xbox Series X", price: 49000, image: consoleImg, rating: 4.8, offer: "8% off", availability: "Limited Stock" },
      { name: "Nintendo Switch", price: 27000, image: consoleImg, rating: 4.7, offer: "12% off", availability: "In Stock" },
      { name: "Steam Deck", price: 45000, image: consoleImg, rating: 4.6, offer: "10% off", availability: "In Stock" },
      { name: "PlayStation 4 Pro", price: 36000, image: consoleImg, rating: 4.3, offer: "15% off", availability: "Limited Stock" }
    ]
  },
  { 
    id: 8, 
    category: "Speakers", 
    brands: [
      { name: "JBL Flip 6", price: 11000, image: speakerImg, rating: 4.7, offer: "10% off", availability: "In Stock" },
      { name: "Bose SoundLink Revolve", price: 19000, image: speakerImg, rating: 4.8, offer: "12% off", availability: "Limited Stock" },
      { name: "Sony SRS-XB43", price: 15000, image: speakerImg, rating: 4.6, offer: "15% off", availability: "In Stock" },
      { name: "Marshall Emberton", price: 17000, image: speakerImg, rating: 4.5, offer: "10% off", availability: "In Stock" },
      { name: "Ultimate Ears Boom 3", price: 13000, image: speakerImg, rating: 4.4, offer: "8% off", availability: "Limited Stock" }
    ]
  },
  { 
    id: 9, 
    category: "Monitors", 
    brands: [
      { name: "Dell UltraSharp U2723QE", price: 45000, image: monitorImg, rating: 4.8, offer: "10% off", availability: "In Stock" },
      { name: "LG 27GL850", price: 32000, image: monitorImg, rating: 4.7, offer: "12% off", availability: "Limited Stock" },
      { name: "ASUS ROG Swift PG259QN", price: 50000, image: monitorImg, rating: 4.6, offer: "15% off", availability: "In Stock" },
      { name: "Samsung Odyssey G7", price: 55000, image: monitorImg, rating: 4.5, offer: "10% off", availability: "In Stock" },
      { name: "BenQ EX3501R", price: 38000, image: monitorImg, rating: 4.4, offer: "8% off", availability: "Limited Stock" }
    ]
  },
  { 
    id: 10, 
    category: "Keyboards", 
    brands: [
      { name: "Razer Huntsman Elite", price: 15000, image: keyboardImg, rating: 4.8, offer: "10% off", availability: "In Stock" },
      { name: "Logitech MX Keys", price: 13000, image: keyboardImg, rating: 4.7, offer: "12% off", availability: "Limited Stock" },
      { name: "Corsair K95 RGB Platinum", price: 18000, image: keyboardImg, rating: 4.6, offer: "15% off", availability: "In Stock" },
      { name: "SteelSeries Apex Pro", price: 17000, image: keyboardImg, rating: 4.5, offer: "10% off", availability: "In Stock" },
      { name: "Keychron K6", price: 9000, image: keyboardImg, rating: 4.4, offer: "8% off", availability: "Limited Stock" }
    ]
  }
      
];

export default products;
