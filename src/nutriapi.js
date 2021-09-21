import React from 'react'



function NutriApi() {
  return (
    <div className="App">
  <h1>Nutrition info</h1>
    </div>
  );
}
// function NutriApi() {
//     return (
//       <div >
//     <h1>Nutrition Info</h1>
//           </div>
//     )
//           function NutriFetch() {
//             const [error, setError] = useState(null);
//             const [isLoaded, setIsLoaded] = useState(false);
//             const [items, setItems] = useState([]);
          
//             // Note: the empty deps array [] means
//             // this useEffect will run once
//             // similar to componentDidMount()
//             useEffect(() => {
          
//               fetch(`https://api.edamam.com/api/nutrition-data?app_id=a5be03de&app_key=fc3f3e2c95599671a870ac7e93f0059a&nutrition-type=logging&ingr=Olive Oil`)
//                 .then(res => res.json())
//                 .then(
//                   (result) => {
//                     setIsLoaded(true);
//                     setItems(result);
//                   },
//                   // Note: it's important to handle errors here
//                   // instead of a catch() block so that we don't swallow
//                   // exceptions from actual bugs in components.
//                   (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                   }
//                 )
//             }, [])
//             if (error) {
//               return <div>Error: {error.message}</div>;
//             } else if (!isLoaded) {
//               return <div>Loading...</div>;
//             } else {
//               console.log(items + 'here')
          
//               return (
//                 <ul>
//                   {items.map(item => (
//                     <li key={item.id}>
//                       {item} {item}
//                     </li>
//                   ))}
//                 </ul>
//               );
//             }
//           }
          
    
//   }
  
  export default NutriApi;