  class protein{
    getCost(){
      return 1200;
    };

    getDescription(){
      return 'Protein drink';
    };
  }

  class bcaa {
    constructor(drink){
      this.drink = drink
    }
    getCost(){
      return this.drink.getCost() + 200
    } 

    getDescription(){
      return `${this.drink.getDescription()} + bcaa`
    }
  }
    
  class creatine {
    constructor(drink){
      this.drink = drink
    }   
    getCost(){
      return this.drink.getCost() + 200
    }  

    getDescription(){
      return `${this.drink.getDescription()} + creatine`
    }
  }

  class citrulline {
    constructor(drink) {
      this.drink = drink
    }      
    getCost() {
      return this.drink.getCost() + 100
    }      
    
    getDescription() {
      return `${this.drink.getDescription()} + citrulline`
    }
  }

    const PROTEINBTN = document.querySelector('#protein');
    const BCAABTN = document.querySelector('#bcaa');
    const CREATINEBTN = document.querySelector('#creatine');
    const CITRULBTN = document.querySelector('#citrulline');
    const PRICE = document.querySelector('#priceDrink');
    const DESCRIPTION = document.querySelector('#drinkDescription');
    let sportdrink;
    let totalPrice = 0;

    PROTEINBTN.onclick = function(){
      sportdrink = new protein();
      totalPrice = sportdrink.getCost();
      console.log(sportdrink.getCost());
      console.log(sportdrink.getDescription());
      PRICE.textContent = (totalPrice);
      DESCRIPTION.innerHTML = (sportdrink.getDescription());
    };     
    
    BCAABTN.onclick = function(){
      sportdrink = new bcaa(sportdrink);
      totalPrice = sportdrink.getCost();
      console.log(sportdrink.getCost());
      console.log(sportdrink.getDescription());
      PRICE.textContent = (totalPrice);
      DESCRIPTION.innerHTML = (sportdrink.getDescription());
    };

    CREATINEBTN.onclick = function(){
      sportdrink = new creatine(sportdrink);
      totalPrice = sportdrink.getCost();
      console.log(sportdrink.getCost());
      console.log(sportdrink.getDescription());
      PRICE.textContent = (totalPrice);
      DESCRIPTION.innerHTML = (sportdrink.getDescription());
    };

    CITRULBTN.onclick = function(){
      sportdrink = new citrulline(sportdrink);
      totalPrice = sportdrink.getCost();
      console.log(sportdrink.getCost());
      console.log(sportdrink.getDescription());
      PRICE.textContent = (totalPrice);
      DESCRIPTION.innerHTML = (sportdrink.getDescription());
    };


