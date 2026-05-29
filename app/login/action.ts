'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    redirect('/login?message=Invalid credentials')
  }

  // Clear cache and route to the protected vault
  revalidatePath('/', 'layout')
  redirect('/userjourney')
}
// app/login/actions.ts (Update the signup function)



export async function signup(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  // 1. Validate matching passwords on the server
  if (password !== confirmPassword) {
    redirect('/signup?message=Passwords do not match')
  }

  // 2. Execute Supabase Auth creation
  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    // 3. Pass the exact Supabase error back to the UI
    redirect(`/signup?message=${error.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/userjourney')
}


// Add this to app/login/actions.ts
export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  
  // Clear the cache and kick them back to the homepage
  revalidatePath('/', 'layout')
  redirect('/')
}