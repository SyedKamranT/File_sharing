// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import axios from "axios";

// const UserProfile = () => {
//     const [user, setUser] = useState(null);
//     const [profilePic, setProfilePic] = useState("https://art.pixilart.com/ab3d6dd6fe5046f.png");

//     useEffect(() => {
//         // Get the stored token from localStorage
//         const token = localStorage.getItem("token");
//         console.log(token)

//         if (token) {
//             // Decode the token to extract userId
//             const decoded = jwtDecode(token);
//             const userId = decoded.userId; // Make sure your backend sends "id" in the token

//             console.log(userId)

//             // Fetch the user profile picture using userId
//             fetch(`http://localhost:5000/api/user/${userId}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     setUser(data);

//                     // If user has a profile picture, set it
//                     if (data.profilePicture) {
                       
                       
//                         setProfilePic(`http://localhost:5000/files/profile/${data.profilePicture}`);
//                     }
//                 })
//                 .catch(error => console.error("Error fetching user data:", error));



//         }





//     }, []);


//     return (
//         <div>
//             {user ? (

//                 <div>

//                     {/* <h2>{user.username}</h2> */}
//                     <img className=" w-12 h-12 rounded-full border-[1px] border-[#DD5E3F]" src={profilePic} alt="profile pic" />
//                 </div>
//             ) : (
//                 <p>Loading user info...</p>
//             )}
//         </div>
//     );
// };

// export default UserProfile;


import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [profilePic, setProfilePic] = useState("https://art.pixilart.com/ab3d6dd6fe5046f.png");

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            console.warn("No token found in localStorage");
            return;
        }

        try {
            const decoded = jwtDecode(token);
            console.log("Decoded Token:", decoded);

            const userId = decoded?.userId || null;
            const username = decoded?.username || "User";
            const profilePicture = decoded?.profilePicture || null;
            const googleId = decoded?.googleId || null;
            const githubId = decoded?.githubId || null;

            setUser({ username });

            if (googleId || githubId) {
                // ✅ Social login (Google/GitHub)
                if (profilePicture) {
                    console.log("Using Social Profile Picture:", profilePicture);
                    setProfilePic(profilePicture);
                }
            } else if (userId) {
                // ✅ Normal login: Fetch profile from backend
                fetch(`https://flowfiles.onrender.com/api/user/${userId}`)
                    .then(response => response.json())
                    .then(data => {
                        console.log("Fetched user data from backend:", data);
                        setUser(data);

                        if (data?.profilePicture) {
                            let profileUrl = data.profilePicture;

                            // ✅ Fix: Only prepend localhost if it's not already a full URL
                            if (!profileUrl.startsWith("http")) {
                                profileUrl = `https://flowfiles.onrender.com/files/profile/${profileUrl}`;
                            }

                            console.log("Setting Normal Profile Picture:", profileUrl);
                            setProfilePic(profileUrl);
                        } else {
                            console.warn("No profile picture found in backend response.");
                        }
                    })
                    .catch(error => console.error("Error fetching user data:", error));
            } else {
                console.error("No valid user data found in token.");
            }

        } catch (error) {
            console.error("Invalid JWT Token:", error);
        }
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <img className="w-12 h-12 rounded-full border-[1px] border-[#DD5E3F]" src={profilePic} alt="profile pic" />
                  
                </div>
            ) : (
                <p>Loading user info...</p>
            )}
        </div>
    );
};

export default UserProfile;
