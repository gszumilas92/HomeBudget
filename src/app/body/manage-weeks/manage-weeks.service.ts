import { EventEmitter, Output } from "@angular/core";

export class WeekService {
    

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

  getIncomes(){
      return [...this.incomes];
  }

  getOutcomes(){
      return [...this.outcomes];
  }

  addIncome(income){
    income.id = this.incomes[this.incomes.length - 1].id + 1
    this.incomes.push(income)
  }

  addOutcome(outcome){
    outcome.id = this.outcomes[this.outcomes.length - 1].id + 1
    this.outcomes.push(outcome)
  }
}