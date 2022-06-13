import React from 'react';

export const ProductListing = () => {

    const [data, setData ] = React.useState([])
    const [page, setPage] = React.useState(1)

    const getData = async() => {
        try {
            let res = await fetch(`http://localhost:3000/products?_page=${page}&_limit=5`)
            let data = await res.json()
            setData(data)
            
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getData()
    }, [page])

    console.log(data)

    const handleDelete = async(id) => {
        try {
            await fetch(`http://localhost:3000/products/${id}`,{
              method: "DELETE", 
              headers: {
                "content-type": "application/json"
              }
            })
            getData()
            
          } catch (error) {
            console.log(error)
          }
    }

    const handleSort = async() => {
        try {
            let res = await fetch(`http://localhost:3000/products?_sort=price&order=asc&_page=${page}&_limit=5`)
            let data = await res.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <> 
        <button onClick={() => handleSort()} >SORT</button>       
        {data.map((item) => (
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(6,1fr)",
                alignItems: "center",
                justifyContent: "center",
               
              }}>
                <h4>{item.title}</h4>
                <p>{item.gender}</p>
                <p>{item.category}</p>
                <p>{item.price}</p>
                <img src={item.image} alt="" />
                <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
        ))}
        <button onClick={() => setPage(page - 1)} disabled={page == 1} > Previous</button>
        <button onClick={() => setPage(page + 1)} > Next</button>
        </>

    )

}