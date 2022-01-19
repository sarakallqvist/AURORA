import { useState } from "react";
import { ImageFeed } from "../../components/image-feed";
import { ImageUpload } from "../../components/image-upload";

require("./style.css");
export function ProfileRoute(props)
{
    const {
        imageFeed,
        user,
        setBio,
    } = props;

    const [isEditing, setIsEditing] = useState();
    const [editorBio, setEditorBio] = useState(user.bio);

    const [selectedImage, setSelectedImage] = useState();

    function handleUpload(e)
    {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }

    return <div className="profile-route">
        <h3> {user.username}</h3>
        {selectedImage ? null :
            <ImageUpload onChange={handleUpload} />
}
        {selectedImage ?
        <img src={selectedImage} className="profile-pic"/> : null

    }
        <h4>Biography</h4>
        <div className="profile-bio">
            {!isEditing ? <input type='button' value='Edit bio' onClick={() => {
                setIsEditing(true);
            }} /> : null}
            {isEditing ? (
                <div className="editBio">
                    <textarea value={editorBio} onChange={e => setEditorBio(e.target.value)} />
                    <input type='button' value='Save' onClick={() => {
                        setBio(editorBio);
                        setIsEditing();
                    }} />
                </div>
            ) : (
                <div>
                    {user.bio ? user.bio : null}
                </div>
            )}
            {}
        </div>
        <hr></hr>

        <ImageFeed feed={imageFeed} />

    </div>
}
