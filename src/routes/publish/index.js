import { useEffect, useState } from "react";
import { ImageFeed } from "../../components/image-feed";
import { ImagePost } from "../../components/image-post";
import { ImageUpload } from "../../components/image-upload";
import { SignIn } from "../../components/sign-in";

require("./style.css");


export function ImageRoute(props)
{
    const {
        imageFeed,
        setImageFeed,
    } = props;

    const [selectedImage, setSelectedImage] = useState();

    useEffect(() => {
        if (!selectedImage) return;
        setImageFeed(prev => [
            selectedImage,
            ...prev,
        ]);
    }, [selectedImage]);


    function handleUpload(e)
    {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }

    return <div className="image-route">
        <ImageUpload onChange={handleUpload} />
        {selectedImage ? <div>
            Image Uploaded!
            <ImagePost image={selectedImage} hideLike/>
        </div> : null}
    </div>
}
