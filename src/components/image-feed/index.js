import { useState } from "react"
import { ImagePost } from "../image-post";

require("./style.css");


export function ImageFeed(props)
{
    const {
        feed,
        onChange,
    } = props;

    return <div className="image-feed">
        <div>
            <input type='file' onChange={onChange} />
        </div>
        <div>
            {feed ? feed.map((img, i) => (
                <ImagePost key={i} image={img} />
            )) : 'No images yet'}
        </div>
    </div>
}
