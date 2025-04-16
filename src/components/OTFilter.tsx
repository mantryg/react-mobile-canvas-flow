
import '../styles/OTFilter.css';

interface OTFilterProps {
  otOptions: string[];
  activeOT: string;
  onSelectOT: (ot: string) => void;
}

const OTFilter = ({ otOptions, activeOT, onSelectOT }: OTFilterProps) => {
  return (
    <div className="ot-filter">
      {otOptions.map((ot) => (
        <div
          key={ot}
          className={`ot-option ${activeOT === ot ? 'active' : ''}`}
          onClick={() => onSelectOT(ot)}
        >
          {ot}
        </div>
      ))}
    </div>
  );
};

export default OTFilter;
