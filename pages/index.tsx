import useContract from "../components/hooks/useContract";
import useEth from "../components/hooks/useEth";
import Button from "../components/ui/Button";
import SimplePageBlock from "../components/ui/SimplePageBlock";
// import TMPToken from "../abis/TMPToken.sol/TMPToken.json";

export default function Home() {
  const { ethersProvider, currentAddr } = useEth();
  const { createContract } = useContract(ethersProvider);
  // const TMPTOKEN_ADDR = '0x5fbdb2315678afecb367f032d93f642f64180aa3';
 
  return (
    <div className="mt-20">
      <SimplePageBlock>
        <div className="flex justify-between">
          <div>
            coming soon...
          </div>
          <div>
            <Button
              clickAction={ async() => {
                console.log('connecting to contract');
                // const tmpToken = await createContract(TMPTOKEN_ADDR, TMPToken.abi);
                // const balance = await tmpToken.balanceOf(currentAddr);
                // console.log('balance:', balance.toString());
              }}
            >
              connect to test contract
            </Button>
          </div>
        </div>
      </SimplePageBlock>
    </div>
  );
}



