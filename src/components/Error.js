import { useNavigate } from 'react-router-dom';


const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Oops! Page Not Found</h2>
        <p className="error-message">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <button 
          className="home-button" 
          onClick={() => navigate('/')}
        >
          Go Back Home
        </button>
      </div>
      <div className="error-illustration">
        {/* You can add an SVG or image here */}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FFD166" d="M40,-58.1C51.5,-50.2,60.3,-38.3,65.3,-24.2C70.3,-10.1,71.5,6.2,66.7,20.5C61.9,34.8,51.1,47.1,37.8,56.3C24.5,65.5,8.7,71.6,-7.5,78.6C-23.7,85.6,-47.4,93.5,-59.7,85.1C-72,76.7,-73,52,-76.2,30.5C-79.5,9,-84.9,-9.3,-80.4,-24.9C-75.9,-40.5,-61.4,-53.4,-46.4,-60.3C-31.5,-67.1,-15.7,-67.9,-0.7,-67C14.4,-66.1,28.7,-63.5,40,-58.1Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
};

export default Error;