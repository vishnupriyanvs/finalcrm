import Card from "./Card/Card";
import RCard from "./Card/RCard";
import axios from "axios";
function Home(){
  axios.put(`http://localhost:4500/crm/pagevisit/${1}`)
  return(<>
    
    
      <h1 style={{marginTop:"90px"}}>Welcome Home!</h1>
      {/* <p>Lorem Ipsum is simply dummy text of 
        the printing and typesetting industry. 
        Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of 
        type and scrambled it to make a type 
        specimen book. It has survived not only 
        five centuries, but also the leap into 
        electronic typesetting, remaining 
        essentially unchanged. It was popularised 
        in the 1960s with the release of Letraset 
        sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing 
        software like Aldus PageMaker including 
        versions of Lorem Ipsum.</p> */}
        <Card/>
        <RCard/>
    
  </>

  )
}

export default Home;