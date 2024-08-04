import { useState } from "react"
import searchResultsApi from "../../utils/getSearchResultsApi";
import ExpenseCard from "../expenses/expensesCard";
const Search = () => {
    const [text, setText] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [searchStatus, setSearchStatus] = useState(false);

    const handleSearch = async(e)=>{
        e.preventDefault();
        const response = await searchResultsApi(text);
        console.log(response)
        setSearchResults(response||[]);
        setSearchStatus(true);
    }
    return (
        <div>
            <textarea placeholder="Enter expense title"  value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            {searchStatus && searchResults.length > 0 && searchResults.map((expense, index) => (
                <ExpenseCard expense={expense} key={index}/>
            ))}
        </div>
    )
}

export default Search;