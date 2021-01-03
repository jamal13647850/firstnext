import Footer from "./Footer"
import Header from "./Header"




export default ({children})=> {
    return(
        <div>
            <Header/>
            {children}
            <Footer/>

        </div>
    )
}