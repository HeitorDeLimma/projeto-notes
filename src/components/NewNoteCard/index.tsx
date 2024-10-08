import { useState } from 'react'
import { X } from 'lucide-react'

import './styles.css'

export default function NewNoteCard() {
  const [open, setOpen] = useState(false)

  return (
    <div className='new-note-card'>
      <button onClick={() => setOpen(true)}>
        <span>Adicionar nota</span>
        <p>Crie uma nota para um lembrete, lista de compras, tarefas e muito mais</p>
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
                  <span>Adicionar nota</span>

                  <textarea autoFocus></textarea>
                </div>

                <button>Salvar essa nota</button>
              </form>
            </div>
          </div>
        ) : null
      }
    </div>
  )
}

