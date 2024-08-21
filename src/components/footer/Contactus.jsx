
const Contactus = (Contactus) => {
    return (
        <div>
            <div>
                <form action="submit">
                    <input type="text" placeholder="enter name" />
                    <input type="email" placeholder="Enter your email" />
                    <textarea name="Massage" id="Submit" placeholder="Enter masssage here"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contactus;