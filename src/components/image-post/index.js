import { useState } from 'react';

require('./style.css');


export function ImagePost(props)
{
    const {
        image,
    } = props;

    const [isLiked, setIsLiked] = useState(false);

    function toggleLike()
    {
        setIsLiked(prev => !prev);
    }

    return <div className='image-post'>
        <div className='image' style={{
            backgroundImage: `url(${image})`,
        }} />
        {isLiked ? (
            <input type='button' value='Dislike' onClick={toggleLike} />
        ) : (
            <input type='button' value='Like' onClick={toggleLike} />
        )}
    </div>
}
