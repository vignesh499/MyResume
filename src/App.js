import './App.css';

function App() {
  function downloadPDF() {
    // Hide the download button for printing
    document.querySelector('.download-container').style.display = 'none';
    
    // Trigger print dialog
    window.print();
    
    // Show the download button again after printing
    setTimeout(function() {
        document.querySelector('.download-container').style.display = 'block';
    }, 1000);
  }
  return (
    <div className="App">
      <div class="download-container">
        <button class="download-btn" onClick={downloadPDF}>Download Resume</button>
    </div>
    <div class="header">
        <div class="name">Vadapalli Vignesh</div>
        <div class="title">Information Technology Student</div>
        <div class="contact-info">
            <div class="contact-item">📧 vadapallivignesh770@gmail.com</div>
            <div class="contact-item">📱 9398945546</div>
            <div class="contact-item">💻 GitHub</div>
        </div>
    </div>
    
    <div class="section">
        <div class="section-heading">EDUCATION</div>
        <div class="education-item">
            <div class="degree">Bachelor of Engineering in Information Technology</div>
            <div class="institution">
                <span>Vasavi College of Engineering</span>
                <span>Expected Graduation: June 2026</span>
            </div>
            <div>CGPA: 8.54</div>
        </div>
    </div>
    
    <div class="section">
        <div class="section-heading">TECHNICAL SKILLS</div>
        <ul class="skills-list">
            <li><strong>Programming Languages:</strong> C++, Python, C, Java</li>
            <li><strong>Web Technologies:</strong> HTML, CSS, JavaScript, NodeJS, React</li>
            <li><strong>Databases:</strong> MySQL, MongoDB</li>
        </ul>
    </div>
    
    <div class="section">
        <div class="section-heading">PROJECTS</div>
        
        <div class="project">
            <div class="project-title">
                <span>DST Drones Consultancy - 3D Mapping and Feature Extraction</span>
                <span>2024 - Present</span>
            </div>
            <ul class="project-details">
                <li>Currently working on a project to combine LiDAR and multispectral camera data for 3D map creation</li>
                <li>Developing algorithms to extract features from the generated 3D maps</li>
            </ul>
        </div>
        
        <div class="project">
            <div class="project-title">
                <span>ASCII-BUCKS Cryptocurrency</span>
                <span>2023</span>
            </div>
            <ul class="project-details">
                <li>Created a novel cryptocurrency named "ASCII-BUCKS" using blockchain technology</li>
                <li>Implemented smart contracts and a basic trading platform</li>
            </ul>
        </div>
    </div>
    
   
    <div class="section">
        <div class="section-heading">CERTIFICATIONS</div>
        <ul class="cert-list">
            <li class="cert-item">NPTEL Certification: Joy of Computing Python (2024)</li>
            <li class="cert-item">NPTEL Certification: Operating System (2024)</li>
            <li class="cert-item">Cisco Certified Network Associate (CCNA) (2024)</li>
        </ul>
    </div>
    
    
    <div class="section">
        <div class="section-heading">EXTRACURRICULAR ACTIVITIES</div>
        <ul class="activities-list">
            <li class="activity-item">Participant, Tech Savvy 24Hr-National Level Hackathon (2024)</li>
            <li class="activity-item">Participant, Tech Saviskhaar College Level Hackathon (2024)</li>
            <li class="activity-item">Participant, State Level Chess Tournament - Achieved Top 3 rank (2023)</li>
        </ul>
    </div>

    </div>
  );
}


export default App;
