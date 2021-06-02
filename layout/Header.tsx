import Link from 'next/link';
import useEth from '../components/hooks/useEth';
import { currentAddrAtom } from '../recoil/atoms';
import { useRecoilState } from 'recoil';
import { formatAddr } from '../util/format';
import Button from '../components/ui/Button';

const Header = () => {
  const { requestAccount, getEthAddr, ethNetwork } = useEth();
  const [currentAddr, setCurrentAddr] = useRecoilState(currentAddrAtom);



  return (
    <header className="top-0 z-20 bg-white shadow-md">
      <div className="flex justify-between mx-2">
          <div>
            <Link
              href='/'
            >
              {/*
                <a className='inline-flex'>{}
                  <img className="object-cover" src='logo.png' alt="logo" width="65" />
                  <span className="pt-1 font-medium text-gray-700 cursor-pointer hover:text-gray-500">{' '}</span>
                </a>
              */}
                <a className='inline-flex'>
                  <span className="pt-4 ml-2 font-medium cursor-pointer text-cray-300 hover:text-gray-300">logo</span>
                </a>

            </Link>
          </div>

      <div>
        <div className="flex my-3 space-x-2 text-cray-500">
            <div className="mt-2 text-xs">
              [{ethNetwork ? ethNetwork : '--'}]
            </div>
            <div className="mt-2 text-xs">
              <a
                href='#'
                className="hover:underline"
                onClick={async () => {
                  try {
                    if (currentAddr) await navigator.clipboard.writeText(currentAddr);
                  } catch (e) {
                    console.error(e);
                  }
                }}
              >
                {currentAddr ? formatAddr(currentAddr) : ''}
              </a>
            </div>
            <div>
              <Button
                clickAction={async (evt) => {
                  console.log('request wallet address');
                  await requestAccount();
                  const addr = await getEthAddr();
                  console.log('addr:', addr);
                  setCurrentAddr(addr);
                }}
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
        </div>
    </header>
  )
}

export default Header;



const HeaderLink = ({ text, href }) => (
  <div className="flex mx-6 text-xs">
    <Link
      href={href}
    >
      <a className='inline-flex'>
        <div className="pt-2 mx-2 mb-1 font-medium text-gray-700 cursor-pointer sm:mx-6 sm:text-sm hover:text-gray-500">
          {text}
        </div>
      </a>
    </Link>
  </div>
)