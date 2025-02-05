const employees = [
  {
    Id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Compile financial data for the monthly report.",
        taskDate: "2025-01-15",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Client Database",
        taskDescription: "Update contact information for all clients.",
        taskDate: "2025-01-10",
        category: "Administration",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Organize Team Meeting",
        taskDescription:
          "Schedule and prepare agenda for the weekly team meeting.",
        taskDate: "2025-01-18",
        category: "Management",
      },
    ],
  },
  {
    Id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Marketing Poster",
        taskDescription: "Create a poster for the new product launch.",
        taskDate: "2025-01-20",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Social Media Campaign",
        taskDescription: "Launch the New Year social media campaign.",
        taskDate: "2025-01-01",
        category: "Marketing",
      },
    ],
  },
  {
    Id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the latest code changes for the project.",
        taskDate: "2025-01-16",
        category: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix critical bugs in the application.",
        taskDate: "2025",
      },
    ],
  },
];
const admin = [
  {
    Id: 1,
    email: "admin@example.com",
    password: "123",
  },
];
export const getLocalStorage = () => {
  localStorage.setItem("emplayess", JSON.stingify(employees));
  localStorage.setItem("employess", JSON.stingify(admin));
};
export const setLocalStorage = () => {
  const emplayess = JSON.parse(localStorage.getItem("employess"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(emplayess, admin);
};
