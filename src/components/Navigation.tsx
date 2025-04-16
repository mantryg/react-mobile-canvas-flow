
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="nav-item">
        <div className="nav-icon dashboard-icon"></div>
        <div className="nav-label">Dashboard</div>
      </div>
      <div className="nav-item">
        <div className="nav-icon andcenter-icon"></div>
        <div className="nav-label">AndCenter</div>
      </div>
      <div className="nav-item">
        <div className="nav-icon book-ot-icon"></div>
        <div className="nav-label">Book OT</div>
      </div>
      <div className="nav-item">
        <div className="nav-icon calendar-icon"></div>
        <div className="nav-label">Calendar</div>
      </div>
      <div className="nav-item">
        <div className="nav-icon implant-icon"></div>
        <div className="nav-label">Implant</div>
      </div>
    </div>
  );
};

export default Navigation;
