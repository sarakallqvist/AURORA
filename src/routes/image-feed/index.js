import { useEffect, useState } from "react";
import { ImageFeed } from "../../components/image-feed";
import { SignIn } from "../../components/sign-in";

require("./style.css");


export function ImageRoute(props)
{
    const {
        currentUser,
        setCurrentUser,
    } = props;
    const [selectedImage, setSelectedImage] = useState();
    const [imageFeed, setImageFeed] = useState([
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
    ]);

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

    return <div className="home-route">
        <ImageFeed feed={imageFeed} onChange={handleUpload} />
    </div>
}
