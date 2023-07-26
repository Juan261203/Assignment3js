document.getElementById("smoothieForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const flavor = document.getElementById("flavor").value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const toppings = Array.from(document.getElementById("toppings").selectedOptions).map(option => option.value);
  
    
    const smoothie = new Smoothie(flavor, size, toppings);
  
    // Display smoothie description
    document.getElementById("smoothieOutput").innerHTML = `
      <h2>Smoothie Ordered</h2>
      <p>Flavor: ${smoothie.flavor}</p>
      <p>Size: ${smoothie.size}</p>
      <p>Toppings: ${smoothie.toppings.join(", ")}</p>
    `;
  });
  
  class Smoothie {
    constructor(flavor, size, toppings) {
      this.flavor = flavor;
      this.size = size;
      this.toppings = toppings;
    }
  }
  
