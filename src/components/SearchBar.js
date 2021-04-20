import React, {useState} from 'react'
import axios from 'axios'
import Results from './Results'

function SearchBar() {
    const [searchInput, setSearchInput] = useState('')
    const [repos, setRepos] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleClick = async () => {
        console.log(searchInput);

        try{
            const result = await axios(`https://api.github.com/users/${searchInput}/repos`);
            
            setRepos(result);
        }catch(err){
            console.log(err);
        }
    };

    return (
        <>
        <div class="bg-white-50">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span class="block">Repository GitHub Search</span>
            <span class="block text-gray-600">Search for any user's repos.</span>
            </h2>
        </div>
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <div class="inline-flex rounded-md shadow">
                <input class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" type='text' placeholder='Search' onChange={handleChange} />
                <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={handleClick}>Search</button>
            </div>
        </div>
        </div>
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <Results repos={repos} />
        </div>
        </>
    )
}

export default SearchBar
