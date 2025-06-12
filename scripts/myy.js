document.addEventListener('DOMContentLoaded', function() {
    const resumeData = {
        name: "Brice Nyiringabo",
        contact: {
            location: "Mankato, MN",
            phone: "(507) 613 - 1416",
            email: "nyiringabobrice@gmail.com",
            linkedin: "linkedin.com/in/brice-nyiringabo"
        },
        education: [
            {
                institution: "Minnesota State University, Mankato",
                degree: "B.Sc. Computer Information Technology (Telecommunication Minor)",
                date: "May 2026",
                courses: [
                    "Data Structures",
                    "Intro Database Systems",
                    "Computer Architecture",
                    "Algorithms",
                    "Web App Design & Development",
                    "Systems Analysis Design",
                    "Intro to Info Security",
                    "Intro to Networking",
                    "Health Informatics & Humanities"
                ]
            }
        ],
        skills: [
            "ASP.NET CORE MVC",
            "C#",
            "SQL",
            "HTML",
            "CSS",
            "Android-Studio",
            "Kotlin",
            "Java",
            "GitHub",
            "Git",
            "JavaScript"
        ],
        projects: [
            {
                title: "E-commerce ASP.NET CORE WEP APP MVC Project – Kigali Eats",
                date: "12/2025 - 1/2025",
                description: [
                    "Created an Entity Relationship Diagram using Lucid Chart to illustrate the links between my database tables",
                    "Developed Models in C# and created a database with code first entity framework",
                    "Made CRUD operations on the front end to support many to many database Tables",
                    "Built a shopping cart with user order to support one to many database tables"
                ]
            },
            {
                title: "Portfolio website",
                url: "https://bricenyiringabo-ujogk.ondigitalocean.app/",
                date: "01/2025 - present",
                description: [
                    "Used Git, GitHub, JavaScript, HTML to structure a web page and CSS to format webpages.",
                    "Show cases skills, project, and professional experience."
                ]
            },
            {
                title: "Mobile App User Interface Design",
                date: "08/2022 - 12/2022",
                description: [
                    "Designed and implemented a school management mobile application interface.",
                    "user interface using Adobe XD and Android Studio.",
                    "Created detailed UI in Adobe XD then translated the design into android studio layout using XML",
                    "Focused on usability and visual appeal, ensuring a responsive design."
                ]
            },
            {
                title: "Group Project of a 3D Car Driving Game in unity",
                date: "05/2022 - 08/2022",
                description: [
                    "Programed realistic car mechanics, including movement, turning, collision handling",
                    "Modeled and optimized destructible car assets in blender for realism crash effects",
                    "Integrated Unity’s cinemachine for a dynamic chase camera system",
                    "Improved game aesthetics by optimizing light, shadows"
                ]
            },
            {
                title: "Project E-Health",
                date: "01/2022 - 03/2022",
                description: [
                    "Developed a Java app in NetBeans to record student health data and compute BMI",
                    "Saved records into a MYSQL Database and Implemented Database connectivity using JDBC.",
                    "Utilized exception handling to manage invalid data entries."
                ]
            },
            {
                title: "Learn C#, Simplified by a student",
                date: "01/2025 - present",
                description: [
                    "Introduction & Basics to C#",
                    "Control flow statements, Functions and methods in C#",
                    "Arrays, collections & Object Oriented Programming in C#"
                ]
            }
        ],
        workExperience: [
            {
                title: "Photographer",
                company: "MSU Reporter, MNSU",
                date: "08/2023 - 02/2024"
            },
            {
                title: "Cashier and Crew Member",
                company: "Sodexo, MNSU",
                date: "01/2023 - 08/2023"
            }
        ],
        activities: [
            "Member – The Data Resources for Eager & Analytical Minds Club (08/2023 - Present)",
            "Member of the leadership Committee – National Society of Black Engineers (08/2024 - Present)"
        ],
        honorsAwards: [
            "Mavericks International Scholarship, MNSU (03/2022 - Present)",
            "Cisco Networking Basics Badge (2024)",
            "Dean's List (2023 - 2024)",
            "Outstanding Service - Head of IT Department, Riviera High School (2022)"
        ]
    };

    const resumeContainer = document.getElementById('resume-container');

    let html = `
        <div class="contact-info">
            <h1>${resumeData.name}</h1>
            <p>${resumeData.contact.location} | ${resumeData.contact.phone} |
               <a href="mailto:${resumeData.contact.email}">${resumeData.contact.email}</a> |
               <a href="${resumeData.contact.linkedin}" target="_blank">LinkedIn</a>
            </p>
        </div>

        <h2>Education</h2>
    `;

    resumeData.education.forEach(edu => {
        html += `
            <h3>${edu.degree}</h3>
            <p>${edu.institution} – ${edu.date}</p>
            ${edu.courses && edu.courses.length > 0 ? `
                <h4>Relevant Academic Courses</h4>
                <ul class="course-list">
                    ${edu.courses.map(course => `<li>${course}</li>`).join('')}
                </ul>
            ` : ''}
        `;
    });

    html += `<h2>Technical Skills</h2>
             <ul class="skill-list">
                 ${resumeData.skills.map(skill => `<li>${skill}</li>`).join('')}
             </ul>`;

    html += `<h2>Projects</h2>`;
    resumeData.projects.forEach(project => {
        html += `
            <div class="project-item">
                <h3>${project.title} ${project.url ? `<a href="${project.url}" target="_blank">(Portfolio)</a>` : ''}</h3>
                <p>${project.date}</p>
                <ul>
                    ${project.description.map(desc => `<li>${desc}</li>`).join('')}
                </ul>
            </div>
        `;
    });

    html += `<h2>Work Experience</h2>`;
    resumeData.workExperience.forEach(work => {
        html += `
            <h3>${work.title}</h3>
            <p>${work.company} – ${work.date}</p>
        `;
    });

    html += `<h2>Activities</h2>
             <ul>
                 ${resumeData.activities.map(activity => `<li>${activity}</li>`).join('')}
             </ul>`;

    html += `<h2>Honors and Awards</h2>
             <ul>
                 ${resumeData.honorsAwards.map(award => `<li>${award}</li>`).join('')}
             </ul>`;

    resumeContainer.innerHTML = html;
});