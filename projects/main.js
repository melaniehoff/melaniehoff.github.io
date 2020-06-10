let arrWorks = []
let titles = []


$(document).ready(function() {


  fillSidebar(works);

  fillInWorks(arrWorks);


});




//populate sidebar
  function fillSidebar(works) {
    arrWorks = Object.values(works);
    // console.log(works.softSurplus.title);
    //  console.log(arrWorks[0].title);
    var i = 0;
    while (i !== arrWorks.length) {
      titles.push("<li class='titles' id='" + arrWorks[i].id + "-sidebar'>" + arrWorks[i].title + "</li>");
      i += 1;
    }
    $("<ul/>", {
      "class": "works-list",
      html: titles.join("")
    }).prependTo("#sidebar");
  }


  function fillInWorks(arrWorks) {
    var i = 0;
    while (i !== arrWorks.length) {

      $('<div>', {
        id: arrWorks[i].id,
        class: "a-work"
      }).append(
        $('<div>', {
          class: 'image',
          html: '<img class="smallImage" src=assets/' + arrWorks[i].id + '.png>'
        }),
        $('<div>', {
          class: 'title',
          text: arrWorks[i].title
        }).append(
          $('<div>', {
            class: 'tooltip',
            html: '<img src=assets/' + arrWorks[i].id + '.png>'
          })
        ),
        $('<div>', {
          class: 'buyNow',
          html: arrWorks[i].buyNow
        }),
        $('<div>', {
          class: 'description',
          html: arrWorks[i].description
        }),
        $('<div>', {
          class: 'website',
          html: "▁ ▂ ▃ " + arrWorks[i].website.join("<br>▁ ▂ ▃ ")
        }),
        $('<div>', {
          class: 'socials',
          html:  arrWorks[i].socials.join("<br>")
        }),
        $('<div>', {
          class: 'relevantLinks',
          html:  "Related links: " + arrWorks[i].relevantLinks.join(" ⤻ ")
        }),
        $('<div>', {
          class: 'press',
          html:  "Selected press: " + arrWorks[i].press.join(" ⤻ ")
        }),
        $('<div>', {
          class: 'collaborationWith',
          text: "Collaborators: " + arrWorks[i].collaborationWith.join(", ")
        })
      ).appendTo('.col2');


      if (jQuery.isEmptyObject(arrWorks[i].collaborationWith) == true){
        $('#'+arrWorks[i].id).find('.collaborationWith').hide();
      }
      if (jQuery.isEmptyObject(arrWorks[i].website) == true){
        $('#'+arrWorks[i].id).find('.website').hide();
      }
      if (jQuery.isEmptyObject(arrWorks[i].socials) == true){
        $('#'+arrWorks[i].id).find('.socials').hide();
      }
      if (jQuery.isEmptyObject(arrWorks[i].relevantLinks) == true){
        $('#'+arrWorks[i].id).find('.relevantLinks').hide();
      }
      if (jQuery.isEmptyObject(arrWorks[i].press) == true){
        $('#'+arrWorks[i].id).find('.press').hide();
      }
      if (jQuery.isEmptyObject(arrWorks[i].buyNow) == true){
        $('#'+arrWorks[i].id).find('.buyNow').hide();
      }

      i += 1;
    }
  };
