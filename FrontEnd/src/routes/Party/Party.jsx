import './Party.css'
import partyFetch from '../../axios/config'
import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

export const Party = () => {
  const { id } = useParams()

  const [party, setParty] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const loadParty = async () => {
      const res = await partyFetch.get(`/parties/${id}`)

      setParty(res.data)
    }
    loadParty()
  }, [])

  // Delete a festa
  const handleDelete = async () => {
    const res = await partyFetch.delete(`/parties/${id}`)

    if (res.status === 200) {
      navigate("/")
    }
  }

  if (!party) return <p>Carregando...</p>


  return (
    <div className='party'>
      <h1>{party.title}</h1>
      <div className='actions-container'>
        <Link to={`/party/edit/${party._id}`} className='btn'>Editar</Link>
        <button onClick={handleDelete} className='btn-secondary'>Excluir</button>
      </div>
      <p>Orçamento: R$ {party.budget}</p>
      <h3>Serviços contratados</h3>
      <div className='services-container'>
        {party.services.map((services) => (
          <div className='service' key={services._id}>
            <img src={services.image} alt={services.name} />
            <p>{services.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
