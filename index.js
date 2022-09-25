"use strict";
// Реализовать класс RangeValidator. Обьекты, созданные им должны обладать следующими свойcтвами:
// from(число) 5
// to(число) 50

// Реализовать геттеры и сеттеры для обоих свойств.
// Реализовать getter range, который будет возвращать массив, состоящий из границ диапазона from и to.
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает это же число, если оно входит в диапазон. И кинет ошибку, если не входит.

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  get to() {
    return this._to;
  }

  set to(to) {
    this.validateDigit(to, 'to');
    this._to = to;
  }

  get from() {
    return this._from;
  }

  set from(from) {
    this.validateDigit(from, 'from');
    this._from = from;
  }

  validateDigit(digit, field) {
    if (typeof digit !== 'number') {
        throw new TypeError(`${field} is Not a number`);
    }
  }

  compareDigits() {
    return this._from < this._to || this._to > this._from;
  }

 
    getRange() {
      return [this.to, this.from];
    }
    
    validate(num) {
      if (num >= this.from && num <= this.to) {
        return num;
      } else {
        throw new RangeError("num out of range");
      }
    }
}

const range = new RangeValidator(50, 5);
