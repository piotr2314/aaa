module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Możesz również użyć 'http', jeśli chcesz zezwolić na obrazy z HTTP
        hostname: '**', // Dopuszcza wszystkie domeny
      },
    ],
  },
}
