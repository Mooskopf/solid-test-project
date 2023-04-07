import Close from "../assets/close.svg"

export default function questModal(props) {

    function update(e) {
        e.preventDefault()
        const author = e.target.author.value
        const task = e.target.task.value
        if (props.edit) {
            props.update({ "task": task, "author": author })
        } else {
            props.update({ "task": task, "author": author })
        }
        close()
    }

    function close() {
        props.close(true)
    }

    return (
        <div class="modal">
            <div class="modal-content">
                <div className="close-container" onClick={close}>
                    <img src={Close} alt="Close" />
                </div>
                <form onSubmit={update}>
                    <div>
                        <label>
                            <div class="input-text">Quest Giver:</div>
                            <input value={props.edit ? props.author : ""} required type="text" name="author" />
                        </label>
                    </div>
                    <div>
                        <label>
                            <div class="input-text">Task:</div>
                            <textarea value={props.edit ? props.task : ""} required type="text" name="task" />
                        </label>
                    </div>
                    <button class="btn" type="submit">{props.edit ? "Edit Quest" : "Add Quest"}</button>
                </form>
            </div>
        </div>
    )
}