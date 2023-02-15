import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "./Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2020");
	const result = props.result;
	const filterChangedHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = result.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangedHandler}
				/>
				<ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
}

export default Expenses;
