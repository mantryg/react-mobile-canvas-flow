
import '../styles/FilterButton.css';

interface FilterButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

const FilterButton = ({ onClick, isVisible }: FilterButtonProps) => {
  return (
    <button 
      className={`filter-button ${isVisible ? 'active' : ''}`} 
      onClick={onClick}
    >
      <div className="filter-icon"></div>
    </button>
  );
};

export default FilterButton;
