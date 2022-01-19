import { useState } from "react"
import { ImagePost } from "../image-post";

require("./style.css");


export function ImageFeed(props)
{
    const {
        feed,
    } = props;

    return <div className="image-feed">
        {feed ? feed.map((img, i) => (
            <ImagePost key={i} image={img} />
        )) : 'No images yet'}
    </div>
}
