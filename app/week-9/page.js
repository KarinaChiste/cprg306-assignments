"use client"
import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "../contexts/AuthContext";



 


export default function Page(){
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
// Sign in to Firebase with GitHub authentication
const handleLogin = async () =>{
  await gitHubSignIn();
}

 
// Sign out of Firebase
const handleLogout = async () =>{
  await firebaseSignOut();
}


 
// Display some of the user's information
{/* <p>
  Welcome, {user.displayName} ({user.email})
</p>; */}

return(
  <div className="my-10 mx-20">
  {
    user ? (
    <div>
      <p>
        Welcome, {user.displayName} ({user.email})
      </p>
      <button onClick={handleLogout} className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-blue-600 text-white">
        Logout
      </button>
      <Link href="/week-9/shopping-list"><br/>Go to Shopping List</Link>
    </div>
      
    ) :
    (
      <button onClick={handleLogin} className="border-1 my-1 mx-3 px-5 py-3 rounded-2xl bg-blue-600 text-white">
      Login
    </button>
    )
  }
  </div>
  
)

}