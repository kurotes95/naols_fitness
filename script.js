const muscles = {
    upper: ["Pectoralis Major", "Latissimus Dorsi", "Trapezius", "Deltoids", "Biceps Brachii", "Triceps Brachii"],
    lower: ["Quadriceps", "Hamstrings", "Calves", "Gluteus Maximus",]
};

function createChecklist(muscleGroup, containerId) {
    const container = document.getElementById(containerId);
    muscleGroup.forEach(muscle => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = muscle;
        checkbox.name = muscle;

        const label = document.createElement('label');
        label.htmlFor = muscle;
        label.appendChild(document.createTextNode(muscle));

        container.appendChild(checkbox);
        container.appendChild(label);
        container.appendChild(document.createElement('br'));
    });
}

createChecklist(muscles.upper, 'upper-body');
createChecklist(muscles.lower, 'lower-body');
function downloadState() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let data = '';

    checkboxes.forEach(checkbox => {
        data += `${checkbox.id}: ${checkbox.checked}\n`;
    });

    const blob = new Blob([data], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'workoutState.txt';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}