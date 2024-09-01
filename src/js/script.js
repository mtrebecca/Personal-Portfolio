document.addEventListener('DOMContentLoaded', () => {
    const username = 'mtrebecca';
    
    const projectNames = ['Dynamic-counter', 'Password-Generator', 'Food-Aluroni'];

    const projectImages = {
        'Dynamic-counter': '/src/assets/images/timer-project.png',
        'Password-Generator': '/src/assets/images/password-project.png',
        'Food-Aluroni': '/src/assets/images/aluroni-project.png'
    };

    async function fetchGitHubRepos() {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();
        return repos.filter(repo => projectNames.includes(repo.name));
    }

    async function displayProjects() {
        const projectList = document.getElementById('project-list');
        const repos = await fetchGitHubRepos();
        
        repos.forEach(repo => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            
            const projectImage = projectImages[repo.name] || '';

            projectElement.innerHTML = `
                <img src="${projectImage}" alt="${repo.name}" />
                <div class="all-info">
                    <span class="name-project">${repo.name}</span>
                    <p class="resume-project">${repo.description ? repo.description : 'Sem descrição disponível.'}</p>
                    <a href="project-details.html?repo=${repo.name}" class="view-project">Ver detalhes</a>
                </div>
            `;

            projectList.appendChild(projectElement);
        });
    }

    displayProjects();
});
