


import first from "./assets/images/1.jpg";
import second from "./assets/images/2.jpg";
import third from "./assets/images/3.jpg";
import fourth from "./assets/images/4.jpg";
import { useState } from 'react';


function App() {

  const [id, setId] = useState(2)

const [photos, setPhotos] = useState([{
  id :1, photo: first}, 
  {
     id: 2, photo:second
  },
  {
      id:3, photo:third
  },
 {
   id:4, photo: fourth
 }])
 const handleBackward = () => {
id ===1 ? setId(4) : setId(id-1)
 }
 const handleForward = () => {
  id ===4 ? setId(1) : setId(id+1)
   }
 console.log(id);

 



  return (
    <div className="App"> <br /><br /><br />
    



    {
  photos.filter((item) => item.id === id)
    .map((filteredItem) => (
      <img src={filteredItem.photo} alt="Resim" key={filteredItem.id} />
    ))
}



    <h1>{id}</h1> <br /><br /><br />
   <button onClick={ handleBackward} style={{width : "100px"}}>Geri</button>
   
   <button onClick={handleForward} style={{width : "100px"}}>İleri</button>
    </div>
  );
}

export default App;
