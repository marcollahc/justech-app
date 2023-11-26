import axios from 'axios'

export default {
  async getProcessByCourt(court, courtIdentifier, processNumber) {
    const baseUrl = `https://api-publica.datajud.cnj.jus.br/api_publica_${court}${courtIdentifier.acronym}/_search`
    const processNumberBody = JSON.stringify({
      query: {
        match: {
          numeroProcesso: processNumber
        }
      }
    })

    try {
      const response = await axios.post(baseUrl, processNumberBody, {
        headers: {
          Authorization: `APIKey ${import.meta.env.VITE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      })

      const extractedProcess = response.data.hits.hits
      console.log('extracted', extractedProcess)
      return Array.isArray(extractedProcess) && extractedProcess.length
        ? extractedProcess[0]._source
        : []
    } catch (error) {
      if (error.isAxiosError && error.response) {
        console.error('Request error: ', error.response.status)
        throw new Error('Request error!')
      } else {
        console.error('Error getting process data: ', error)
        throw new Error('Unable to obtain process!')
      }
    }
  }
}
