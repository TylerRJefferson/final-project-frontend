// import { useState } from "react";
// import { initializeApp } from "firebase/app";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyCVe4J0EdfxXa1tDkx6T8XxjVf0id_2CKk",
//   authDomain: "pocket-mechanic-auth.firebaseapp.com",
//   projectId: "pocket-mechanic-auth",
//   storageBucket: "pocket-mechanic-auth.appspot.com",
//   messagingSenderId: "184534658125",
//   appId: "1:184534658125:web:6f83af284a4de14b460004"
// };

// export default function Signup({ setUser }) {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const handleSignup = async(e) => {
//     e.preventDefault()
//     const app = initializeApp(firebaseConfig)
//     const auth = getAuth(app)
//     const response = await createUserWithEmailAndPassword(auth, email, password)
//       .catch(alert);
//     setUser(response.user)
//   }
//   return (
//     <>
//       <h1>Signup</h1>
//       <form onSubmit={handleSignup}>
//         <label htmlFor="email">Email:{" "}
//           <input type="email" name="email"
//             value={email} onChange= {e => setEmail(e.target.value)}
//             placeholder="youremail@email.com" />
//         </label> <br />
//         <label htmlFor="password">Password:{" "}
//           <input type="password" name="password"
//             value={password} onChange= {e => setPassword(e.target.value)}
//             placeholder="••••••" />
//         </label> <br />
//         <button type="submit">Signup</button>
//       </form>
//     </>
//   )
// }
