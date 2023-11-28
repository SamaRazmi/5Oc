class BankAccount {
    constructor(accountHolderName, balance) {
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `Deposited $${amount}. Current balance: $${this.balance}`;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return `Withdrawn $${amount}. Current balance: $${this.balance}`;
        } else {
            return "Insufficient funds. Withdrawal denied.";
        }
    }

    getBalance() {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountHolderName, balance, minimumBalance) {
        super(accountHolderName, balance);
        this.minimumBalance = minimumBalance;
    }

    withdraw(amount) {
        if (this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
            return `Withdrawn $${amount}. Current balance: $${this.balance}`;
        } else {
            return `Withdrawal denied. Minimum balance requirement not met. Current balance: $${this.balance}`;
        }
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountHolderName, balance, overdraftLimit) {
        super(accountHolderName, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (this.balance - amount >= -this.overdraftLimit) {
            this.balance -= amount;
            return `Withdrawn $${amount}. Current balance: $${this.balance}`;
        } else {
            return `Withdrawal denied. Exceeds overdraft limit. Current balance: $${this.balance}`;
        }
    }
}

// Testing scenarios
const outputDiv = document.getElementById('output');

const savingsAccount = new SavingsAccount("John Doe", 1500, 500);
outputDiv.innerHTML += savingsAccount.deposit(300) + '<br>';
outputDiv.innerHTML += savingsAccount.withdraw(800) + '<br>';
outputDiv.innerHTML += savingsAccount.withdraw(200) + '<br>';

const checkingAccount = new CheckingAccount("Jane Smith", 500, 300);
outputDiv.innerHTML += checkingAccount.withdraw(600) + '<br>';
outputDiv.innerHTML += checkingAccount.withdraw(900) + '<br>';
outputDiv.innerHTML += checkingAccount.deposit(200) + '<br>';
