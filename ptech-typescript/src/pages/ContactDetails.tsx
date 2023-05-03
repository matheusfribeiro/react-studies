import { useParams, useNavigate } from 'react-router-dom'


export const ContactDetails = () => {
  const {id} = useParams()

  // redirect
  const navigate = useNavigate()

  const handleContact = () => {
    console.log('contato enviado')
    return navigate("/")
  }


  return (
    <div>
      <h1>Exibindo mais informaçoes do contato : {id}</h1>
      <button onClick={handleContact}>Enviar mensagem</button>
    </div>
  )
}