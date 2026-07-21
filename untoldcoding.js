const text = `
Confesión oscura de un amor que no conoce límites.

No quiero una parte de ti.

Quiero tus mañanas, tus noches, tus silencios y tus tormentas. Quiero saber qué piensas antes de que lo digas, 
quiero que cada decisión lleve un poco de mi nombre y que cada uno de mis pasos encuentre los tuyos.

Dicen que amar es dejar libre. Nosotros nunca aprendimos esa definición.

Nos elegimos como quien cierra una puerta y arroja la llave al fondo del mar.

Quiero que me pertenezcas tanto como yo te pertenezco. Que tu refugio sea mi pecho y mi prisión también. 
Que el mundo golpee la puerta mientras nosotros olvidamos que existe.

Cuando no estás, nada tiene sabor. Las risas de otros son ruido. Las conversaciones se vuelven vacías. 
Es como si la vida decidiera detenerse hasta que vuelvas a mirarme.
Y sé que en ti ocurre lo mismo, porque cuando nos separamos, ninguno de los dos está realmente presente para nadie más.

Nuestro deseo no conoce horarios ni distancias. Vive escondido en cada mirada, en cada palabra, en la necesidad constante de sentir al otro cerca. 
No nace solo de la piel, sino del hambre de fundir dos vidas hasta olvidar dónde termina una y comienza la otra.

Somos el pecado favorito del otro.

"Tóxicos", dirán algunos.

"Obsesivos."

"Demasiado intensos."

Quizá tengan razón.

Pero nunca entenderán que hay personas hechas para vivir con los pies 
en la tierra y otras destinadas a incendiarse juntas.

Si un día el universo quisiera separarnos, tendría que arrancarnos el alma primero.

Porque ya no sé existir sin ti y sin tu cuerpo.

Y yo solo quiero que tu tampoco recuerdes cómo hacerlo sin mí.
`;

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  if (letter == ";" || letter == "." || letter == "," || letter == ":" || letter == "!" || letter == "?") {
    return Math.floor(Math.random() * 500 + 500);
  } else if (letter == "\n") {
    return 400;
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  document.querySelector(".textCont").textContent = "";
  dashOut(paragraph);
}

startFromBegin();