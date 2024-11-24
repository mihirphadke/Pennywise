/* react-router-dom imports */
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/20/solid";

/* assets */
import illustration from "../assets/illustration.png";

const Intro = () => {
    return (
        <div className="intro">
            <div>
                <h1>
                    Be wise about <span className="accent">your money.</span>
                </h1>
                <p>
                    Personal budgeting is the secret to financial wisdom. Start your journey today!
                </p>
                <Form method="post">
                    <input
                        type="text"
                        name="userName"
                        placeholder="What is your name?"
                        aria-label="Your Name"

                        required
                    />
                    <input
                        type="hidden"
                        name="_action"
                        value="newUser"

                    />
                <button type="submit" className="btn btn--dark">
                    <span>Create Account</span>
                    <UserPlusIcon width={20} />
                </button>
                </Form>
            </div>
            <img src={illustration} alt="Stonks" width={600} />
        </div>
    )
}
export default Intro;
