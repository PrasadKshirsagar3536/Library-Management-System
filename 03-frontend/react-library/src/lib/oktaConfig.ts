export const oktaConfig = {
    clientId: '0oab0k0wt8kWYMwfg5d7',
    issuer: 'https://dev-66317437.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}