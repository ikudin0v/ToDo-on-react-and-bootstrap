import React, { useState } from "react";
// import reactDom from "react-dom";
import {createRoot} from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"

const root = createRoot(document.getElementById("root"))

const JournalAddComponent = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-journal-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
        </svg>)
}
const JournalRemoveComponent = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-journal-x" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708"/>
                <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
        </svg>)
}
const JournalDoneComponent = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-journal-check" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
        </svg>)
}
const JournalEditComponent = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
        </svg>)
}



const App = () => {
    let initialTaskList = []

    const [taskList, setCurrentTaskList] = useState(initialTaskList)
    // const [taskList, setCurrentTaskList] = useState(initialTaskList.filter(item => item.state == "current"))
    // const [doneTaskList, setDoneTaskList] = useState(initialTaskList.filter(item => item.state == "done"))

    function addTask() {
        if (document.getElementById("inputText").value != "") {
            let inputTaskId
            taskList.length === 0 ? inputTaskId = 0 : inputTaskId = taskList[taskList.length-1].taskId + 1
            setCurrentTaskList([...taskList, {
                                        taskId: inputTaskId,
                                        text: document.getElementById("inputText").value,
                                        state: "current"
                                    }])
            document.getElementById("inputText").value = ""
        }
    }

    function removeTask(id) {
        const newTaskList = taskList.filter(item => item.taskId != id)
        setCurrentTaskList(newTaskList)
    }

    function editTask(id) {
        if (document.getElementById("input"+id).disabled === true) {
            document.getElementById("input"+id).removeAttribute("disabled")
        } else {
            document.getElementById("input"+id).setAttribute("disabled", "disabled")
            let newTaskList = taskList.map(item => {
                if (item.taskId === id) {item.text = document.getElementById("input"+id).value}
            })
        }
    }

    function doneTask(id) {
        // console.log(taskList)
        // console.log(id)
        // const newTaskList = taskList.map(item => {if (item.taskId === id){item.state = "done"}
        taskList.map(item => {if (item.taskId === id){item.state = "done"}})
        setCurrentTaskList(taskList)
        // setCurrentTaskList(newTaskList)
        // console.log(newTaskList)
    }



    return (
    <div className="container-sm" style={{border: "red solid 1px"}}>


        <div>
            <h1 className="text-center">TO DO LIST</h1>
            <div className="input-group mb-3">
                <input type="text" id="inputText" className="form-control" placeholder="Add new task!"/>
                <button type="button" className="btn btn-primary" onClick={addTask}><JournalAddComponent /></button>
            </div>
        </div>
        <br />

        
        <div>
            <h3 className="text-center">{taskList.filter(item => item.state === "current").length == 0 ? "NO CURRENT TASKS" : "CURRENT TASKS"}</h3>
            <ul className="list-group">
                {taskList.filter(item => item.state === "current").map((task) => (
                    <li className="list-group-item" key={task.taskId}>
                        <div className="input-group mb-3">
                            <button type="button" className="btn btn-success" onClick={() => {doneTask(task.taskId)}}><JournalDoneComponent /></button>
                            <input type="text" id={"input"+task.taskId} className="form-control" placeholder={task.text} disabled/>
                            <button type="button" className="btn btn-warning" onClick={() => {editTask(task.taskId)}}><JournalEditComponent /></button>
                            <button type="button" className="btn btn-danger" onClick={() => {removeTask(task.taskId)}}><JournalRemoveComponent /></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        <br />

        <div>
        <h3 className="text-center">{taskList.filter(item => item.state === "done").length === 0 ? "NO COMPLETED TASKS" : "COMPLETED TASKS"}</h3>
        <ul className="list-group">
            {taskList.filter(item => item.state === "done").map((task) => (
                <li className="list-group-item" key={task.taskId}>
                    <div className="input-group mb-3">
                        <input type="text" id="CurrentID" className="form-control" placeholder={task.text} disabled/>
                        <button type="button" className="btn btn-danger" onClick={() => {removeTask(task.taskId)}}><JournalRemoveComponent /></button>
                    </div>
                </li>
            ))}
        </ul>
        </div>


    </div>
    )
}



root.render(<App  />);