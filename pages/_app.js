import '@styles/globals.css'
import Maincontainer from '../components/maincontainer'
function Application({ Component, pageProps }) {
  return (
    <Maincontainer>
      <Component {...pageProps} />
    </Maincontainer>
  )
}

export default Application
