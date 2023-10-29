<template>
  <form onsubmit="RequestProcess(event);">
    <input id="process-number">
    <select id="options-api"></select>
    <button>Pesquisar</button>
  </form>
  <div>
    <table width="100%" id="header-process" border="1">
        <tr>
          <td><strong>Corte</strong></td>
          <td><strong>Orgão</strong></td>
          <td><strong>Última atualização</strong></td>
        </tr>
    </table>

    <table width="100%" id="logs-list"  border="1">
      <tr>
        <td><strong>#</strong></td>
        <td><strong>Descrição</strong></td>
        <td><strong>Horário</strong></td>
        <td><strong>Descrição</strong></td>
      </tr>
    </table>
  </div>
</template>

<script>
const api_key = 'cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==';

const endpoints = [
  {
    description: 'Tribunais Superiores',
    opts: [
      { description: 'Tribunal Superior do Trabalho', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tst/_search' },
      { description: 'Tribunal Superior Eleitoral', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tse/_search' },
      { description: 'Tribunal Superior de Justiça', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_stj/_search' },
      { description: 'Tribunal Superior Militar', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_stm/_search' },
    ]
  }, {
    description: 'Justiça Federal',
    opts: [
      { description: 'Tribunal Regional Federal da 1ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf1/_search' },
      { description: 'Tribunal Regional Federal da 2ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf2/_search' },
      { description: 'Tribunal Regional Federal da 3ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf3/_search' },
      { description: 'Tribunal Regional Federal da 4ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf4/_search' },
      { description: 'Tribunal Regional Federal da 5ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf5/_search' },
      { description: 'Tribunal Regional Federal da 6ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trf6/_search' },
    ]
  }, {
    description: 'Justiça Estadual',
    opts: [
      { description: 'Tribunal de Justiça do Acre', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjac/_search' },
      { description: 'Tribunal de Justiça de Alagoas', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjal/_search' },
      { description: 'Tribunal de Justiça do Amazonas', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjam/_search' },
      { description: 'Tribunal de Justiça do Amapá', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjap/_search' },
      { description: 'Tribunal de Justiça da Bahia', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjba/_search' },
      { description: 'Tribunal de Justiça do Ceará', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjce/_search' },
      { description: 'TJ do Distrito Federal e Territórios', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjdft/_search' },
      { description: 'Tribunal de Justiça do Espírito Santo', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjes/_search' },
      { description: 'Tribunal de Justiça do Goiás', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjgo/_search' },
      { description: 'Tribunal de Justiça do Maranhão', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjma/_search' },
      { description: 'Tribunal de Justiça de Minas Gerais', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmg/_search' },
      { description: 'TJ do Mato Grosso de Sul', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjms/_search' },
      { description: 'Tribunal de Justiça do Mato Grosso', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmt/_search' },
      { description: 'Tribunal de Justiça do Pará', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpa/_search' },
      { description: 'Tribunal de Justiça da Paraíba', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpb/_search' },
      { description: 'Tribunal de Justiça de Pernambuco', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpe/_search' },
      { description: 'Tribunal de Justiça do Piauí', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpi/_search' },
      { description: 'Tribunal de Justiça do Paraná', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjpr/_search' },
      { description: 'Tribunal de Justiça do Rio de Janeiro', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjrj/_search' },
      { description: 'TJ do Rio Grande do Norte', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjrn/_search' },
      { description: 'Tribunal de Justiça de Rondônia', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjro/_search' },
      { description: 'Tribunal de Justiça de Roraima', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjrr/_search' },
      { description: 'Tribunal de Justiça do Rio Grande do Sul', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjrs/_search' },
      { description: 'Tribunal de Justiça de Santa Catarina', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjsc/_search' },
      { description: 'Tribunal de Justiça de Sergipe', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjse/_search' },
      { description: 'Tribunal de Justiça de São Paulo', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjsp/_search' },
      { description: 'Tribunal de Justiça do Tocantins', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjto/_search' },
    ]
  }, {
    description: 'Justiça do Trabalho',
    opts: [
      { description: 'Tribunal Regional do Trabalho da 1ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt1/_search' },
      { description: 'Tribunal Regional do Trabalho da 2ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt2/_search' },
      { description: 'Tribunal Regional do Trabalho da 3ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt3/_search' },
      { description: 'Tribunal Regional do Trabalho da 4ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt4/_search' },
      { description: 'Tribunal Regional do Trabalho da 5ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt5/_search' },
      { description: 'Tribunal Regional do Trabalho da 6ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt6/_search' },
      { description: 'Tribunal Regional do Trabalho da 7ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt7/_search' },
      { description: 'Tribunal Regional do Trabalho da 8ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt8/_search' },
      { description: 'Tribunal Regional do Trabalho da 9ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt9/_search' },
      { description: 'Tribunal Regional do Trabalho da 10ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt10/_search' },
      { description: 'Tribunal Regional do Trabalho da 11ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt11/_search' },
      { description: 'Tribunal Regional do Trabalho da 12ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt12/_search' },
      { description: 'Tribunal Regional do Trabalho da 13ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt13/_search' },
      { description: 'Tribunal Regional do Trabalho da 14ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt14/_search' },
      { description: 'Tribunal Regional do Trabalho da 15ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt15/_search' },
      { description: 'Tribunal Regional do Trabalho da 16ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt16/_search' },
      { description: 'Tribunal Regional do Trabalho da 17ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt17/_search' },
      { description: 'Tribunal Regional do Trabalho da 18ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt18/_search' },
      { description: 'Tribunal Regional do Trabalho da 19ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt19/_search' },
      { description: 'Tribunal Regional do Trabalho da 20ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt20/_search' },
      { description: 'Tribunal Regional do Trabalho da 21ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt21/_search' },
      { description: 'Tribunal Regional do Trabalho da 22ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt22/_search' },
      { description: 'Tribunal Regional do Trabalho da 23ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt23/_search' },
      { description: 'Tribunal Regional do Trabalho da 24ª Região', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_trt24/_search' },
    ]
  }, {
    description: 'Justiça Eleitoral',
    opts: [
      { description: 'Tribunal Regional Eleitoral do Acre', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ac/_search' },
      { description: 'Tribunal Regional Eleitoral de Alagoas', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-al/_search' },
      { description: 'Tribunal Regional Eleitoral do Amazonas', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-am/_search' },
      { description: 'Tribunal Regional Eleitoral do Amapá', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ap/_search' },
      { description: 'Tribunal de Justiça da Bahia', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ba/_search' },
      { description: 'Tribunal Regional Eleitoral do Ceará', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ce/_search' },
      { description: 'TJ do Distrito Federal e Territórios', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-dft/_search' },
      { description: 'Tribunal Regional Eleitoral do Espírito Santo', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-es/_search' },
      { description: 'Tribunal Regional Eleitoral do Goiás', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-go/_search' },
      { description: 'Tribunal Regional Eleitoral do Maranhão', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ma/_search' },
      { description: 'Tribunal Regional Eleitoral de Minas Gerais', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-mg/_search' },
      { description: 'TJ do Mato Grosso de Sul', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ms/_search' },
      { description: 'Tribunal Regional Eleitoral do Mato Grosso', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-mt/_search' },
      { description: 'Tribunal Regional Eleitoral do Pará', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-pa/_search' },
      { description: 'Tribunal Regional Eleitoral da Paraíba', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-pb/_search' },
      { description: 'Tribunal Regional Eleitoral de Pernambuco', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-pe/_search' },
      { description: 'Tribunal Regional Eleitoral do Piauí', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-pi/_search' },
      { description: 'Tribunal Regional Eleitoral do Paraná', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-pr/_search' },
      { description: 'Tribunal Regional Eleitoral do Rio de Janeiro', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-rj/_search' },
      { description: 'TJ do Rio Grande do Norte', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-rn/_search' },
      { description: 'Tribunal Regional Eleitoral de Rondônia', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-ro/_search' },
      { description: 'Tribunal Regional Eleitoral de Roraima', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-rr/_search' },
      { description: 'Tribunal Regional Eleitoral do Rio Grande do Sul', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-rs/_search' },
      { description: 'Tribunal Regional Eleitoral de Santa Catarina', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-sc/_search' },
      { description: 'Tribunal Regional Eleitoral de Sergipe', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-se/_search' },
      { description: 'Tribunal Regional Eleitoral de São Paulo', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-sp/_search' },
      { description: 'Tribunal Regional Eleitoral do Tocantins', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tre-to/_search' },
    ]
  }, {
    description: 'Justiça Militar',
    opts: [
      { description: 'Tribunal Justiça Militar de Minas Gerais', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmmg/_search' },
      { description: 'Tribunal Justiça Militar do Rio Grande do Sul', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmrs/_search' },
      { description: 'Tribunal Justiça Militar de São Paulo', url: 'https://api-publica.datajud.cnj.jus.br/api_publica_tjmsp/_search' },
    ]
  }
];

const RenderOptions = () => {
  const select = document.querySelector('#options-api');

  endpoints.forEach((court, i) => {
    let optgroup = document.createElement('optgroup');
    optgroup.label = court.description;

    court.opts.forEach((subcourt, j) => {
      let option = document.createElement('option');
      option.value = `${i},${j}`;
      option.text = subcourt.description;
      optgroup.append(option);
    });

    select.appendChild(optgroup);
  });
}

const RenderLogs = (data) => {
  const root = data.hits;
  const hit = root.hits[root.total.value - 1];

  const header_process = document.querySelector('#header-process');
  const logs_list = document.querySelector('#logs-list');

  const process_type = hit._source.classe.nome;
  const judge = hit._source.orgaoJulgador.nome;
  const time_last_update = new Date(hit._source.dataHoraUltimaAtualizacao);
  const formatted_time_last_update = `${time_last_update.getDate()}/${time_last_update.getMonth() + 1}/${time_last_update.getFullYear()} às ${time_last_update.getHours()}:${time_last_update.getMinutes()}`;

  header_process.innerHTML += `
      <tr>
        <td>${process_type}</td>
        <td>${judge}</td>
        <td>${formatted_time_last_update}</td>
      </tr>
    `;

  hit._source.movimentos.forEach((log, index) => {
    let row_log = '';
    let complement_log = '';

    let time_last_comment = new Date(log.dataHora);
    let formmated_time_last_comment = `${time_last_comment.getDate()}/${time_last_comment.getMonth() + 1}/${time_last_comment.getFullYear()} às ${time_last_comment.getHours()}:${time_last_comment.getMinutes()}`;

    row_log += `<td>${index}</td>`;
    row_log += `<td>${log.nome}</td>`;
    row_log += `<td>${formmated_time_last_comment}</td>`;

    if (log.complementosTabelados) {
      log.complementosTabelados.forEach(complement => {
        complement_log += `<p>${complement.nome}<br>${complement.descricao}</p>`;
      });
    }

    row_log += `<td>${complement_log || 'Nenhuma'}</td>`;

    logs_list.innerHTML += `<tr>${row_log}</tr>`;
  });
}

const RequestProcess = async (event) => {
  try {
    event.preventDefault();

    const options_api = document.querySelector('#options-api');
    const process_number = document.querySelector('#process-number');

    const [court, subcourt] = options_api.value.split(',');

    const url = endpoints[court].opts[subcourt].url;

    const headers = new Headers();
    headers.append('Authorization', `APIKey ${api_key}`);
    headers.append('Content-Type', 'application/json');

    const options = {
      method: 'POST',
      headers: headers,
      mode: 'cors',
      cache: 'default',
    };

    options.body = JSON.stringify(
      {
        'query': {
          'match': {
            'numeroProcesso': process_number.value
          }
        }
      }
    );

    const request = await fetch(url, options);
    const response = request.json();

    response.then(data => RenderLogs(data));
  } catch (error) {
    console.error(error.message);
  }
}

export default {
  name: 'ProcessList',
  data() {
    return {}
  }
}
</script>
