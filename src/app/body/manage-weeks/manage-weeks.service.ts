
import { Subject } from "rxjs/Subject";

export class WeekService {
    
    incomesChanged = new Subject();

    private incomes = [
        {
            name: "car",
            value: 1200,
            description: "Description",
            id: 0,
            type: "income"
        },
        {
            name: "car",
            value: 1200,
            description: "Description",
            id: 1,
            type: "income"
        }
    ]
    private outcomes = [
        {
            name: "car",
            value: 1200,
            description: "Biały samochód Karoliny",
            id: 0,
            type: "outcome"
        },
        {
            name: "car",
            value: 1200,
            description: "Desc",
            id: 1,
            type: "outcome"
        }
  ]

  getIncomes() {
      return Promise.resolve([...this.incomes]);
  }

  getOutcomes(){
      return Promise.resolve([...this.outcomes]);
  }

  addIncome(income){
    income.id = this.incomes.length
    this.incomes.push(income)
  }

  addOutcome(outcome){
    outcome.id = this.outcomes.length
    this.outcomes.push(outcome)
  }

  deleteIncome(id){
    this.incomes = this.incomes.filter(item => id !== item.id)
  }

  deleteOutcome(id){
    this.outcomes = this.outcomes.filter(item => id !== item.id)
  }
}