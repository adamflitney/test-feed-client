const PORT = process.env.PORT || 3001
const API_URL = process.env.API_URL || `http://localhost:${PORT}/userfeed`;

const getUserFeed = () => {
    return (
    fetch(API_URL)
    .then(response => response.json()));
    
}

export default getUserFeed;
