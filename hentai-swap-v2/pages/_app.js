import '@/styles/globals.css'

// Importing nav bar from component
import { NavBar } from '@/Components';

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NavBar />
    <Component {...pageProps} />
  </div>
);

export default MyApp;