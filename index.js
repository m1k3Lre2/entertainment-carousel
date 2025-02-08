<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Entertainment Carousel</title>
    <script type="module" src="./index.js"></script>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <div id="root"></div>
    <script type="module">
        import React from "react";
        import ReactDOM from "react-dom";
        import EntertainmentCarousel from "./EntertainmentCarousel.js";
        
        ReactDOM.render(
            <React.StrictMode>
                <EntertainmentCarousel />
            </React.StrictMode>,
            document.getElementById("root")
        );
    </script>
</body>
</html>

<script>
const slides = [
    { image: "image1.jpg", audio: "audio1.mp3" },
    { image: "image2.jpg", audio: "audio2.mp3" },
    { image: "image3.jpg", audio: "audio3.mp3" },
    { image: "image4.jpg", audio: "audio4.mp3" },
    { image: "image5.jpg", audio: "audio5.mp3" },
];
</script>
