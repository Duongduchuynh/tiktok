// import { useState, useEffect } from 'react';






// function Contents() {
//     const [title, setTitle] = useState('');
//     const [posts, setPosts] = useState([]);
//     useEffect(() => {
//         document.title = title;
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((rens) => rens.json())
//         .then((posts) => setPosts(posts))
//     },[])

//     return (
//         <>
//         <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)} />
//         <ul>
//             {posts.map((post) => (
//                 <li key={post.id}>{post.title}</li>
//                 ))}
//         </ul>
//         </>
//     )

// }

// export default Contents;