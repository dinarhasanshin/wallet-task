export default function ({store, redirect}) {
    if(!store.state.authUserData.access_token){
        return redirect("/auth/signIn")
    }
}