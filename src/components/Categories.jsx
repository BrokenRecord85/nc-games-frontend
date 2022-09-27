import React from 'react'
import { useState, useEffect,  } from 'react'
import { getCategories } from '../utils/api'
import { useNavigate, useParams } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const navigate = useNavigate()
  const params = useParams()
  console.log(params.category)

  useEffect(() => {
    getCategories().then(({categories}) => {
        setCategories(categories)
    })
  }, [])

  const handleChange = (e) => {
    setSelectedCategory(e.target.value)
    if(e.target.value === 'all_categories') {
      navigate(`/reviews`, {replace: false})
    }
    else {
      navigate(`/reviews/categories/${e.target.value}`, { replace: false })
    }
    
  }
  
  return (
    <select className='select-cat' onChange={handleChange} value={selectedCategory}  name="categoriesList" id="categories-list">
        <option value='' defaultValue>Select category: </option>
        <option value="all_categories">All Categories</option>
        {categories.map((category, index, array) => {
          //console.log(array)
            return (
                <option  key={index} value={category.slug}>
                    {category.slug}
                </option>
    
            )
        })}
       
    </select>
  )
}

export default Categories