document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const repoName = urlParams.get('repo');

    const projectImages = {
        'Dynamic-counter': '/src/assets/images/timer-project.png',
        'Password-Generator': '/src/assets/images/password-project.png',
        'Food-Aluroni': '/src/assets/images/aluroni-project.png'
    };

    if (repoName) {
        fetch(`https://api.github.com/repos/mtrebecca/${repoName}`)
            .then(response => response.json())
            .then(repo => {
                const projectInfo = document.getElementById('project-info');
                const liveProjectUrl = `https://mtrebecca.github.io/${repoName}`;
                const projectImage = projectImages[repoName] || '/src/assets/images/default-project.png';

                projectInfo.innerHTML = `
                    <div class="project-header">
                        <div class="project-title-tools">
                            <h2>${repo.name}</h2>
                            <div class="tools">
                                <span>Ferramentas utilizadas:</span>
                                <div class="frameworks">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JavaScript</p>
                                </div>
                                
                            </div>
                        </div>
                        <div class="project-image">
                            <img src="${projectImage}" alt="${repo.name}" />
                        </div>
                    </div>
                    <div class="project-description">
                        <p>${repo.description ? repo.description : 'Sem descrição disponível.'}</p>
                    </div>
                    <div class="project-buttons">
                        <a href="${liveProjectUrl}" target="_blank" class="live-project">Projeto ao vivo</a>
                         <a href="${repo.html_url}" target="_blank" class="github">GitHub</a>
                    </div>
                `;
            })
            .catch(error => {
                console.error('Erro ao buscar dados do projeto:', error);
            });
    }
});
