export default {
  description: 'Tribunais Superiores',
  opts: [
    {
      description: 'Tribunal Superior do Trabalho',
      url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tst/_search'
    },
    {
      description: 'Tribunal Superior Eleitoral',
      url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tse/_search'
    },
    {
      description: 'Tribunal Superior de Justiça',
      url: 'https://api-publica.datajud.cnj.jus.br/api_publica_stj/_search'
    },
    {
      description: 'Tribunal Superior Militar',
      url: 'https://api-publica.datajud.cnj.jus.br/api_publica_stm/_search'
    }
  ]
}