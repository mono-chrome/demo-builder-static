import Layout from '../components/layout';
import '../styling/style.css';

export default function Application({ Component, pageProps } : any) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  );
}