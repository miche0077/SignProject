# Projeto Responsivo e Acessível de Login e Cadastro

Este é um projeto de login e cadastro responsivo e acessível, desenvolvido em HTML, CSS e JavaScript. O objetivo deste projeto é fornecer uma experiência amigável e acessível para usuários em diferentes dispositivos e garantir a acessibilidade para pessoas com deficiências.

## Funcionalidades

- Página de Login:
  - Permite que usuários existentes façam login fornecendo seu e-mail e senha.
  - Possui um link para redefinir a senha caso o usuário tenha esquecido.
  - Contém um link para a página de cadastro caso o usuário ainda não possua uma conta.

- Página de Cadastro:
  - Permite que novos usuários criem uma conta fornecendo informações como empresa, CNPJ, responsável, e-mail, telefone, senha e confirmação de senha.
  - Aplica validações básicas nos campos do formulário.
  - Ao enviar o formulário, os dados são processados pelo script JavaScript associado.

## Responsividade

- O projeto é totalmente responsivo e se adapta a diferentes tamanhos de tela e dispositivos.
- Utiliza técnicas de design responsivo, como layout flexível.

## Acessibilidade

- O projeto foi desenvolvido seguindo as práticas recomendadas de acessibilidade web.
- Utiliza marcadores semânticos adequados para fornecer uma estrutura correta do conteúdo.
- Aplica atributos ARIA (Accessible Rich Internet Applications) para melhorar a acessibilidade dos elementos interativos.
- Inclui rótulos acessíveis para os campos de entrada usando as tags `<label>` e atributos `for` e `aria-label`.
- Utiliza cores e contraste adequados para facilitar a legibilidade e a percepção do conteúdo.
- É compatível com leitores de tela e outras tecnologias assistivas.

## Estrutura de Arquivos

- `index.html`: Página de login.
- `signUp.html`: Página de cadastro.
- `assets/`: Diretório contendo os arquivos CSS, JavaScript e outros recursos.
  - `styleSignIn.css`: Arquivo CSS para a página de login.
  - `styleSignUp.css`: Arquivo CSS para a página de cadastro.
  - `signInScript.js`: Arquivo JavaScript para a página de login.
  - `signUpScript.js`: Arquivo JavaScript para a página de cadastro.

## Executando o Projeto

1. Faça o download dos arquivos do projeto.
2. Abra o arquivo `index.html` em um navegador web para acessar a página de login.
3. Clique no link "Cadastre-se" para acessar a página de cadastro (`signUp.html`).
4. Preencha os campos necessários e clique no botão "Criar Conta" para enviar o formulário.
5. No formulário de login, insira as credenciais corretas para realizar o login.

## Personalização

Você pode personalizar o projeto de acordo com suas necessidades. Modifique os estilos CSS nos arquivos `styleSignIn.css` e `styleSignUp.css` para ajustar a aparência do projeto.

//English
# Responsive and Accessible Login and Registration Design

This is a responsive and accessible login and registration project, developed in HTML, CSS and JavaScript. The goal of this project is to provide a user-friendly and accessible experience for users on different devices and to ensure accessibility for people with disabilities.

## Functionalities

- Login Page:
   - Allows existing users to login by providing their email and password.
   - It has a link to reset the password in case the user has forgotten it.
   - Contains a link to the registration page if the user does not yet have an account.

- Registration Page:
   - Allows new users to create an account by providing information such as company, CNPJ, responsible, e-mail, telephone, password and password confirmation.
   - Apply basic validations to form fields.
   - When submitting the form, the data is processed by the associated JavaScript script.

## Responsiveness

- The project is fully responsive and adapts to different screen sizes and devices.
- Uses responsive design techniques such as flexible layout.

## Accessibility

- The project was developed following web accessibility best practices.
- Uses appropriate semantic markers to provide a correct structure of the content.
- Apply ARIA attributes (Accessible Rich Internet Applications) to improve the accessibility of interactive elements.
- Includes accessible labels for input fields using `<label>` tags and `for` and `aria-label` attributes.
- Uses appropriate colors and contrast to facilitate the readability and perception of the content.
- It is compatible with screen readers and other assistive technologies.

## File Structure

- `index.html`: Login page.
- `signUp.html`: Sign Up page.
- `assets/`: Directory containing the CSS, JavaScript files and other assets.
   - `styleSignIn.css`: CSS file for the login page.
   - `styleSignUp.css`: CSS file for the signup page.
   - `signInScript.js`: JavaScript file for the login page.
   - `signUpScript.js`: JavaScript file for the sign-up page.

## Running the Project

1. Download the project files.
2. Open the `index.html` file in a web browser to access the login page.
3. Click on the "Sign Up" link to access the sign up page (`signUp.html`).
4. Fill in the required fields and click the "Create Account" button to submit the form.
5. In the login form, enter the correct credentials to login.

## Personalization

You can customize the project according to your needs. Modify the CSS styles in the `styleSignIn.css` and `styleSignUp.css` files to adjust the design's appearance.