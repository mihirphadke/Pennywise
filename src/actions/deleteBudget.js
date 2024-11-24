/* react-router-dom imports */
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

/* helpers */
import { deleteItemById, getAllMatchingItems } from "../helpers";

export function deleteBudget({ params }) {
    try {
        deleteItemById({
            key: "budgets",
            id: params.id,
        })

        const associatedExpenses = getAllMatchingItems({
            category: "expenses",
            key: "budgetId",
            value: params.id
        });

        associatedExpenses.forEach((expense) => {
            deleteItemById({
                key: "expenses",
                id: expense.id,
            });
        });

        toast.success("Budget deleted.");
    } catch (e) {
        throw new Error("There was a problem deleting your budget.");
    }
    return redirect("/");
}
