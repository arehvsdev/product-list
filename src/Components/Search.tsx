interface SearchProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

function Search({ searchTerm, setSearchTerm }: SearchProps) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search for products..."
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

export default Search;