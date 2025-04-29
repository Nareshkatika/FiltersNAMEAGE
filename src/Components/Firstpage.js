
import axios from 'axios'
import {useState,useEffect} from 'react'
import Filters from './Filters'


const FirstPage=()=>{
    const[store,setStore]=useState([])
    const[items,setItems]=useState([])
    const[loading,setLoading]=useState(true)

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await axios.get('https://dummyjson.com/users')
                setItems(response.data.users)
                setStore(response.data.users)
                setLoading(false)

            }catch(error){
                console.log(error.message)
            }
        }
        fetchData()
    },[])


    const[name,setName]=useState('')
    const[sorting,setSorting]=useState('')
    const[male,setMale]=useState('')
    const[female,setFemale]=useState('')
    

    useEffect(()=>{
        let solution=[...items]

        //sorting by age
        if(sorting==='asc'){
            solution.sort((a,b)=>a.age-b.age)
        }else if(sorting==='desc'){
            solution.sort((a,b)=>b.age-a.age)
        }

        //radio buttons for male
        if(male==='male'){
            solution=solution.filter(each=>each.gender.toLowerCase()===male.toLowerCase())
        }
        
        //radio buttons for female
        if(female==='female'){
            solution=solution.filter(each=>each.gender.toLowerCase()===female.toLowerCase())
        }
        
        setStore(solution)
    },[items,sorting,male,female])


    const searchButton=()=>{
        const sol=items.filter(each=>each.firstName.toLowerCase().includes(name.toLowerCase()) || 
                                    each.lastName.toLowerCase().includes(name.toLowerCase()) || 
                                    each.age.toString().includes(name))
        setStore(sol)
    }

    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'40px'}}>
        <Filters 
                name={name}
                setName={setName}
                searchButton={searchButton}

                sorting={sorting}
                setSorting={setSorting}

                male={male}
                setMale={setMale}

                female={female}
                setFemale={setFemale}

                items={items}
                setStore={setStore}
            />
            {loading ? <p>Loading...please wait</p>:<table style={{marginRight:'350px'}} cellPadding={3} border={3}>
                <thead  >
                    <tr>
                        <th>id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Blood Group</th>
                    </tr>
                </thead>
                <tbody>
                    {store.map(eachItem=>(
                        <tr key={eachItem.id}>
                            <td>{eachItem.id}</td>
                            <td>{eachItem.firstName}</td>
                            <td>{eachItem.lastName}</td>
                            <td>{eachItem.age}</td>
                            <td>{eachItem.gender}</td>
                            <td>{eachItem.bloodGroup}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}

            
        </div>
    )
}

export default FirstPage