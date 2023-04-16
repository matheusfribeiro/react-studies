import { useLoaderData, useNavigation } from "react-router-dom"

export const Contact = () => {
  const dogurl = useLoaderData()
  const navigation = useNavigation()

  if (navigation.state === "loading") {
    return <h1>LOADING...</h1>
  }

  return (
    <div>
      
      <h1> This is the Contact page</h1>
      <img src={dogurl} alt="" />
    
    </div>

  )
}

export const dataLoader = async () => {
  const res = await fetch("https://random.dog/woof.json")
  const dog = await res.json()

  return dog.url 
}