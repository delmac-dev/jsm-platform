interface Props {
    title?: string;
    query: string | null;
    category: string | null;
}

const Header = ({title, query, category} : Props) => {
    var text = '';
    if(query && category) {
        if(category === 'all') text = `Search results for "${query}"`
        else text = `Search results for "${query}" in "${category}"`
    }
    else if(query) text = `Search results for "${query}"`
    else if(category) {
        if (category === 'all') text = "All Resources";
        else text = category;
    }
    else if(!query && !category && title) text = title;
    
    return (
        <h1 className={`heading3 self-start text-white-800 ${category && !query? 'capitalize': ''}`}>{text}</h1>
    )
}

export default Header