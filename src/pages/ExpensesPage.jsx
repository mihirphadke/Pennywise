/* helpers */
import { deleteItemById, fetchData } from "../helpers";

/* components */
import Table from "../components/Table";

/* react-router-dom imports */
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

/* loader */
export async function expensesLoader() {
    const expenses = fetchData("expenses");
    return { expenses };
}

/* actions */
export async function expensesAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);

    if (_action === "deleteExpense") {
        try {
            deleteItemById({
                key: "expenses",
                id: values.expenseId
            });
            return toast.success("Expense deleted.");
        } catch (e) {
            throw new Error("There was a problem deleting your expense.");
        }
    }
}

const ExpensesPage = () => {
    const { expenses } = useLoaderData();

    return (
        <div className="grid-lg">
            <h1>All Expenses</h1>
            {
                expenses && expenses.length > 0 ? (
                    <div className="grid-md">
                        <h2>Recent Expenses <small>({expenses.length} total)</small></h2>
                        <Table expenses={expenses} />
                    </div>
                ) : (
                    <p>No expenses to show.</p>
                )
            }
        </div>
    );
};

export default ExpensesPage;
