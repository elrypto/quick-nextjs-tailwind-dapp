import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { Layout } from '../layout/Layout';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';


const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head><title>quick dapp</title></Head>
      <div className="bg-gray-100 modal-container">
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecoilRoot>
        </QueryClientProvider>
      </div>
    </>
  )
}

export default MyApp;

