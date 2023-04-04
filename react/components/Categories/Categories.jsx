import './Categories.css';

export const Categories = function ({setCategory}) {
    const categories = [
        {id:0, name: 'Tout'},
        {id:1, name: 'autres'},
        {id:2, name: 'hardware'},
    ];

    return(
        <>
            <select id={'categories'} className="category-selection" onChange={(e) => setCategory(parseInt(e.target.value))}>
                {categories.map(category =>
                    <option value={category.id} key={category.id}>
                        {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                    </option>
                )}
            </select>
        </>
    );
}