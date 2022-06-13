import React from "react";

export const ProductForm = () => {
  const [formData, setFormData] = React.useState({
    title: "",
    category: "",
    image: "",
    isGender: "male",
    price: ""
  });



  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({...formData, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  
  const { title, category, price, image, isGender } = formData;
  
  const sumbitForm = async() => {
      try {
        let res = await fetch(`http://localhost:3000/products`, {
          method: "POST", 
          body: JSON.stringify(formData),
          headers:{
            "content-type": "application/json"
          } 
        })

      } catch (error) {
        console.log(error)
      }
      setFormData([formData]);
  }


  return (
    <>
      <h3>SIGN UP FORM</h3>
      <br />

      <form onSubmit={handleSubmit} className="formInput">
        Title :
        <input
          type="text"
          placeholder="Enter Title of the Product"
          name="title"
          onChange={handleChange}
          value={title}
        />
        Gender :
        <select name="gender" id="gender" value={isGender} onChange={handleChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        Category :
        <input
          type="text"
          placeholder="Enter Category"
          name="category"
          onChange={handleChange}
          value={category}
        />
        Price :
        <input
          type="text"
          placeholder="Enter Price"
          name="price"
          onChange={handleChange}
          value={price}
        />
        <br />
        Image :
        <input type="text" value={image} name="image" placeholder="https://picsum.photos/200" onChange={handleChange} />
        <br />
        <input type="submit" onClick={sumbitForm} value="SUBMIT FORM" />
      </form>
    </>
  );
};
