
import '../styles/DateFilter.css';

interface DateFilterProps {
  dates: string[];
  activeDate: string;
  onSelectDate: (date: string) => void;
}

const DateFilter = ({ dates, activeDate, onSelectDate }: DateFilterProps) => {
  return (
    <div className="date-filter">
      {dates.map((date) => (
        <div
          key={date}
          className={`date-option ${activeDate === date ? 'active' : ''}`}
          onClick={() => onSelectDate(date)}
        >
          <div className="month">April</div>
          <div className="day">{date}</div>
        </div>
      ))}
    </div>
  );
};

export default DateFilter;
