import React from 'react';
import Card from 'react-bootstrap/Card';

const ClaseTres = (props) => {
  return (
    <div>
        <Card className="mb-2">
            <Card.Header>Clase 3</Card.Header>
            <Card.Body>

            <Card.Title>El txt a mi derecha llega por PROPS o- {props.saludo}</Card.Title>
            <Card.Text>
            - Todos los componentes son funciones. <br />
            - Todos los componentes se escriben con la inicial en mayuscula. <br />
            - Todos los componentes deben retornar algo. <br />
            - Todos los componentes deben retornar un solo elemento. <br />
            - Todos los componentes retornan JSX (Que es JSX? - Javascript + XML) <br />
            </Card.Text>

            <Card.Title>SASS</Card.Title>
            <Card.Text>
              1- Dentro de mi carpeta 'src' creo mi archivo de SASS con el nombre 'style.scss' <br />
              2- Ahora necesitamos importar el archivo 'style.scss' dentro de nuestro componente 'App.js' <br />
              3- En caso de no tener instalada la libreria SASS vamos a ver un mensaje de error en pantalla "Module error, cannot find Module Sass" para solucionar este error procedemos a instalar SASS. Para instalarlo frenamos la consola y ejecutamos el siguiente codigo 'npm install sass' <br />
              4- Ya podemos crear estilos CSS dividos en 'modulos' usando SASS. Para hacerlo podemos crear una carpeta 'styles' y dentro de ella guardamos nuestros modulos colocando siempre un guion-bajo como primer letra dentro del nombre de cada modulo, por ejemplo '_header.scss'<br />
              5- Para poder ver los cambios de estilo que vamos haciendo tenemos que importar los modulos dentro de la hoja principal, nuestro 'archivo global' que se llama 'styles.scss', por ejemplo para importar nuestro modulo '_header.scss' alojado en la carpeta 'styles' tenemos que añadir la siguiente linea "@import 'styles/header'; " al archivo SASS principal, en este caso 'Styles.scss'<br />
            </Card.Text>

            <Card.Title>Bootstrap - React Bootstrap</Card.Title>
            <Card.Text>
              Existen dos manera de incorporar Bootstrap a nuestro proyecto, una es la clasica pegando el link a Bootstrap en la etiqueta 'head' de nuestro index.html <br />
              Una vez linkeado los archivos de Bootstrap hay que tener en cuenta que en React la palabra 'class' es una palabra reservada, por lo que deberiamos reemplazar todos los 'class' por 'className' para que React pueda leer las clases Bootstrap. <br /><br />
              El segundo metodo para implementar Bootstrap es instalando la libreria <a href="https://react-bootstrap.github.io/">React-Bootstrap</a> <br />
              Primero, para proceder con la instalacion de la libreria, frenamos la consola con el comando 'Control + C' y ejecutamos el siguiente codigo 'npm install react-bootstrap bootstrap' <br />
              Como segundo paso procedemos a importar la hoja de estilos css de Bootstrap dentro del archivo 'index.js' dentro de la carpeta 'src' o lo incluimos dentro de nuestro archivo 'App.js', para importar la hoja de estilos en cualquiera de estos archivos usamos la siguiente linea de codigo " import 'bootstrap/dist/css/bootstrap.min.css " <br />
              La principal diferencia entre usar este metodo y el anterior es que esta vez tenemos que usar componentes en lugar de clases, esto implica importar los componentes de Bootstrap dentro de cada archivo donde queramos implementar Bootstrap. <br />

            </Card.Text>

            <Card.Title>Subir proyecto a GitHub</Card.Title>
            <Card.Text>
            - Frenar el proceso / Matar el proceso / control + c<br/>
            - En la terminal - <br/>
            <ul>
              <li>Frenamos el proyecto con Control + C</li>
              <li>' git init ' inicializamos un repositorio local</li>
              <li>1-1 ' git add . ' Sube los archivos al staging area</li>
              <ul>
                <li>1-1-1 ' git reset . ' Saca lo que subimos al staging usando el comando 'git add.'</li>
                <li>1-1-2 ' git status ' Visualizo el estado de mis archivos</li>
              </ul>
              <li>1-2 ' git commit -m aca-dejo-un-mensaje ' Hago un commit de los cambio que hice al repositorio local y dejo un mensaje</li>
              <ul>
                <li>1-2-1 ' git log ' Veo los commits realizados con los datos de: autor, lahora y el mensaje</li>
                <li>1-2-2 ' git log --oneline' Visualizo los commits en una sola linea sin el horario ni el autor</li>
                <li>1-2-3 ' git commit --amend ' Modifico el mensaje del ultimo commit. Para escribir el nuevo mensaje toco 'i'. Para confirmar y salir tipeo 'esc', ':', 'w' y 'q'</li>
              </ul>
            </ul>

            <ul>
              <li>2-1 ' git push -u origin Nombre-para-identificar-la-rama ' Hcemos un push de una rama nueva (cuando estamos trabajando en el master o una rama haciendo commits constantemente, no es necesario escribir esta sentencia completa, con escribir - git push - es suficiente, ya que el primer commit nos posiciona en destino para los siguientes commits)</li>
              <li>2-2 ' git checkout nombre-de-la-rama-a-la-que-quiero-ir ' Me muevo a una rama distinta de la que estoy</li>
              <ul>
                <li>' git checkout -- . ' Todos mis archivos que se encuentran en mi repositorio van a ser reconstruidos como se encontraban en el ultimo commit</li>
              </ul>
            </ul>

            <ul>
              <li>3-1 - ' git branch -l ' puedo ver mi lista de ramas dentro de git, con la tecla 'Q' vuelvo a la consola</li>
              <ul>
                <li>3-1-1 ' git branch nombre-de-la-nueva-rama ' Crea una rama nueva con el nombre 'nombre-de-la-nueva-rama'</li>
                <li>3-1-2 ' git branch -D nombre-de-la-rama-que-quiero-borrar' con este comando puedo eliminar una rama </li>
                <li>3-1-3 ' git branch -m ' asigna un nuevo nombre a la rama en la que estas ubicado</li>
              </ul>
            </ul>

            <ul>
              <li>4-1 - ' git checkout -b Nombre-de-nueva-rama ' este comando sirve para crear una nueva rama y movernos a ella</li>
            </ul>

            <ul>
              <li>5-1 - ' git switch - ' este comando me lleva a la rama anterior en la que estaba trabajando</li>
              <ul>
                <li>5-1-1 ' git switch nombre-de-la-rama-a-la-que-quiero-ir' me lleva a una rama especifica</li>
              </ul>
            </ul>
            
            <ul>
              <li>6-1 - ' git pull ' Este comando me trae lo archivos actualizados a mi proyecto local en caso que hallan sido editados dentro del repositorio.</li>
            </ul>
          
            <ul><li>7-1 ' git merge nombre-de-la-rama ' combina la rama en la que estoyubicado con la que coloque en el merge. </li></ul>
            <ul>
              <li>Comandos peligrosos</li>
              <li>8-1 ' git reset --soft nombre-de-la-rama o commit ' vuelve al punto que le indiquemos pero mantiene los archivos tal cual ...</li>
              <li>9-1 ' git reset --hard nombre-de-la-rama o commit ' vuelve al punto que le indicamos borrando todo lo que paso luego de ese commit que le indicamos</li>
            </ul>
            
            GITHUB<br/>
            <ul>
              <li>' git remote add origin URL ' conecta el repo local con el repo remoto</li>
              <li>' git push -u origin nombre-de-la-rama' sube la rama a Github</li>
              <li>' git pull ' nos trae toda la rama a nuestro proyecto, desde el repo en la nube al local. Hace un 'git fetch' y un 'git merge' al mismo tiempo.</li>
              <li>' git clone URL ' clona el repo de la nube a nuestra computadora.</li>
              <li>' git clone URL -b nombre-de-la-rama -single-branch' clona solo la rama que le indicamos en nuestra computadora.</li>
            </ul>

             <p>Queda pendiente como añadir googlefonts en un proyecto de React</p>
            </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ClaseTres