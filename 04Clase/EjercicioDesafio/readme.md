# EJERCICIO CLASE 4
Definiremos una constante PORT, con el valor 3008. 
En el servidor web, debemos tener definidas a las siguientes rutas:
● “/”
● “/cursos”
● “/contacto”
Seteamos el método header() en c/u de ellas para enviar content-type en formato HTML. 
En el método end() debemos enviar un tag H1 con un título descriptivo para la ruta que estamos navegando. Ejemplo:
● “Bienvenidas a nuestra web” => para la raíz “/” del sitio
● “Bienvenidas a nuestra sección cursos” => para /cursos
Recordemos agregar también el control de rutas inexistentes, respondiendo con un mensaje acorde, pero en formato TEXTO PLANO.