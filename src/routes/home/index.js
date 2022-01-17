import { useEffect, useState } from "react";
import { ImageFeed } from "../../components/image-feed";
import { SignIn } from "../../components/sign-in";

require("./style.css");


export function HomeRoute(props)
{
    const {
        currentUser,
        setCurrentUser,
    } = props;
    const [selectedImage, setSelectedImage] = useState();
    const [imageFeed, setImageFeed] = useState([
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
