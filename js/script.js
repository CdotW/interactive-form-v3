const name = document.getElementById('name');
name.focus();

const jobRole = document.querySelector('#title');
const otherJobRole = document.getElementById('other-job-role');
jobRole.addEventListener('change', (e) => {
    if (e.target.value === 'other') {
        otherJobRole.style.visibility = 'visible';
    } else {
        otherJobRole.style.visibility = 'hidden';
    };
});