import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// https://oqrjzrryzcsbxspahcrl.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcmp6cnJ5emNzYnhzcGFoY3JsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNTcyNDMsImV4cCI6MjA1NjYzMzI0M30.WLPxsbpZaN4w-0IGkibbqUSA53pMDzPnKsSpmBeY4Es


/*import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oqrjzrryzcsbxspahcrl.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)*/