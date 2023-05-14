const StudentsList = document.getElementById('StudentsList');
const searchBar = document.getElementById('searchBar');
let CanStudents = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredstudent = CanStudents.filter((student) => {
        return (
            student.name.toLowerCase().includes(searchString) ||
            student.program.toLowerCase().includes(searchString)
        );
    });
    displaystudent(filteredstudent);
    LinkShowing(filteredstudent);

});

const loadstudent = async () => {
    try {
        const res = await fetch('./DataBase.json');
        CanStudents = await res.json();
        displaystudent(CanStudents);
        LinkShowing(CanStudents);

    } catch (error) {
        console.error(err);
    }
};



const displaystudent = (student) => {
    const htmlString = student
        .map((student) => {
            return `
            <li class="student">
                <h2>${student.name} </h2>
                <p>Program: ${student.program}</p>
                <img src="${student.image}"></img>
                <a href=${student.portafolio}>Explore</a>
            </li>
        `;
        })
        .join(' ');

        
       
        StudentsList.innerHTML = htmlString; 

};

loadstudent();