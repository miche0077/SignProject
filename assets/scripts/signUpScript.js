document.getElementById("loginForm").addEventListener("submit", login);

function login(event) {
	event.preventDefault();
    let empresa = document.getElementById("empresa").value;
    let cpnj = document.getElementById("cnpj").value;
    let responsavel = document.getElementById("responsavel").value;
	let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
	let senha = document.getElementById("senha").value;
    let confSenha = document.getElementById("confSenha").value;

	console.log("email:", email);
	console.log("senha:", senha);
    console.log("empresa", empresa);
    console.log("cpnj", cpnj);
    console.log("responsavel", responsavel);
    console.log("telefone", telefone)
    console.log("confSenha", confSenha)
}
