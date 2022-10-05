import React from 'react'
import AttorneyProvider from '../Context/AttorneyContext'
import AttorneyPage from './AttorneyPage'

function RenderAttorneyPage() {
  return (
    <div>
        <AttorneyProvider>

        <AttorneyPage />
        </AttorneyProvider>
    </div>
  )
}

export default RenderAttorneyPage