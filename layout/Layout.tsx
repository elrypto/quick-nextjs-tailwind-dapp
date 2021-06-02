/* eslint-disable jsx-a11y/control-has-associated-label */
import Header from './Header'
import { Footer } from './Footer';


export const Layout = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {

  return (
    <div className="relative">
      <Header />
      <div className="flex justify-center h-screen">
        <div className="w-full max-w-3xl">
          {children}
        </div>
      </div>
      <Footer />
    </div >
  )
}
