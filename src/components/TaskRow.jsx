const TaskRow = () =>{
    return(
        <div className="task-row">
                            <button className="task-check checked">✓</button>
                            <span className="task-title done">
                                Write API docs for /webhooks
                            </span>
                            <div className="estimate-stepper">
                                <button className="stepper-btn">−</button>
                                <span className="stepper-value">5</span>
                                <button className="stepper-btn">+</button>
                            </div>
                            <button className="quick-bump">+2</button>
                            <button className="icon-danger">✕</button>
                        </div>
    )
}
export default TaskRow