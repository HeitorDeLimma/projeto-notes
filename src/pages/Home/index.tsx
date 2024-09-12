import './styles.css'
import Logo from '../../assets/logo.png'

import NewNoteCard from '../../components/NewNoteCard'
import NoteCard from '../../components/NoteCard'

export default function Home() {
  return (
    <div className='container'>
      <img src={Logo} alt="Notes" />

      <form>
        <input 
        type="text"
        placeholder='Busque em suas notas...'
        />
      </form>

      <div className='separator' />

      <div className='cards'>
        <NewNoteCard />

        <NoteCard />
        <NoteCard />
      </div>
    </div>
  )
}
