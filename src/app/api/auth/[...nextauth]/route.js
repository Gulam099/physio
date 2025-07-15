// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET
//     }),
//   ],

//   callbacks: {
//     async signIn({ user }) {
//       console.log(user, "user data from Google");
//       try {
//         const email = user.email;
//         // Check if user exists
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_APP_URL}/user/get/${email}`
//         );
//         const response = await res.json();
//         console.log("user lookup response:", response);
        
//         // Check if user doesn't exist based on the actual response format
//         if (res.status === 404 || response.message === "Not Found") {
//           console.log("User not found, creating new user");
          
//           // Create user
//           const createRes = await fetch(
//             `${process.env.NEXT_PUBLIC_APP_URL}/user/create`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 username: user.name,
//                 email: user.email,
//                 image: user.image,
//                 role:'2'
//               }),
//             }
//           );
          
//           const createResponse = await createRes.json();
//           console.log("User creation response:", createResponse);
          
//           if (!createRes.ok) {
//             console.error("Failed to create user:", createResponse);
//             return false;
//           }
//         }
        
//         return true;
//       } catch (err) {
//         console.error("Sign-in error:", err);
//         return false;
//       }
//     },
//     async redirect({ url, baseUrl }) {
//       return baseUrl;
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// };

// // Create handler
// const handler = NextAuth(authOptions);

// // Export GET and POST handlers
// export { handler as GET, handler as POST };