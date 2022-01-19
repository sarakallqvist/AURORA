
require("./style.css");
export function SearchRoute()
{
    return <div className="search-route">
        <h3> Find content </h3>
        Search and you will find.

<div className="search">
    <input type="text" placeholder="Search for username, email, location or #"/>
    <span />
    <input
        type='button'
        value='Search'
        className='searchBtn'
        />
</div>
</div>
}