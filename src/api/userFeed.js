const API_PORT = process.env.REACT_APP_API_PORT || 3001
const API_URL = process.env.REACT_APP_API_URL || `http://localhost:${API_PORT}/userfeed`;

const getUserFeed = () => {
    return (
    fetch(API_URL)
    .then(response => response.json()));
    
}

export default getUserFeed;
