import { injected } from "../components/wallet/connectors"

import { useWeb3React } from "@web3-react/core"


export default function Home() {

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }


  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div>
      <button onClick={connect} className="btn">Connect to MetaMask</button>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      <button onClick={disconnect} className="btn">Disconnect MetaMask</button>
    </div>
  )
}
