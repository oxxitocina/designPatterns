class protein{

    getCost() {
        return 1200
    }
    
    getDescription() {
        return 'Protein drink'
    }
    }
    
    class bcaa {
    
    constructor(drink) {
        this.drink = drink
    }
    
    getCost() {
        return this.drink.getCost() + 200
    }
    
    getDescription() {
        return `${this.drink.getDescription()}+ bcaa`
    }
    }
    
    class creatine {
    
    constructor(drink) {
        this.drink = drink
    }
    
    getCost() {
        return this.drink.getCost() + 200
    }
    
    getDescription() {
        return `${this.drink.getDescription()}+ creatine`
    }
    }

    let sportdrink

    sportdrink = new protein()
    console.log(sportdrink.getCost())
    console.log(sportdrink.getDescription())
    sportdrink = new bcaa(sportdrink)
    console.log(sportdrink.getCost())
    console.log(sportdrink.getDescription())
    sportdrink = new creatine(sportdrink)
    console.log(sportdrink.getCost())
    console.log(sportdrink.getDescription())


    class basicMembership{

        getCost() {
            return 10000
        }
        
        getDescription() {
            return 'basic membership'
        }
        }
        
        class dietPlan {
        
        constructor(membership) {
            this.membership = membership
        }
        
        getCost() {
            return this.membership.getCost() + 5000
        }
        
        getDescription() {
            return `${this.membership.getDescription()}+ diet plan`
        }
        }
        
        class cardioProgram {
        
        constructor(membership) {
            this.membership = membership
        }
        
        getCost() {
            return this.membership.getCost() + 7500
        }
        
        getDescription() {
            return `${this.membership.getDescription()}+ cardio program`
        }
        }
    
        let sportmembership
    
        sportmembership = new basicMembership()
        console.log(sportmembership.getCost())
        console.log(sportmembership.getDescription())
        sportmembership = new dietPlan(sportmembership)
        console.log(sportmembership.getCost())
        console.log(sportmembership.getDescription())
        sportmembership = new cardioProgram(sportmembership)
        console.log(sportmembership.getCost())
        console.log(sportmembership.getDescription())
    
    
        
    