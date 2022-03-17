import React, { useEffect, useState } from "react";
import { showAllPerson } from '../../services/user'
import CardPerson from '../../components/CardPerson'
function Home() {
  const [person, setPerson] = useState([]);

  const showPerson = async() => {
    const data = await showAllPerson();
    setPerson(data);
  }
  useEffect (() =>{
    showPerson();
  }, [])
  return(
    <div>
      <h1>Home</h1>
      {
        person.map((eachPerson)=> (
          <CardPerson key={eachPerson.id} eachOne={eachPerson}/>
        ))
      }
    </div>
  )

}
export default Home;
