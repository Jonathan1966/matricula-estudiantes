// Datos simulados
const courses = [
    { id: 1, name: "Curso A", capacity: 5, enrolled: 2 },
    { id: 2, name: "Curso B", capacity: 3, enrolled: 3 },
    { id: 3, name: "Curso C", capacity: 10, enrolled: 7 }
];

let currentUser = null;

// Función para iniciar sesión
function login() {
    const username = document.getElementById("username").value;
    if (username) {
        currentUser = username;
        document.getElementById("login-section").style.display = "none";
        document.getElementById("matricula-section").style.display = "block";
        document.getElementById("report-section").style.display = "block";
        loadCourses();
    } else {
        alert("Por favor, ingrese su nombre de usuario.");
    }
}

// Función para cargar cursos en el selector
function loadCourses() {
    const courseList = document.getElementById("course-list");
    courseList.innerHTML = ""; // Limpiar lista previa
    courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.id;
        option.textContent = `${course.name} (Cupos disponibles: ${course.capacity - course.enrolled})`;
        courseList.appendChild(option);
    });
}

// Función para matricularse en un curso
function enroll() {
    const courseId = parseInt(document.getElementById("course-list").value);
    const course = courses.find(c => c.id === courseId);

    if (course.enrolled < course.capacity) {
        course.enrolled++;
        document.getElementById("matricula-message").textContent = `¡Matrícula exitosa en ${course.name}!`;
        loadCourses(); // Actualizar la lista de cursos
    } else {
        document.getElementById("matricula-message").textContent = "Lo sentimos, no hay cupos disponibles en este curso.";
    }
}

// Función para generar reportes
function generateReport() {
    const reportOutput = document.getElementById("report-output");
    reportOutput.innerHTML = "<h3>Reporte de Matrículas</h3>";
    courses.forEach(course => {
        const courseInfo = document.createElement("p");
        courseInfo.textContent = `${course.name}: ${course.enrolled} inscritos / ${course.capacity} capacidad.`;
        reportOutput.appendChild(courseInfo);
    });
}
