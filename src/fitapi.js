import React from "react";
import useFetch from "react-fetch-hook"; 
 // installed react-fetch-hook
   //<pre> tag allows the use of multi-line strings (pre-formatted text)
   //https://www.npmjs.com/package/react-fetch-hook
   //Api: https://wger.de/api/v2/
   //Token 1234567890abcde
   //API key d6f0b4fc51f4dd331b400cb0ea3ff2c26c18b160



 function FitApi() { 
  const { isLoading, error, data } = useFetch("https://wger.de/api/v2/exerciseimage/?is_main=True"); 
  if (isLoading) return "Loading..."; 
  if (error) return "Error!"; 
  return ( 
    <> 
      <pre>{JSON.stringify(data, null, 2)}</pre>  
    </> 
  );
}

  
  export default FitApi;

