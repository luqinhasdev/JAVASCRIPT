class Banco {
  constructor(nome, agencia) {
    this._nome = nome;
    this._agencia = agencia;
    this._clientes = [];
    this._contas = [];
  }

  adicionarCliente(cliente) {
    this._clientes.push(cliente);
  }

  adicionarConta(conta) {
    this._contas.push(conta);
  }

  verificarConta(conta) {
    return this._contas.includes(conta);
  }

  verificarCliente(cliente) {
    return this._clientes.includes(cliente);
  }
}
// ~
export default Banco;
