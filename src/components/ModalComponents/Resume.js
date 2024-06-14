export default function Resume() {
    return (
        <div
            className="resume-container parent"
            style={{ display: 'flex', flexDirection: 'column' }}
        >

            <p style={{ margin: 0 }}>
                Elmwood Park, NJ
                <br />
                (201) 851-2283
            </p>

            <h2>
                FULLSTACK PROJECTS__________________________________________________
            </h2>


            <div style={{ display: 'flex', justifyContent: 'space-between', width: 180 }}>
                <h6 style={{ fontWeight: 'bold', margin: 0 }}>
                    Soundlog
                </h6>
                <div>
                    <a href="https://ardian-kovanxhi-soundcloud.onrender.com" target="_blank" rel="noopener noreferrer">
                        live
                    </a>
                    {' | '}
                    <a href="https://github.com/Ardian-Kovanxhi/SoundCloud-Clone" target="_blank" rel="noopener noreferrer">
                        github
                    </a>
                </div>
            </div>
            <p style={{ margin: 0, marginBottom: '5px' }}>
                (Javascript, Express.js, Sequelize, SQLite, Postgres, React.js, Redux, CSS, HTML5, AWS S3)
                <br />
                Inspired by Soundcloud, Soundlog is a music playing website with functionality in mind where users can play, upload, and comment on their favorite songs
            </p>
            <ul>
                <li>
                    Built a RESTful API in Express.js to increase site performance
                </li>

                <li>
                    Implemented React Player and built a custom progress bar that communicate with each other through Redux's global store for an improved user experience
                </li>

                <li>
                    Employed an AWS S3 bucket for secure and optimal storage of mp3 files
                </li>
            </ul>





            <div style={{ display: 'flex', justifyContent: 'space-between', width: 210 }}>
                <h6 style={{ fontWeight: 'bold', margin: 0 }}>
                    Discordance
                </h6>
                <div>
                    <a href="https://group-4-discord.onrender.com" target="_blank" rel="noopener noreferrer">
                        live
                    </a>
                    {' | '}
                    <a href="https://github.com/hen-wood/group-4-flask-project" target="_blank" rel="noopener noreferrer">
                        github
                    </a>
                </div>
            </div>
            <p style={{ margin: 0, marginBottom: '5px' }}>
                (Python, JavaScript, Flask, SQLAlchemy, SQLite, Postgres, React.js, Redux, CSS, HTML5, Socket.io)
                <br />
                Inspired by Discord, Discordance is a chat app developed by myself along with 3 other developers where you can  chat with you friends both directly and in group chats
            </p>
            <ul>
                <li>
                    Implemented Socket.io for bidirectional data flow to facilitate real-time chat
                </li>

                <li>
                    Developed experience with group workflow using GIT to keep branches separate and the main branch clean
                </li>

                <li>
                    Employed an AWS S3 bucket for secure and optimal storage of mp3 files
                    Implemented User Auth on both a front and backend level to ensure user security
                </li>
            </ul>





            <div style={{ display: 'flex', justifyContent: 'space-between', width: 190 }}>
                <div style={{ fontWeight: 'bold' }}>
                    ArdianBnB
                </div>
                <div>
                    <a href="https://ardian-kovanxhi-aribnb.onrender.com" target="_blank" rel="noopener noreferrer">
                        live
                    </a>
                    {' | '}
                    <a href="https://github.com/Ardian-Kovanxhi/AirBnB" target="_blank" rel="noopener noreferrer">
                        github
                    </a>
                </div>
            </div>
            <div style={{ marginBottom: '5px' }}>
                (Javascript, Express.js, Sequelize, SQLite, Postgres, React.js, Redux, CSS, HTML5)
            </div>
            <div>
                Inspired by AirBnB, ArdianBnB is a renting site, where you can post your home or rent another one
            </div>
            <ul>
                <li>
                    Developed a user-friendly and efficient web application with 3 key CRUD features being spots, reviews, and users
                </li>

                <li>
                    Constructed a robust database using the Sequelize ORM with relations and join tables for a more lightweight backend
                </li>

                <li>
                    Created custom SQL queries to optimally load data from multiple tables in a single query for a more responsive experience
                </li>
            </ul>





            <h2>
                SKILLS__________________________________________________________________
            </h2>

            <div style={{ fontWeight: 'bold' }}>
                Languages
            </div>
            <div style={{ marginLeft: '20px' }}>
                Javascript, Python, HTML, CSS
            </div>


            <div style={{ fontWeight: 'bold' }}>
                Frameworks/Tools
            </div>
            <div style={{ marginLeft: '20px' }}>
                Express, Flask, React.js, Redux, SQL, Sequelize, AWS (s3), Socket.io, Node.js, SQL, Sequelize, SQLAlchemy, SQLite, PostgresSQL, Mocha, Git, REST, Object Oriented Programming(OOP), Linux, WSL
            </div>


            <div style={{ fontWeight: 'bold' }}>
                Hardware
            </div>
            <div style={{ marginLeft: '20px', marginBottom: '10px' }}>
                Intimate applied knowledge of system building, setup, and deployment
            </div>


            <h2>
                WORK EXPERIENCE______________________________________________________
            </h2>



            <div style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5px' }}>
                <div>
                    Freelancer Computer Technician
                </div>
                <div>
                    June 2019 - current
                </div>
            </div>
            <ul>
                <li>
                    Design systems for clients within parameters of budget and intended workload.
                </li>

                <li>
                    Provide ongoing technical support and maintenance for systems
                </li>
            </ul>




            <div style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginRight: '5px' }}>
                <div>
                    NJ Department of Health Canvassing
                </div>
                <div>
                    June - August 2021
                </div>
            </div>
            <ul>
                <li>
                    Educated residents on resources available to them and instructed them on how to access and receive aid.
                </li>

                <li>
                    Persuaded and assisted residents to schedule appointments for the covid vaccine.
                </li>

                <li>
                    Measured statistics including demographics and vaccination status per assigned residential zones.
                </li>
            </ul>



            <h2>
                EDUCATION______________________________________________________________
            </h2>

            <div style={{ fontWeight: 'bold' }}>
                App Academy
            </div>
            <ul>
                <li>
                    Coding Bootcamp focused on web development
                </li>
            </ul>

            <div style={{ fontWeight: 'bold' }}>
                New Jersey Institute of Technology
            </div>
            <ul>
                <li>
                    Major in Mathematical Sciences
                </li>
            </ul>


            <div style={{ fontWeight: 'bold' }}>
                Elmwood Park Memorial High School
            </div>
            <ul>
                <li>
                    Cumulative GPA: 3.5
                </li>
            </ul>
        </div>
    )
}