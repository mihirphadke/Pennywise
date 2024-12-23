/* react-router-dom imports */
import { Form, NavLink } from "react-router-dom";

/* library imports */
import { TrashIcon } from "@heroicons/react/16/solid";

/* assets */
import logomark from "../assets/logomark.svg";

const Nav = ({ userName }) => {
    return (
        <nav>
            <NavLink
                to="/"
                aria-label="Go to homepage"
            >
                <img src={logomark} alt="" height={30}/>
                <span>Pennywise.</span>
            </NavLink>
            {
                userName && (
                    <Form
                        method="post"
                        action="/logout"
                        onSubmit={(event) => {
                            if (!confirm("Are you sure you want to logout?")) {
                                event.preventDefault();
                            }
                        }
                    }
                    >
                        <button type="submit" className="btn btn--warning">
                            <span>Logout</span>
                            <TrashIcon width={20} />
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}
export default Nav;
