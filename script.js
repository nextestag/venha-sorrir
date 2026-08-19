/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");

const menu = document.getElementById("menu");


menuToggle.addEventListener("click", function () {

    menu.classList.toggle("active");

});


/* =========================
   FECHAR MENU AO CLICAR
========================= */

const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});


/* =========================
   HORÁRIOS
========================= */

const scheduleModal =
    document.getElementById("scheduleModal");


const modalClose =
    document.getElementById("modalClose");


const modalTitle =
    document.getElementById("modalTitle");


const modalTime =
    document.getElementById("modalTime");


const modalDescription =
    document.getElementById("modalDescription");


const modalWhatsapp =
    document.getElementById("modalWhatsapp");


/* =========================
   DADOS DOS DIAS
========================= */

const horarios = {

    segunda: {

        titulo: "Segunda-feira",

        horario: "08:30 às 17:00",

        descricao:
            "A Venha Sorrir realiza atendimento odontológico neste horário. Toque no botão abaixo para consultar disponibilidade ou solicitar um agendamento."

    },


    terca: {

        titulo: "Terça-feira",

        horario: "08:30 às 17:00",

        descricao:
            "A Venha Sorrir realiza atendimento odontológico neste horário. Toque no botão abaixo para consultar disponibilidade ou solicitar um agendamento."

    },


    quarta: {

        titulo: "Quarta-feira",

        horario: "08:30 às 17:00",

        descricao:
            "A Venha Sorrir realiza atendimento odontológico neste horário. Toque no botão abaixo para consultar disponibilidade ou solicitar um agendamento."

    },


    quinta: {

        titulo: "Quinta-feira",

        horario: "08:30 às 17:00",

        descricao:
            "A Venha Sorrir realiza atendimento odontológico neste horário. Toque no botão abaixo para consultar disponibilidade ou solicitar um agendamento."

    },


    sexta: {

        titulo: "Sexta-feira",

        horario: "08:30 às 17:00",

        descricao:
            "A Venha Sorrir realiza atendimento odontológico neste horário. Toque no botão abaixo para consultar disponibilidade ou solicitar um agendamento."

    },


    sabado: {

        titulo: "Sábado",

        horario: "08:30 às 12:00",

        descricao:
            "A Venha Sorrir realiza atendimento odontológico neste horário. Toque no botão abaixo para consultar disponibilidade ou solicitar um agendamento."

    }

};


/* =========================
   ABRIR HORÁRIO
========================= */

const scheduleButtons =
    document.querySelectorAll(".schedule-item[data-day]");


scheduleButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const day =
            button.getAttribute("data-day");


        const info =
            horarios[day];


        if (!info) {

            return;

        }


        modalTitle.textContent =
            info.titulo;


        modalTime.textContent =
            info.horario;


        modalDescription.textContent =
            info.descricao;


        const mensagem =
            "Olá! Gostaria de consultar a disponibilidade para atendimento na Venha Sorrir em " +
            info.titulo +
            ", no horário de " +
            info.horario +
            ".";


        modalWhatsapp.href =
            "https://wa.me/5579999321127?text=" +
            encodeURIComponent(mensagem);


        scheduleModal.classList.add("show");

        scheduleModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";

    });

});


/* =========================
   FECHAR JANELA
========================= */

function fecharHorario() {

    scheduleModal.classList.remove("show");

    scheduleModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    fecharHorario
);


/* =========================
   FECHAR CLICANDO FORA
========================= */

scheduleModal.addEventListener(
    "click",
    function (event) {

        if (
            event.target === scheduleModal
        ) {

            fecharHorario();

        }

    }
);


/* =========================
   FECHAR COM ESC
========================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            fecharHorario();

        }

    }
);
