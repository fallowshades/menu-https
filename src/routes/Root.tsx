import { MenuItemsResponseWithParams } from '@/utils/types'
//import customFetch from '@/utils/customFetch'
import { type ReduxStore } from '@/lib/store'
import { useLoaderData, type LoaderFunction } from 'react-router-dom'

//import { ExtendedRequest } from '../../types'

export const loader =
  (store: ReduxStore): LoaderFunction =>
  async ({ request }: { request: Request }) => {
    console.log('Loader function started')
    const user = store.getState()
    console.log(user)
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    console.log('params', params)

    const type = params.type || ''
    // Construct the URL based on the 'type'
    const url = `/menu${type ? `?type=${type}` : ''}`
    const API_URL = 'http://localhost:3000/api/menu'
    const API_KEY = 'fallow'
    try {
      // const response = await customFetch<MenuItemsResponse>(url)
      const response = await fetch(`${API_URL}${type ? `?type=${type}` : ''}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-zocom': API_KEY,
        },
      })
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      // Parse JSON data
      const data = await response.json()
      console.log(data)
      // Return the response data along with the parameters to pass to the component
      return { ...data, params }
      // return { ...response.data, params }
      return true
    } catch (error) {
      console.error('Error fetching menu:', error)
      return null // Return null or some error data
    }
  }
import { useState, useEffect } from 'react'
import MenuButtons from '@/components/MenuButtons'
import MenuCards from '@/components/MenuCards'
const Root = () => {
  const { items } = useLoaderData() as MenuItemsResponseWithParams
  const test = 'tesgt'
  const response = true // useLoaderData() as any

  const [text, setText] = useState('test')
  useEffect(() => {
    console.log('response', response, test)
    const interval = setInterval(() => {
      setText((prevText) => (prevText === 'test' ? 'another text' : 'test'))
    }, 1000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  const categories = ['all', ...new Set(items.map((item) => item.type))]

  return (
    <div>
      {' '}
      <h1>{text}</h1>
      <p>Response: {response.toString()}</p>
      {categories.map((cat) => (
        <MenuButtons cat={cat} />
      ))}
      <div className='section-center'>
        {items.map((item) => (
          <MenuCards item={item} />
        ))}
      </div>
    </div>
  )
}

export default Root
