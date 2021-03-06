const hard_coded_dishes = [
  {
    course: "vorspeisen",
    category: "finger-food",
    name: "NEM CUON",
    ingredient:
      "zwei vietnamesische sommerrollen gefüllt mit reisnudeln, thai-basilikum und koriander, salat, erdnüssen in reispapier gewickelt. dazu hausgemachter dip (nuoc mam dip)",
    price: null,
    options: [
      {
        option: "mit Garnelen",
        price: 3.9
      },
      {
        option: "mit Hähnchenbrustfilet",
        price: 3.5
      },
      {
        option: "vegetarisch",
        price: 3.5
      }
    ]
  },
  {
    course: "vorspeisen",
    category: "finger-food",
    name: "NEM RAN",
    ingredient:
      "zwei vietnamesische frühlingsrollen. in reispapier gefüllt mit glasnudeln und karotten. serviert mit frischem salat und hausgemachtem dip (nuoc mam dip)",
    price: null,
    options: [
      {
        option: "traditionell mit hackfleisch",
        price: 3.9
      },
      {
        option: "vegetarisch",
        price: 3.5
      }
    ]
  },
  {
    course: "vorspeisen",
    category: "finger-food",
    name: "BANH TOM",
    ingredient:
      "drei knusprige süßkartoffel-puffer mit garnelen. serviert mit frischem salat und hausgemachtem dip (nuoc mam dip)",
    price: 4.5
  },
  {
    course: "vorspeisen",
    category: "finger-food",
    name: "BANH GOI",
    ingredient:
      "knusprige teigtasche gefüllt mit glasnudeln, hackfleisch, karotten und ei. serviert mit frischem salat und hausgemachtem dip (nuoc mam dip)",
    price: 3.9
  },
  {
    course: "vorspeisen",
    category: "finger-food",
    name: "GA SATE",
    ingredient:
      "zwei gegrillte hähnchenspieße mit frischem salat und erdnusssauce",
    price: 3.9
  },
  {
    course: "vorspeisen",
    category: "finger-food",
    name: "WANTAN CHIEN",
    ingredient:
      "5 hausgemachte wan tans gefüllt mit hähnchenfleisch. serviert mit frischem salat und fruchtiger soße (auch vegetarisch)",
    price: 3.9
  },
  {
    course: "vorspeisen",
    category: "finger-food",
    name: "QUAN XUA MIX",
    ingredient: "drei selbst gewählte vorspeisen (für zwei personen)",
    price: 9.5
  },
  {
    course: "vorspeisen",
    category: "suppen",
    name: "TOM YAM",
    ingredient:
      "aromatische suppe mit zitronengras, limettenblätter, champignons und kokosmilch",
    price: null,
    options: [
      {
        option: "mit Lachs",
        price: 4.5
      },
      {
        option: "mit Garnelen",
        price: 4.5
      },
      {
        option: "vegetarisch",
        price: 3.5
      }
    ]
  },
  {
    course: "vorspeisen",
    category: "suppen",
    name: "KOKOS SUPPE",
    ingredient: "mit champignons, zwiebeln und kokosmilch",
    price: null,
    options: [
      {
        option: "mit Garnelen",
        price: 4.5
      },
      {
        option: "mit Huhn",
        price: 4.0
      }
    ]
  },
  {
    course: "vorspeisen",
    category: "salat",
    name: "NOM XOAI NGO XEN",
    ingredient:
      "traditioneller lotusstengelsalat mit feinen mangostreifen, karotten, gerösteten erdnüssen, frischen kräutern und hähnchenbrustfilet",
    price: 5
  },
  {
    course: "vorspeisen",
    category: "salat",
    name: "NOM DU DU",
    ingredient:
      "grüne papaya und karotten fein geraspelt dazu geröstete erdnüsse, frische vietnamesische kräuter und hausgemachter dressing",
    price: 5.5
  },
  {
    course: "vorspeisen",
    category: "salat",
    name: "GEMISCHTER SALAT",
    ingredient:
      "frischer salat der saison, kirschtomaten, geröstete erdnüsse mit hausgemachtem dressing",
    price: 5.5
  },
  {
    course: "hauptgerichter",
    category: "nudeln",
    name: "PHO HA NOI",
    ingredient:
      "traditionelle vietnamesische reisbandnudelsuppe in köstlicher sternanis-fleischbrühe mit frühlingszwiebeln und sojakeimlinge und frischen kräutern serviert",
    price: null,
    options: [
      {
        option: "mit Rindfleisch",
        price: 7.9
      },
      {
        option: "mit Hähnchenfleisch",
        price: 7.5
      }
    ]
  },
  {
    course: "hauptgerichter",
    category: "nudeln",
    name: "PHO TRON",
    ingredient:
      "reisbandnudeln mit salat, gerösteten erdnüssen, frische vietnamesischen kräutern wahlweise mit traditionell vietnamesischer sauce oder in einer leichten curry-kokos-sauce",
    price: null,
    options: [
      {
        option: "mit Garnelen",
        price: 8.9
      },
      {
        option: "mit Hähnchenfleisch",
        price: 7.5
      },
      {
        option: "mit Rindfleisch",
        price: 7.9
      }
    ]
  },
  {
    course: "hauptgerichter",
    category: "nudeln",
    name: "BUN BO NAM BO",
    ingredient:
      "reisnudeln mit gegrilltem rindfleisch, salat, frischen vietnamesischen kräutern, erdnüssen dazu hausgemachte sauce (nuoc mam dip)",
    price: 7.9
  },
  {
    course: "hauptgerichter",
    category: "nudeln",
    name: "BUN NEM",
    ingredient:
      "reisnudeln mit vietnamesischen frühlingsrollen, salat, frischen kräutern dazu hausgemachte sauce (nuoc mam dip)",
    price: 7.9
  },
  {
    course: "hauptgerichter",
    category: "nudeln",
    name: "BUN GA NUONG",
    ingredient:
      "reisnudeln mit gegrilltem hähnchenbrustfilet, salat, zitronengras vietnamesischen kräutern, gerösteten erdnüssen und hausgemachte sauce (nuoc mam dip)",
    price: 7.9
  },
  {
    course: "hauptgerichter",
    category: "nudeln",
    name: "BUN CA NUONG",
    ingredient:
      "reisnudeln mit gegrilltem fischfilet, dill, frühlingszwiebeln, salat, geröstete erdnüsse, frische vietnamesische kräuter und hausgemachte sauce (nuoc mam dip)",
    price: 7.9
  },
  {
    course: "hauptgerichter",
    category: "nudeln",
    name: "PHO XAO",
    ingredient:
      "gebratene reisbandnudeln mit ei, asiatischem gemüse, frühlings- zwiebeln",
    price: null,
    options: [
      {
        option: "mit Rindfleisch",
        price: 7.9
      },
      {
        option: "mit Hähnchenfleisch",
        price: 7.5
      }
    ]
  },
  {
    course: "hauptgerichter",
    category: "nudeln",
    name: "PHO UDON XAO",
    ingredient:
      "Gebratene udon-nudeln mit pikanter curry-sauce und asiatischem gemüse, pak-choi",
    price: null,
    options: [
      {
        option: "mit Rindfleisch",
        price: 8.9
      },
      {
        option: "mit Hähnchenfleisch",
        price: 8.5
      },
      {
        option: "mit Ente",
        price: 8.9
      }
    ]
  },
  {
    course: "hauptgerichter",
    category: "HUHN & ENTE",
    name: "GA CARI",
    ingredient:
      "cremiges rotes curry mit gegrilltem hähnchen, saisonalen gemüse, kokosmilch und zitronengras, limettenblätter",
    price: 7.9
  },
  {
    course: "hauptgerichter",
    category: "HUHN & ENTE",
    name: "SWEET and SOUR chicken",
    ingredient:
      "gegrilltes hähnchen mit ananas, paprika, karotten in süß-saurer sauce",
    price: 7.9
  },
  {
    course: "hauptgerichter",
    category: "HUHN & ENTE",
    name: "scharfer hahn",
    ingredient:
      "gegrilltes hühnerbrustfilet mit saisonalem gemüse, thai-basilikum und chilli dazu soja-sauce",
    price: 8.9
  },
  {
    course: "hauptgerichter",
    category: "HUHN & ENTE",
    name: "chicken mango curry",
    ingredient:
      "gegrilltes hähnchen mit frischer mango, ananas, salat, frischen vietnamesischen kräutern und gerösteten erdnüssen",
    price: 7.9
  },
  {
    course: "hauptgerichter",
    category: "HUHN & ENTE",
    name: "chicken QUAN XUA",
    ingredient:
      "gerolltes hähnchenfilet gefüllt mit gemüse serviert in einer bambus schale, gebratener pak-choi und frischen vietnamesischen kräutern",
    price: 8.9
  },
  {
    course: "hauptgerichter",
    category: "HUHN & ENTE",
    name: "ente curry",
    ingredient:
      "cremiges rotes curry mit gebackener ente mit saisonalem gemüse",
    price: 8.9
  },
  {
    course: "hauptgerichter",
    category: "HUHN & ENTE",
    name: "sweet and sour ente",
    ingredient:
      "knusprig gebackene ente mit ananas, paprika, karotten in süß- saurer sauce",
    price: 8.9
  },
  {
    course: "hauptgerichter",
    category: "HUHN & ENTE",
    name: "scharfe ente",
    ingredient:
      "knusprig gebackene ente mit saisonalem gemüse, thai-basilikum und chilli dazu soja-sauce",
    price: 8.9
  },
  {
    course: "hauptgerichter",
    category: "HUHN & ENTE",
    name: "com vit tay cam",
    ingredient:
      "knusprig gebackene ente auf gebratenem curcuma reis und gemüse serviert in einem vietnamesischen 'tay cam'",
    price: 8.9
  },
  {
    course: "hauptgerichter",
    category: "RINDFLEISCH",
    name: "bo luc lac",
    ingredient:
      "gewürfeltes rindfleisch nach vietnamesischer art im wok geschwenkt mit knoblauch, zwiebeln, chilli und frischem gemüse",
    price: 8.5
  },
  {
    course: "hauptgerichter",
    category: "RINDFLEISCH",
    name: "bo curry",
    ingredient:
      "gebratenes rindfleisch mit saisonalem gemüse in cremigem roten curry mit kokosmilch",
    price: 8.5
  },
  {
    course: "hauptgerichter",
    category: "FISCH & GARNELEN",
    name: "ca kho to",
    ingredient:
      "gegrilltes lachsfilet anschließend im tontopf geschmort, mit frühlingszwiebeln, ingwer und chilli in einer traditionell- vietnamesisch karamellisierten sauce, serviert im tontopf und gedämpften gemüse",
    price: 10.5
  },
  {
    course: "hauptgerichter",
    category: "FISCH & GARNELEN",
    name: "garnelen curry",
    ingredient:
      "gebratene garnelen mit zitronengras, chilli und frischem gemüse in rotem curry mit kokosmilch",
    price: 10.5
  },
  {
    course: "hauptgerichter",
    category: "FISCH & GARNELEN",
    name: "honig ingwer garnelen",
    ingredient:
      "gebratene garnelen mit zitronengras, limettenblätter, ingwer, chilli und wok-Gemüse, verfeinert mit koriander und sesam",
    price: 10.5
  },
  {
    course: "hauptgerichter",
    category: "VEGETARISCH",
    name: "pho chay",
    ingredient:
      "traditionelle vietnamesische reisbandnudelsuppe mit tofu, frühlingszwiebeln und sojakeimlinge und frischen kräutern serviert",
    price: 7.0
  },
  {
    course: "hauptgerichter",
    category: "VEGETARISCH",
    name: "pho xao chay",
    ingredient:
      "gebratene reisbandnudeln mit tofu, asiatischem gemüse, ei, frühlingszwiebeln",
    price: 7.5
  },
  {
    course: "hauptgerichter",
    category: "VEGETARISCH",
    name: "pho tron chay",
    ingredient:
      "reisbandnudeln mit tofu, salat, gerösteten erdnüssen, frische vietnamesischen kräutern in einer leichten curry-kokos-sauce",
    price: 7.5
  },
  {
    course: "hauptgerichter",
    category: "VEGETARISCH",
    name: "bun nem chay",
    ingredient:
      "reisnudeln mit vegetarischen frühlingsrollen, salat, frischen kräutern dazu hausgemachte sauce (nuoc mam dip)",
    price: 7.5
  },
  {
    course: "hauptgerichter",
    category: "VEGETARISCH",
    name: "mi udon xao chay",
    ingredient:
      "gebratene udon-nudeln mit tofu und asiatisches gemüse in einer pikanter curry-sauce",
    price: 7.5
  },
  {
    course: "hauptgerichter",
    category: "VEGETARISCH",
    name: "dau phu xot ca chua",
    ingredient:
      "gebratener tofu in tomatensauce nach vietnamesischer art mit ananas, lauchzwiebeln. serviert mit reis und salat",
    price: 7.5
  },
  {
    course: "hauptgerichter",
    category: "VEGETARISCH",
    name: "dau phu tam hanh",
    ingredient:
      "gebratener tofu mit frühlingszwiebeln in traditionell-vietnamesischer sauce serviert mit reis",
    price: 7.0
  },
  {
    course: "hauptgerichter",
    category: "VEGETARISCH",
    name: "cari chay",
    ingredient:
      "gebratener tofu in cremigem roten curry mit kokosmilch mit asiatischem gemüse und süßkartoffeln. serviert mit reis",
    price: 7.5
  },
  {
    course: "dessert",
    category: "DESSERT",
    name: "banh chuoi ran",
    ingredient:
      "bananenbällchen ausgebacken im teigmantel mit honig und mandelsplitter",
    price: 3.0
  },
  {
    course: "dessert",
    category: "DESSERT",
    name: "kem",
    ingredient: "grüntee matcha eis mit früchten garniert",
    price: 4.0
  }
];

$(function() {
  displayMenu();
  switchMenuTab();
});

// get the menu and display to the DOM
function displayMenu() {
  const menu = document.querySelector("#menu");
  let dishes = hard_coded_dishes;

  dishes.forEach(dish => {
    // generate template for main ingredient and the name of the dish
    const main = displayDish(
      dish.course,
      dish.name,
      dish.price,
      dish.ingredient
    );

    // generate options for each dish
    const options = [];

    if (dish.options) {
      dish.options.forEach(option => {
        options.push(displayOption(option.option, option.price));
      });
    }

    // add this to the DOM
    menu.insertAdjacentHTML("beforeend", main + options.join(""));
  });
}

// @params: course : String: enum: vorspeisen, hauptgerichter, dessert
// @params: name : String
// @params: price: Number
// @params: ingredient : String
// function receive these input and return a template string which display main ingredient and name and price of a dish.
function displayDish(course, name, price, ingredient) {
  return `
  <div class="dish ${course}">
  <div class="dish--heading">
    <h4 class="text-primary dish--name">${name}</h4>
    <h4 class="dish--price text-primary text-right">${
      price ? parseFloat(price) + "€" : ""
    }</h4>
  </div>
  <p class="text-dark dish--ingredients">
    ${ingredient}
  </p>
  `;
}

// @params: option : String (mit Garnelen, mit Ente, ...)
// @params : price : Number
// function display optional choices with corresponding prices of a dish (if available)
function displayOption(option, price) {
  return `
<div class="text-dark dish--option">
<p class="text-dark">${option}</p>
<p class="dish--price text-primary text-right">${parseFloat(price)}€</p>
</div>
`;

  // <div class="text-dark dish--option">
  // <p class="text-dark">${option}</p>
  // <p class="dotted"></p>
  // <p class="dish--price text-primary text-right">${parseFloat(price)}€</p>
  // </div>
}

// @params : null
// function add click event to menu-tabs (VORSPEISEN, HAUPTSPEISEN, DESSERT), so that when users click on a menu tab, the corresponding menu will be shown (by adding class 'show' to dishes)
function switchMenuTab() {
  const vorspeisen = Array.from(document.getElementsByClassName("vorspeisen"));
  const dishes = Array.from(document.getElementsByClassName("dish"));
  const menuTabs = Array.from($(".menuTab"));

  // show VORSPEISEN by default
  vorspeisen.forEach(vorspeise => {
    vorspeise.classList.add("show");
  });

  // add clickEventListener to menuTabs
  menuTabs.forEach(tab => {
    tab.addEventListener("click", e => {
      // I - remove class 'active' from other tab
      menuTabs.forEach(tab => {
        tab.classList.remove("active");
      });

      // in case clicked on child element, the e.target will not be the desired element. So we target then on the parent element
      // II - add class 'active' to clicked Tab

      if (e.target.classList[0] !== "menuTab") {
        e.target.parentElement.classList.add("active");
        e.target.parentElement.parentElement.classList.add("active");
      }
      e.target.classList.add("active");

      // III - remove class 'show' from all dishes
      dishes.forEach(dish => {
        dish.classList.remove("show");
      });

      // IV - add class 'show' to desired dishes
      const desiredDishes =
        e.target.parentElement.parentElement.dataset.tabtype ||
        e.target.parentElement.dataset.tabtype ||
        e.target.dataset.tabtype; //vorspeisen, hauptgerichter, dessert

      Array.from(document.getElementsByClassName(desiredDishes)).forEach(
        dish => {
          dish.classList.add("show");
        }
      );
    });
  });
}
