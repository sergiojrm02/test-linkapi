import Parser from 'xml2js';

export default class item {
    constructor(data) {
        this.data = data;
    }

    async xmlModel() {
        const builder = new Parser.Builder();
        const arrayXml = [];

        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve) => {
            // eslint-disable-next-line no-restricted-syntax
            for await (const obj of this.data) {
                const {
                    // eslint-disable-next-line camelcase
                    official_document, title, value, won_time,
                } = obj;
                const xmlobj = {
                    pedido: {
                        cliente: {
                            nome: title,
                            tipoPessoa: 'J',
                            endereco: 'Rua Jardim Morumbi',
                            cpf_cnpj: official_document,
                            ie_rg: '3067663000',
                            numero: '123',
                            complemento: 'Sala 54',
                            bairro: 'Parque das Aguas',
                            cep: '18.700-000',
                            cidade: 'Sorocaba',
                            uf: 'SP',
                            fone: '5481153376',
                            email: 'testelinkapi@mailinator.com',
                        },
                        transporte: {
                            transportadora: 'Transportadora Lupi',
                            tipo_frete: 'R',
                            servico_correios: 'SEDEX - CONTRATO',
                            dados_etiqueta: {
                                nome: 'Endereço de entrega',
                                endereco: 'Rua Jardim Morumbi',
                                numero: '123',
                                complemento: 'Sala 59',
                                municipio: 'Sorocaba',
                                uf: 'SP',
                                cep: '18.700-000',
                                bairro: 'Parque das Aguas',
                            },
                            volumes: {
                                volumes: [
                                    {
                                        servico: 'SEDEX - CONTRATO',
                                        codigoRastreamento: '',
                                    },
                                    {
                                        servico: 'PAC - CONTRATO',
                                        codigoRastreamento: '',
                                    },
                                ],
                            },
                        },
                        itens: {
                            item: [
                                {
                                    codigo: '001',
                                    descricao: 'Livro Portugues',
                                    un: 'Un',
                                    qtde: '1',
                                    vlr_unit: '200,25',
                                },
                                {
                                    codigo: '002',
                                    descricao: 'Livro Matematica',
                                    un: 'Un',
                                    qtde: '1',
                                    vlr_unit: '300.75',
                                },
                                {
                                    codigo: '003',
                                    descricao: 'Livro Historia',
                                    un: 'Un',
                                    qtde: '1',
                                    vlr_unit: '180.50',
                                },
                            ],
                        },
                        parcelas: {
                            parcela: [
                                {
                                    data: won_time,
                                    vlr: value,
                                    obs: 'Teste obs 1',
                                },

                            ],
                        },
                        vlr_frete: '15,00',
                        vlr_desconto: '10,00',
                        obs: 'Testando o campo observações do pedido',
                        obs_internas: 'Testando o campo observações internas do pedido',
                    },
                };
                const xmldata = builder.buildObject(xmlobj);
                arrayXml.push(encodeURI(xmldata));
            }
            resolve(arrayXml);
        });
    }
}