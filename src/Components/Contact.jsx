import Input from "./Input"
import Button from "./Button"

const Contact = () => {
    return (
        <section className="contact">
            <h1>Contact Us</h1>

            <div className="contact-form">
                <Input type="text" placeholder="Enter Name" />

                <Input
                    type="email"
                    placeholder="Enter Email"
                />

                <Input
                    type="text"
                    placeholder="Enter Subject"
                />

                <Button title="Submit" />
            </div>
        </section>
    )
}

export default Contact