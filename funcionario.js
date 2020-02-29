"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var empresa;
(function (empresa) {
    var Funcionario = /** @class */ (function (_super) {
        __extends(Funcionario, _super);
        function Funcionario() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Funcionario.prototype.getCodFuncionario = function () {
            return this.codFuncionario;
        };
        Funcionario.prototype.setCodFuncionario = function (cod) {
            this.codFuncionario = cod;
        };
        Funcionario.prototype.getValorDia = function () {
            return this.valorDia;
        };
        Funcionario.prototype.setValorDia = function (valor) {
            this.valorDia = valor;
        };
        Funcionario.prototype.calcularSalario = function (desconto) {
            if (desconto == undefined) {
                return (this.valorDia * 30);
            }
            else {
                return (this.valorDia * 30) - desconto;
            }
        };
        return Funcionario;
    }(empresa.Pessoa));
    empresa.Funcionario = Funcionario;
})(empresa || (empresa = {}));
