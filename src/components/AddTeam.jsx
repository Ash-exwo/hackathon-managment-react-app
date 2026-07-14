import React, { useState } from 'react'
import axios from 'axios'

const AddTeam = () => {

    const [input, changeInput] = useState(
        {
            teamId: "",
            teamName: "",
            teamLeader: "",
            leaderEmail: "",
            leaderPhone: "",
            collegeName: "",
            numOfMembers: "",
            projectTitle: "",
            projectStatementTrack: "",
            technologyStack: "",
            mentorName: "",
            registrationDate: "",
            tableNumber: ""
        }
    )

    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:5000/add-team", input).then(
            (response) => {
                console.log(response.data)
                alert("Team details added successfully")
            }
        ).catch(
            (error) => {
                console.log(error)
                alert("Failed to add team details")
            }
        )
    }

    return (
        <div
            style={{
                background: "linear-gradient(135deg, #F0FDFA 0%, #F8FAFC 50%, #EEF2FF 100%)",
                minHeight: "100vh"
            }}
        >
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-11">

                        <div
                            className="card border-0 shadow-lg overflow-hidden"
                            style={{
                                borderRadius: "28px"
                            }}
                        >
                            <div
                                className="text-center p-4 p-md-5"
                                style={{
                                    background: "linear-gradient(135deg, #0F172A, #134E4A)",
                                    color: "#FFFFFF"
                                }}
                            >
                                <div
                                    className="d-inline-flex align-items-center justify-content-center mb-3"
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "18px",
                                        backgroundColor: "rgba(255,255,255,0.12)",
                                        fontSize: "28px"
                                    }}
                                >
                                    👥
                                </div>

                                <h2
                                    className="fw-bold mb-2"
                                    style={{ letterSpacing: "2px" }}
                                >
                                    ADD TEAM DETAILS
                                </h2>

                                <p
                                    className="mb-0"
                                    style={{ color: "#CCFBF1" }}
                                >
                                    Register your team and project information
                                </p>
                            </div>

                            <div className="p-4 p-md-5">

                                <h5
                                    className="fw-bold mb-4 pb-2"
                                    style={{
                                        color: "#0F766E",
                                        borderBottom: "2px solid #CCFBF1"
                                    }}
                                >
                                    Team Information
                                </h5>

                                <div className="row g-4">

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Team ID
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="teamId"
                                            value={input.teamId}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Team Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="teamName"
                                            value={input.teamName}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Team Leader
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="teamLeader"
                                            value={input.teamLeader}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Leader Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="leaderEmail"
                                            placeholder="example@gmail.com"
                                            value={input.leaderEmail}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Leader Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="leaderPhone"
                                            value={input.leaderPhone}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            College Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="collegeName"
                                            value={input.collegeName}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Number of Members
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="numOfMembers"
                                            value={input.numOfMembers}
                                            onChange={inputHandler}
                                            placeholder="Enter number of members"
                                        />
                                    </div>

                                    <div className="col-12 mt-5">
                                        <h5
                                            className="fw-bold mb-3 pb-2"
                                            style={{
                                                color: "#0F766E",
                                                borderBottom: "2px solid #CCFBF1"
                                            }}
                                        >
                                            Project Information
                                        </h5>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Project Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="projectTitle"
                                            value={input.projectTitle}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Project Statement Track
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="projectStatementTrack"
                                            value={input.projectStatementTrack}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Technology Stack
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="technologyStack"
                                            value={input.technologyStack}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Mentor Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="mentorName"
                                            value={input.mentorName}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Registration Date
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="registrationDate"
                                            value={input.registrationDate}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Table Number
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control form-control-lg"
                                            style={{ borderRadius: "12px" }}
                                            name="tableNumber"
                                            value={input.tableNumber}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col-12 text-center mt-5">
                                        <button
                                            className="btn px-5 py-3 fw-bold shadow"
                                            onClick={readValue}
                                            style={{
                                                background: "linear-gradient(135deg, #0F766E, #14B8A6)",
                                                color: "#FFFFFF",
                                                borderRadius: "14px",
                                                border: "none",
                                                letterSpacing: "1px",
                                                minWidth: "240px"
                                            }}
                                        >
                                            ADD TEAM DETAILS
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTeam