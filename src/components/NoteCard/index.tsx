import { useState } from 'react'
import { X } from 'lucide-react'

import './styles.css'

export default function NoteCard() {
  const [open, setOpen] = useState(false)

  return (
    <div className='note-card'>
      <button onClick={() => setOpen(true)}>
        <span>há menos de um minuto</span>
        <p>Texto que o Natan criou de exemplo para aparecer na nota</p>

        <div className='gradient-overlay' />
      </button>

      {
        open ? (
          <div
            onClick={() => setOpen(false)}
            className='modal-overlay'
          >
            <div
              // Para a propagação do click
              onClick={(e) => e.stopPropagation()}
              className='modal-content'
            >
              <button
                onClick={() => setOpen(false)}
                className='modal-close'
              >
                <X />
              </button>

              <form>
                <div>
                  <span>há menos de um minuto</span>

                  <p>Texto que o Natan criou de exemplo para aparecer na nota</p>

                </div>

                <button>
                  Deseja <span>apagar essa nota?</span>
                </button>
              </form>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}
