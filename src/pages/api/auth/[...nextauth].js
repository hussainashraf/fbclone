import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'

export default NextAuth({
  providers: [
    // OAuth authentication providers...s
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    })
  ]
})