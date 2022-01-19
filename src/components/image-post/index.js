import { useState } from 'react';

require('./style.css');


export function ImagePost(props)
{
    const {
        image,
        hideLike
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
        { hideLike ? null :
            <div >
                {isLiked ? (
                    <input type='button' value='Unlike' onClick={toggleLike} />
                ) : (
                    <input type='button' value='Like' onClick={toggleLike} />
                )}
            </div>
        }
    </div>
}
