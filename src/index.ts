import IddyClient from './iddyClient'
import Authentication from './authentication'

interface IIddyClientOptions {
    domain: string
}

const createIddyClient = async (options: IIddyClientOptions) => {
    const iddyClient = new IddyClient(options)
    return iddyClient
}

const functionA = () => {
    console.log('functionA - OK 3')
}

export { createIddyClient, functionA, Authentication }
export default IddyClient
