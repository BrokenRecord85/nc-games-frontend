import React from 'react'
import { useState, useEffect } from 'react'
import { getCategories } from '../utils/api'
import { useNavigate } from 'react-router-dom'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getCategories().then(({categories}) => {
        setCategories(categories)
    })
  }, [])

  const handleClick = (e) => {
    navigate(`/reviews/categories/${e.target.value}`, { replace: true })
  }
  
  return (
    <select onChange={handleClick}  name="categoriesList" id="categories-list">
        {categories.map((category) => {
            return (
                <option  key={category.slug} value={category.slug}>
                    {category.slug}
                </option>
            )
        })}
    </select>
  )
}

export default Categories