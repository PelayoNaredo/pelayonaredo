function showModal(element) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionTexto = document.getElementById("caption");
  var modalWrapper = document.getElementsByClassName("modal-warper")[0];
  var modalContent = document.getElementsByClassName("modal-content")[0];

  if (element.className != "fotosModa") {
    // Añadir clases si la condición se cumple
    if (modalWrapper) {
      modalWrapper.classList.add("modal-warper-landscape");
    }
    if (modalContent) {
      modalContent.classList.add("modal-content-landscape");
    }
  }
  modal.style.display = "block";
  modalImg.src = element.src;
  captionTexto.innerHTML = element.alt;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  var modalThumbnails = document.getElementById("modal-thumbnails");
  modalThumbnails.innerHTML = "";
  var modalWrapper = document.getElementsByClassName("modal-warper")[0];
  var modalContent = document.getElementsByClassName("modal-content")[0];
  if (modalWrapper) {
    modalWrapper.classList.remove("modal-warper-landscape");
  }
  if (modalContent) {
    modalContent.classList.remove("modal-content-landscape");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img01");
  var captionTexto = document.getElementById("caption");
  var modalThumbnails = document.getElementById("modal-thumbnails");

  var fotos = document.getElementsByClassName("fotoModa");
  var descriptions = [
    {
      titulo: "Deal Black Wear",
      texto: "Descripción de Deal Black Wear...",
      img: "images/fotografía/db2.jpg",
      thumbnails: [
        "images/fotografía/db1.jpg",
        "images/fotografía/db2.jpg",
        "images/fotografía/db3.jpg",
      ],
    },
    {
      titulo: "High Hope Clothing",
      texto: "Descripción de High Hope Clothing...",
      img: "images/fotografía/hh1.jpg",
      thumbnails: [
        "images/fotografía/hh1.jpg",
        "images/fotografía/hh2.jpg",
        "images/fotografía/hh3.jpg",
      ],
    },
    {
      titulo: "Ônne Sport Wear",
      texto: "Descripción de Ônne Sport Wear...",
      img: "images/fotografía/onne3.jpg",
      thumbnails: [
        "images/fotografía/onne1.jpg",
        "images/fotografía/onne2.jpg",
        "images/fotografía/onne3.jpg",
      ],
    },
  ];

  Array.from(fotos).forEach(function (foto, index) {
    foto.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = descriptions[index].img;
      captionTexto.innerHTML = `
            <h3>${descriptions[index].titulo}</h3>
            <p>${descriptions[index].texto}</p>
        `;
      modalThumbnails.innerHTML = ""; // Limpiar thumbnails

      if (
        descriptions[index].thumbnails &&
        descriptions[index].thumbnails.length > 0
      ) {
        modalThumbnails.innerHTML = descriptions[index].thumbnails
          .map((src) => `<img src="${src}" alt="" class="thumbnail">`)
          .join("");
        // Añadir evento de clic a las miniaturas
        var thumbnailElements =
          modalThumbnails.getElementsByClassName("thumbnail");
        Array.from(thumbnailElements).forEach(function (thumbnail) {
          thumbnail.addEventListener("click", function () {
            modalImg.src = this.src;
          });
        });
      }
    });
  });

  var fechas = document.getElementsByClassName("esBar");
  Array.from(fechas).forEach(function (fecha) {
    fecha.addEventListener("click", function () {
      fecha.classList.toggle("abierto");
    });
  });
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };
});
