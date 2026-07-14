import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ViewTeam = () => {

    const [data, changeData] = useState([])

    const fetchTeamData = () => {
        axios.get("http://localhost:5000/view-team").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log("Error fetching team details")
                alert("Failed to view the team details")
            }
        )
    }

    useEffect(() => {
        fetchTeamData()
    }, [])

    return (
        <div
            style={{
                background: "linear-gradient(135deg, #F0FDFA 0%, #F8FAFC 50%, #EEF2FF 100%)",
                minHeight: "100vh"
            }}
        >

            <div className="container-fluid px-4 px-md-5 py-5">

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
                            style={{
                                letterSpacing: "2px"
                            }}
                        >
                            VIEW ALL TEAM DETAILS
                        </h2>

                        <p
                            className="mb-0"
                            style={{
                                color: "#CCFBF1"
                            }}
                        >
                            Explore all registered teams and project information
                        </p>
                    </div>

                    <div className="p-4 p-md-5">

                        <div
                            className="table-responsive"
                            style={{
                                borderRadius: "18px",
                                border: "1px solid #E2E8F0"
                            }}
                        >
                            <table
                                className="table table-hover align-middle text-center mb-0"
                                style={{
                                    minWidth: "1900px"
                                }}
                            >

                                <thead>
                                    <tr
                                        style={{
                                            backgroundColor: "#F0FDFA",
                                            color: "#0F766E"
                                        }}
                                    >
                                        <th className="px-4 py-4 text-nowrap">
                                            Team ID
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Team Name
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Team Leader
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Leader Email
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Leader Phone
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            College Name
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Members
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Project Title
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Project Track
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Technology Stack
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Mentor
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Registration Date
                                        </th>

                                        <th className="px-4 py-4 text-nowrap">
                                            Table Number
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        data.map(
                                            (value, index) => {
                                                return (
                                                    <tr key={index}>

                                                        <td className="px-4 py-4 fw-semibold text-nowrap">
                                                            {value.teamId}
                                                        </td>

                                                        <td
                                                            className="px-4 py-4 fw-bold text-nowrap"
                                                            style={{
                                                                color: "#0F766E"
                                                            }}
                                                        >
                                                            {value.teamName}
                                                        </td>

                                                        <td className="px-4 py-4 text-nowrap">
                                                            {value.teamLeader}
                                                        </td>

                                                        <td className="px-4 py-4 text-nowrap">
                                                            {value.leaderEmail}
                                                        </td>

                                                        <td className="px-4 py-4 text-nowrap">
                                                            {value.leaderPhone}
                                                        </td>

                                                        <td className="px-4 py-4">
                                                            {value.collegeName}
                                                        </td>

                                                        <td className="px-4 py-4">
                                                            <span
                                                                className="badge px-3 py-2"
                                                                style={{
                                                                    backgroundColor: "#CCFBF1",
                                                                    color: "#0F766E",
                                                                    borderRadius: "10px"
                                                                }}
                                                            >
                                                                {value.numOfMembers}
                                                            </span>
                                                        </td>

                                                        <td className="px-4 py-4">
                                                            {value.projectTitle}
                                                        </td>

                                                        <td className="px-4 py-4">
                                                            {value.projectStatementTrack}
                                                        </td>

                                                        <td className="px-4 py-4">
                                                            <span
                                                                className="badge px-3 py-2"
                                                                style={{
                                                                    backgroundColor: "#E0E7FF",
                                                                    color: "#3730A3",
                                                                    borderRadius: "10px"
                                                                }}
                                                            >
                                                                {value.technologyStack}
                                                            </span>
                                                        </td>

                                                        <td className="px-4 py-4 text-nowrap">
                                                            {value.mentorName}
                                                        </td>

                                                        <td className="px-4 py-4 text-nowrap">
                                                            {value.registrationDate}
                                                        </td>

                                                        <td className="px-4 py-4">
                                                            <span
                                                                className="badge px-3 py-2"
                                                                style={{
                                                                    backgroundColor: "#0F172A",
                                                                    color: "#FFFFFF",
                                                                    borderRadius: "10px"
                                                                }}
                                                            >
                                                                {value.tableNumber}
                                                            </span>
                                                        </td>

                                                    </tr>
                                                )
                                            }
                                        )
                                    }
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewTeam