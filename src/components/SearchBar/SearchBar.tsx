import { BsSearch } from "react-icons/bs";
import {
    SearchBarContainer,
    SearchBarInput,
    SearchBarGrid
} from "../../styles/NoteStyles";

interface ISearchBarProps {
    searchTerm : string,
    setSearchTerm: (term: string) => void;
};

const SearchBar: React.FC<ISearchBarProps> = ({ setSearchTerm }) => {
    return (
        <SearchBarGrid>
            <SearchBarContainer>
                <BsSearch
                    size={25}
                    color="#BEC5D7"
                    className="mx-3"
                />
                <SearchBarInput
                    placeholder="Search in notes"
                    onChange={(e) => {setSearchTerm(e.target.value)}}
                />
            </SearchBarContainer>
        </SearchBarGrid>

    )
}

export default SearchBar;