
import { Subject } from "rxjs/Subject";

export class WeekService {
    
    incomesChanged = new Subject();

    private incomes = [
        {
            date: new Date(),
            name: "car",
            value: 1200,
            description: "Description",
            id: 0,
            type: "income"
        },
        {
            date: new Date(),
            name: "car",
            value: 1200,
            description: "Description",
            id: 1,
            type: "income"
        }
    ]
    private outcomes = [
        {
            date: new Date(),
            name: "car",
            value: 1200,
            description: "Biały samochód Karoliny",
            id: 0,
            type: "outcome"
        },
        {
            date: new Date(),
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
        income.date = new Date()
        income.id = this.incomes.length
        this.incomes.push(income)
    }

    addOutcome(outcome){
        outcome.date = new Date()
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