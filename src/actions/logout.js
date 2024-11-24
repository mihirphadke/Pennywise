/* react-router-dom imports */
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

/* helpers */
import { deleteItem } from "../helpers";

export async function logoutAction() {
    deleteItem({
        key: "userName"
    });
    deleteItem({
        key: "budgets"
    });
    deleteItem({
        key: "expenses"
    });
    toast.success("You have deleted your account.");
    return redirect("/");
};
