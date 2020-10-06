import {firebase} from "../../firebase"
import React from 'react'
import moment from 'moment';

const Database = () => {

    const [alerts, setAlerts] = React.useState([])
    const [latitude, setLatitude] = React.useState("")
    const [longitude, setLongitude] = React.useState("")

    
    React.useEffect(()=>{
  
      const getData = async () =>{
        try {
          const db = firebase.firestore()
          const data = await db.collection("alerts").get()
          const arrayData = await data.docs.map(doc =>({id: doc.id, ...doc.data()}))
          setAlerts(arrayData)
          console.log(setAlerts)

  
        } catch(error){
          console.log(error)
        }
      }
      getData()
    },[])
  
    const addData = async (e) => {
      e.preventDefault()
  

      try {

        const db = firebase.firestore()
        const newAlert = {
            latitude: localStorage.getItem("latitude"), /* /^(-?[1-8]?d(?:.d{1,18})?|90(?:.0{1,18})?)$/ */
            longitude: localStorage.getItem("longitude"), /* /^(-?(?:1[0-7]|[1-9])?d(?:.d{1,18})?|180(?:.0{1,18})?)$/ */
            typeOfAlert: localStorage.getItem("typeOfAlert"), 
            amountOfPeople: localStorage.getItem("amountOfPeople"),
            timestamp:moment().format()
        }

        const data = await db.collection("alerts").add(newAlert)
       
       setAlerts([...alerts,{...newAlert,id:data.id}])

      } catch (error){
          console.log(error)
      }
      console.log(latitude)
    }

    const deleteAlert = async (id) =>{
      try{
        const db = firebase.firestore()
        await db.collection("alerts").doc(id).delete()
        const filteredArray = alerts.filter(item=> item.id !==id)
        setAlerts(filteredArray)

      } catch (error){
        console.log(error)
      }
    }
    return (
        <div>
          {/* pinta la latitud en la app */}
            <div className="container nt-3">
                <div className="row">
                <div className="col-md-6">
                    <ul className="list-group">
                    {alerts.map(item => (
                    <li className="list-group-item" key={item.id}>
                        {item.latitude}{item.longitude}{"-"}{item.typeOfAlert}{"-"}{item.amountOfPeople}
                        <div className="button btn btn-danger btn-sm float-right" onClick={() => deleteAlert(item.id)}>Eliminar</div>
                    </li>
                    )
                    )}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h3>Formulario</h3>
                    <form onSubmit={addData}>
                    {/* <input type="number" className="form-control mb-2" onChange={e => setLatitude(e.target.value)} value = {latitude}/>
                    <input type="number" className="form-control mb-2" onChange={e => setLongitude(e.target.value)} value = {longitude}/> */}
                    <button type="submit">agregar</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Database;
