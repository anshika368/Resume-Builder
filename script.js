document.addEventListener('DOMContentLoaded', function () {
    const resumeForm = document.getElementById('resume-form');
    const resumeOutput = document.getElementById('resume-output');
    resumeForm.addEventListener('submit', function (e) {
        e.preventDefault();
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const summary = document.getElementById('summary').value;
        const experience = document.getElementById('experience').value;
        const education = document.getElementById('education').value;
        // Create a simple HTML template for the resume
        const resumeHTML = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Contact: ${phone}</p>
            
            <h3>Summary:</h3>
            <p>${summary}</p>
            
            <h3>Experience:</h3>
            <p>${experience}</p>
            
            <h3>Education:</h3>
            <p>${education}</p>
            <div>
        <center><button id="dwd">Print CV</button></center>
    </div>
        `;
        // Remove the form and previous content
        resumeForm.style.display = 'none'; // Hide the form
        resumeOutput.innerHTML = ''; // Clear previous content
        // Display the generated resume
        resumeOutput.innerHTML = resumeHTML;
        document.getElementById("dwd").addEventListener("click",function (){
            window.print();
        });
      
    });
});