import IddyClient from './iddyClient'
import Authentication from './authentication'

interface IIddyClientOptions {
    domain: string
}

const createIddyClient = async (options: IIddyClientOptions) => {
    console.log('test = createIddyClient')
    const iddyClient = new IddyClient(options)
    return iddyClient
}

const functionA = () => {
    console.log('functionA - OK 3')
}

const functionB = () => {
    console.log('functionB - OK 3')
}

export { createIddyClient, functionA, functionB, Authentication }
