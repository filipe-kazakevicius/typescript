"use strict";
var empresa;
(function (empresa) {
    var Empresa = /** @class */ (function () {
        function Empresa() {
            this.clientes = [];
            this.funcionarios = [];
        }
        Empresa.prototype.getNomeEmpresa = function () {
            return this.nomeEmpresa;
        };
        Empresa.prototype.setNomeEmpresa = function (nome) {
            this.nomeEmpresa = nome;
        };
        Empresa.prototype.getAtividade = function () {
            return this.atividade;
        };
        Empresa.prototype.setAtividade = function (atividade) {
            this.atividade = atividade;
        };
        Empresa.prototype.getCidade = function () {
            return this.cidade;
        };
        Empresa.prototype.setCidade = function (cidade) {
            this.cidade = cidade;
        };
        Empresa.prototype.addCliente = function (cliente) {
            this.clientes.push(cliente);
        };
        Empresa.prototype.addFuncionario = function (funcionario) {
            this.funcionarios.push(funcionario);
        };
        Empresa.prototype.getCliente = function () {
            return this.clientes;
        };
        Empresa.prototype.getFuncionario = function () {
            return this.funcionarios;
        };
        return Empresa;
    }());
    empresa.Empresa = Empresa;
})(empresa || (empresa = {}));
