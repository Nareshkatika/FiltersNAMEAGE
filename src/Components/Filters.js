

const Filters=(props)=>{
    const{setStore,items,name,setName,searchButton,sorting,setSorting,male,setMale,female,setFemale}=props

    //clear Filters
    const cleanFilters=()=>{
        setName('')
        setSorting('')
        setFemale('')
        setMale('')
        setStore(items)
    }
    


    //Radio elements for female
    const FemaleBox=()=>{
        return(
            <div>
                <label>
                    <input type="radio" value='female' checked={female==='female'} onChange={()=>{setFemale('female');setMale('')}} />Female
                </label>
            </div>
        )
    }

    //Radio elements for male
    const MaleBox=()=>{
        return(
            <div>
               
                    <label>
                        <input value='male' checked={male==='male'} onChange={()=>{setMale('male');setFemale('')}} type="radio" />Male
                    </label>
               
            </div>
        )
    }

    //sorting by Age starts
        const sortByAge=()=>{
            return(
                <div>
                    <select onChange={(event)=>setSorting(event.target.value)} value={sorting} >
                        <option value=''>select</option>
                        <option value='asc'>Low</option>
                        <option value='desc'>High</option>
                    </select>
                </div>
            )
        }

    //search bar starts
    const onChangeName=(event)=>{
        setName(event.target.value)
    }

   

    const searchInputElement=()=>{
        return(
            <div>
                <input value={name} onChange={onChangeName} placeholder="FNAME LNAME AGE" />
                <button onClick={searchButton} >search</button>
            </div>
        )
    }
    //search bar ends

    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-start',alignItems:'flex-start'}}>
            <h1>Filters</h1>
            {searchInputElement()}
            <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}} >SortByAge:{sortByAge()}</div>
            {MaleBox()}
            {FemaleBox()}
           <button onClick={cleanFilters} >clear Filters</button>
        </div>
    )
}

export default Filters