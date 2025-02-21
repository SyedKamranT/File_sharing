import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"; 

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [profilePic, setProfilePic] = useState("https://art.pixilart.com/ab3d6dd6fe5046f.png");

    useEffect(() => {
        // Get the stored token from localStorage
        const token = localStorage.getItem("token");

        if (token) {
            // Decode the token to extract userId
            const decoded = jwtDecode(token);
            const userId = decoded.userId; // Make sure your backend sends "id" in the token

            console.log(userId)

            // Fetch the user profile picture using userId
            fetch(`http://localhost:5000/api/user/${userId}`)
                .then(response => response.json())
                .then(data => setUser(data))
                .catch(error => console.error("Error fetching profile picture:", error));
        }
    }, []);


    return (
        <div>
            {user ? (
               
                <div>
                     
                    {/* <h2>{user.username}</h2> */}
                   <img className=" w-12 h-12 rounded-full border-[1px] border-[#DD5E3F]" src={profilePic} alt="" /> 
                </div>
            ) : (
                <p>Loading user info...</p>
            )}
        </div>
    );
};

export default UserProfile;
