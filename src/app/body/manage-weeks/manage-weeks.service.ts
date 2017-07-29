import { EventEmitter } from "@angular/core";

export class WeekService {
    
    incomesChanged = new EventEmitter();

    private incomes = [
        {
            name: "car",
            value: 1200,
            description: "Description",
            id: 0
        },
        {
            name: "car",
            value: 1200,
            description: "Descrwdwdiption",
            id: 1
        }
    ]
    private outcomes = [
        {
            name: "car",
            value: 1200,
            description: "Desdwededcription",
            id: 0
        },
        {
            name: "car",
            value: 1200,
            description: "Desc",
            id: 1
        }
  ]

  getIncomes() {
      return Promise.resolve([...this.incomes]);
  }

  getOutcomes(){
      return Promise.resolve([...this.outcomes]);
  }

  addIncome(income){
    income.id = this.incomes[this.incomes.length - 1].id + 1
    this.incomes.push(income)
    console.log(this.incomes)
  }

  addOutcome(outcome){
    outcome.id = this.outcomes[this.outcomes.length - 1].id + 1
    this.outcomes.push(outcome)
  }
}