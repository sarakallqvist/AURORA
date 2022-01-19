require('./style.css');


export function ImageUpload(props)
{
    const {
        onChange,
    } = props;

    return <div className="image-upload">
        <input type='file' onChange={onChange} />
    </div>
}
