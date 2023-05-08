export class MainMenu extends HTMLElement{
    constructor (){
        super();
        this.render();
    }
    render(){
        this.innerHTML=/* html*/ `
            <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="/index.html"><img src="/images/logoPrincipal-xl.png" height="80px" alt="Logo">Campus Aerline</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/index.html" >Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/clientes.html" >Clientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/rutas.html" >Rutas Aereas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/flotas.html" >Flotas de Aviones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/compras.html" >Compras</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/embarques.html" >Embarques</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/personal.html" >Personal</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        `
    }
}

customElements.define("main-menu",MainMenu);