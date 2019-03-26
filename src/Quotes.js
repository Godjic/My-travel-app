import React from "react";
import Quote from "./Quote"
// src/Quotes.js
const quotes = [
    {
        country:
            "Indonésie",
        city: "Bali",
        image:
            "https://defimedia.info/sites/default/files/styles/node_content_picture_no_watermark/public/060718_bali.jpg?itok=C6lQDI_7"
    },
    {
        country: "Botswana",
        city: "Namibia",
        image:
            "https://www.allibert-trekking.com/iconographie/b0/PL1_botswana.jpg"
    },
    {
        country: "Tanzania",
        city: "Zanzibar",
        image:
            "https://content.tui.co.uk/adamtui/2018_9/24_16/95dab645-e083-46f1-a84f-a965010b4834/LOC_002143_shutterstock_565340671WebOriginalCompressed.jpg?i10c=img.resize(width:658);img.crop(width:658%2Cheight:370)"
    },
    {
        country: "Nigeria",
        city: "Lagos",
        image: "https://d15gqlu8dfiqiu.cloudfront.net/s3fs-public/styles/banner/public/images/chapters/lagos.jpg"
    },
    {
        country: "Ivory Coast",
        city: "Abidjan",
        image:
            "https://photos.thechurchnews.com/file/ba2ad71838/dnews/galleryImageLarge/the-exterior-rendering-of-the-abidjan-cote-divoire-temple-which.jpg"
    }
];

const Quotes = () => (
    <div>
        {quotes.map(quote => (
            <Quote country={quote.country} image={quote.image} city={quote.city} />
        ))}
    </div>
);

export default Quotes;