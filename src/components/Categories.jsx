import React from 'react'
import { useState, useEffect,  } from 'react'
import { getCategories } from '../utils/api'
import { useNavigate, useParams } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const navigate = useNavigate()
  const params = useParams()


  useEffect(() => {
    getCategories().then(({categories}) => {
        setCategories(categories)
    })
  }, [])

  useEffect(() => {
    setSelectedCategory(params.category)
  }, [params.category])

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
        <option value='' disabled defaultValue>Select category: </option>
        <option value="all_categories">All Categories</option>
        {categories.map((category, index) => {
          
            return (
                <option  key={index} value={category.slug}>
                    {category.slug[0].toUpperCase() + category.slug.slice(1)}
                </option>
    
            )
        })}
       
    </select>
  )
}

export default Categories