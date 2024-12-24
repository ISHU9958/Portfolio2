import sudoku from '../assets/sudoku.png'
import portfoilio from '../assets/porfolio.png'
import doctorAppointment from '../assets/doctorAppointment.png'
const projects=[

    {
        name:'Doctor Appointment System',
        path:`${doctorAppointment}`,
        description:`A web-based application to simplify medical appointment management. Patients can view doctor profiles, book appointments, and download a confirmation slip with appointment details. The system ensures convenience and secure data handling for both patients and healthcare providers.`,
        livelink:`https://doctor-appointment-system-ksrf.onrender.com/`,
    },
    {
        name:'Sudoku',
        path:`${sudoku}`,
        description:`A web-based Sudoku Solver that allows users to input a Sudoku puzzle and solves it automatically. The game offers an interactive grid where users can fill in the numbers and see the solution in real time. The solver uses a backtracking algorithm to efficiently find the solution. The game also features an option to reset the puzzle and generate new random puzzles. The interface is user-friendly and designed to help users practice their Sudoku skills while learning how the algorithm solves the puzzle step-by-step.`,
        livelink:`https://sudoku-solver-coral.vercel.app/`,
    },
    {
        name:'Portfolio',
        path:`${portfoilio}`,
        description:`A dynamic and visually appealing online portfolio showcasing my skills, projects, and achievements. It highlights my expertise in web development, competitive programming through interactive project displays and detailed descriptions. The portfolio includes sections such as my technical skills, project showcases, and educational background. It’s designed to provide an intuitive navigation experience, with clear project explanations, links to GitHub repositories, and live demos where applicable. The portfolio serves as a comprehensive representation of my capabilities and serves as a platform for potential employers or collaborators to explore my work.`,
        livelink:`https://portfolio2-p1mz.vercel.app/`,
    },

    
];

export default projects;