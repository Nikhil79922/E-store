async function handleProducts(req, res) {
  const category = req.body.category;

  // Sample products data for different categories
  const products = {
    Trending: [
      {
        id: "3",
        imageUrl: "https://images6.alphacoders.com/133/1338694.png",
        name: "Smartphone X Pro",
        price: "$899",
        description: "The latest smartphone with cutting-edge features and a high-performance camera.",
      },
      {
        id: "4",
        imageUrl: "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1704018731195-f202bbeac8a7",
        name: "Smartwatch Ultra",
        price: "$250",
        description: "Stay connected and monitor your health with this sleek and stylish smartwatch.",
      },
      {
        id: "12",
        imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230707/pngtree-d-render-of-a-high-tech-production-line-with-modern-smartphones-image_3804900.jpg",
        name: "Smartphone Stand",
        price: "$20",
        description: "A minimalist stand to keep your smartphone upright while charging or watching media.",
      },
      {
        id: "13",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzbI9ixcPT4aCGyENnfsAeLeGPMz8wMgeMwpvkwpzMV8QOmrt7OqaYtuyor5kaPjMq2HI&usqp=CAU",
        name: "Wireless Earbuds 3",
        price: "$150",
        description: "Compact, high-quality wireless earbuds for superior sound and comfort on the go.",
      },
      {
        id: "14",
        imageUrl: "https://png.pngtree.com/background/20230625/original/pngtree-blue-background-with-3d-illustration-of-a-strong-cellular-connection-perfect-picture-image_4046136.jpg",
        name: "Bluetooth Speaker Max",
        price: "$100",
        description: "Portable Bluetooth speaker with high bass and long-lasting battery life for parties.",
      },
    ],
    Keyboard: [
      {
        id: "5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTwEIYd1S-fRuSdaJd-MohaUlwLR0TzeEeSQ&s",
        price: "$80",
        description: "Mechanical keyboard with customizable RGB lighting and high responsiveness.",
      },
      {
        id: "51",
        imageUrl: "https://i.pinimg.com/736x/ff/8d/2a/ff8d2aa612b59bfbd7d4c0c736485556.jpg",
        price: "$75",
        description: "Compact wireless keyboard with quiet keys and ergonomic design for comfortable typing.",
      },
      {
        id: "52",
        imageUrl: "https://c4.wallpaperflare.com/wallpaper/111/236/879/keyboards-mechanical-keyboard-hd-wallpaper-preview.jpg",
        price: "$120",
        description: "High-end mechanical keyboard for gamers with responsive switches and RGB features.",
      },
      {
        id: "53",
        imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230618/pngtree-vibrant-backlit-keyboard-in-3d-render-image_3636904.jpg",
        price: "$85",
        description: "RGB backlit keyboard with a premium build and adjustable brightness settings.",
      },
    ],
    Mouse: [
      {
        id: "6",
        imageUrl: "https://i0.wp.com/kndigitalstore.in/wp-content/uploads/2023/07/CLASHA.jpg?fit=1500%2C1500&ssl=1",
        name: "Gaming Mouse Pro",
        price: "$60",
        description: "Ergonomic gaming mouse with adjustable DPI and precision for gamers.",
      },
      {
        id: "60",
        imageUrl: "https://c0.wallpaperflare.com/preview/316/361/238/black-logitech-g-series-gaming-mouse-on-red-surface.jpg",
        name: "Logitech G-Series Mouse",
        price: "$70",
        description: "Logitech's high-performance gaming mouse with customizable buttons and RGB lighting.",
      },
      {
        id: "70",
        imageUrl: "https://e0.pxfuel.com/wallpapers/11/309/desktop-wallpaper-buy-logitech-g903-wireless-gaming-mouse-for-just-114-99-coupon.jpg",
        name: "Wireless Gaming Mouse",
        price: "$100",
        description: "Wireless gaming mouse with ultra-responsive sensors and long battery life.",
      },
    ],
    Speakers: [
      {
        id: "7",
        imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230722/pngtree-cutting-edge-display-podium-for-showcasing-products-high-tech-illuminated-neon-image_3770738.jpg",
        name: "Portable Bluetooth Speaker",
        price: "$150",
        description: "Compact portable speaker with a rugged design, perfect for outdoor adventures.",
      },
      {
        id: "33",
        imageUrl: "https://images.unsplash.com/photo-1648899936678-d66551cb292c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaW8lMjBzcGVha2VyfGVufDB8fDB8fHww",
        name: "SoundBlaster 360",
        price: "$200",
        description: "360-degree sound with deep bass and clear treble, perfect for home entertainment.",
      },
      {
        id: "34",
        imageUrl: "https://img.freepik.com/premium-photo/heavy-loud-speaker-hd-8k-background-wallpaper-stock-photographic-image_915071-20745.jpg",
        name: "Heavy Bass Speaker",
        price: "$250",
        description: "Heavy-duty speaker designed to deliver the deepest bass and loudest volume for parties.",
      },
      {
        id: "35",
        imageUrl: "https://img.freepik.com/premium-photo/stylish-black-speakers-black-background-high-resolution-acoustics-quality-characteristics-frequencies-bass-equalizer-presets-detailed-settings-volume-music-leisure-price-segment-ai_399089-6669.jpg",
        name: "Stylish Hi-Fi Speakers",
        price: "$300",
        description: "High-fidelity speakers for audiophiles, delivering crystal-clear sound across all frequencies.",
      },
    ],
    Robots: [
      {
        id: "9",
        imageUrl: "https://png.pngtree.com/thumb_back/fh260/background/20230419/pngtree-robot-kid-hi-tech-blue-eyes-image_2417250.jpg",
        name: "AI Companion Robot",
        price: "$999",
        description: "An AI-powered robot designed to assist with everyday tasks and provide entertainment.",
      },
      {
        id: "91",
        imageUrl: "https://media.istockphoto.com/id/1387900612/photo/automation-data-analytic-with-robot-and-digital-visualization-for-big-data-scientist.jpg?s=612x612&w=0&k=20&c=50maOJU6CpVC55mYnUqtff2aiaJZ7KlmMn4jNhWD_eo=",
        name: "Industrial Robot Arm",
        price: "$5,000",
        description: "Advanced robotic arm designed for industrial automation with high precision.",
      },
      {
        id: "92",
        imageUrl: "https://cdn.pixabay.com/photo/2024/03/20/03/06/ai-generated-8644499_640.jpg",
        name: "Delivery Drone Robot",
        price: "$2,000",
        description: "Autonomous drone robot designed to deliver packages quickly and safely.",
      },
    ],
    Motherboard: [
      {
        id: "10",
        imageUrl: "https://plus.unsplash.com/premium_photo-1680700221525-c41dc28197f2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
        name: "Gaming Motherboard Z9",
        price: "$200",
        description: "High-performance motherboard with support for gaming-grade components and overclocking.",
      },
      {
        id: "11",
        imageUrl: "https://static6.depositphotos.com/1025323/620/i/450/depositphotos_6200159-stock-photo-digital-circuit.jpg",
        name: "Motherboard X Series",
        price: "$180",
        description: "A reliable motherboard with advanced features for casual gaming and productivity.",
      },
    ],
    Headphones: [
      {
        id: "11",
        imageUrl: "https://images.unsplash.com/photo-1628329567705-f8f7150c3cff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
        name: "Noise Cancelling Headphones",
        price: "$150",
        description: "Over-ear headphones with active noise cancellation for an immersive audio experience.",
      },
      {
        id: "12",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPc1R2CBdcdUAT5EsPyvJUEO4E8dyGNg1G3sKDtw4OT7DUZ2h-SPepkoPAfXdoF8ctjo&usqp=CAU",
        name: "Wireless Over-Ear Headphones",
        price: "$120",
        description: "Comfortable wireless headphones with deep bass and long battery life.",
      },
      {
        id: "13",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaiDMoyEzaxcuzU3md9kRQTuc-C5m9jDguuwWQk0e2xX4e_5B1XgEoELPQ68yCjTn9ank&usqp=CAU",
        name: "Gaming Headset Pro",
        price: "$80",
        description: "Gaming headset with clear sound, built-in microphone, and comfortable ear cups.",
      },
    ]
  };

  if (products[category]) {
    res.json(products[category]);
  } else {
    res.status(404).json({ message: "Category not found" });
  }
}

module.exports = {
  handleProducts,
};