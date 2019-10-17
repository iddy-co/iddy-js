interface clientOptions {
    domain: string
}

const userCacheKey = 'iddy.user'
const isAuthenticatedCacheKey = 'iddy.isAuthenticated'

export default class Authentication {
    domain: string

    constructor(clientOptions) {
        if (clientOptions.domain) {
            this.domain = `https://${clientOptions.domain}` || ''
        } else {
            this.domain = ''
        }
    }

    init = clientOptions => {
        if (clientOptions.domain) {
            this.domain = `https://${clientOptions.domain}` || ''
        } else {
            this.domain = ''
        }
    }

    getUser = async () => {
        let user = null // localStorage.getItem(userCacheKey)
        user = user ? JSON.parse(user) : null
        if (!user) {
            const response = await fetch(`${this.domain}/api/me`, { mode: 'cors', credentials: 'include' })
            if (response.ok) {
                user = await response.json()
                localStorage.setItem(userCacheKey, JSON.stringify(user))
                localStorage.setItem(isAuthenticatedCacheKey, 'true')
            } else {
                user = null
            }
        }
        return user
    }

    isAuthenticated = async () => {
        const user = await this.getUser()
        return !!user
    }

    loginWithRedirect = ({ redirectUri }) => {
        window.location.href = `${this.domain}/login?redirectUri=${encodeURIComponent(redirectUri)}`
    }

    logout = async ({ returnTo }) => {
        localStorage.removeItem(userCacheKey)
        localStorage.removeItem(isAuthenticatedCacheKey)
        const response = await fetch(`${this.domain}/api/logout`, { mode: 'cors', credentials: 'include' })
        const data = await response.json()
        window.location.href = returnTo
    }
}
