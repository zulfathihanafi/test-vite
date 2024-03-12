import supabase from "../supabaseClient"

const register = async (email, password) => {


    
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

      console.log(data, error)
}

const login = async(email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  console.log(data, error)
}

const logout = async()  => {
  await supabase.auth.signOut()
}

export {register,login, logout}