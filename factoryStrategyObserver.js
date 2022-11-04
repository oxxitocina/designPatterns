  class Person {
    constructor(name, weight){
      this.name = name
      this.weight = weight
    }

    getName(){
      return this.name
    }

    getWeight(){
      return this.weight
    }
  }

  const Factory = {
    createPerson : (name, weight) => new Person(name, weight)
  }

  let personName;
  let weight;
  let counter = 0;
  let PERSONS = [];
  const FORM = document.querySelector('#form');
  const BUTTON = document.querySelector('#submit');
  const PROGRAM = document.querySelector('#program');
  const PROGRAMHEADER = document.querySelector('#program-header');
  const NOTIFICATION = document.querySelector('#notification');


  BUTTON.onclick = function(){
    personName = document.getElementById('#name').value;
    weight = document.getElementById('#weight').value;

    const PERSON = Factory.createPerson(personName, weight);
    console.log('name:', PERSON.getName());
    console.log('weight:', PERSON.getWeight());

    PERSONS.push(PERSON);
    let personObj = PERSONS[counter];
    weighing(personObj);
    counter++;

    const message = new Member(personObj.name)
    const MembershipNot = new MembershipNotifications()
    MembershipNot.subscribe(message)
    MembershipNot.sendnotifications(notification('don`t forget about training today at 8 o`clock in the morning! '))
  };

  function weighing(personObj){
    if(personObj.weight < 100){
      return normalWeight();
    }else{
      return overWeight();
    }
  };

  function overWeight(){
    console.log('more than 100');
      PROGRAMHEADER.innerHTML = (`Here is your program!`);
        PROGRAM.innerHTML = (`Walking: at least 10.000 steps per day.<br>
        Bench press 3 sets 15 reps with 50% of the repeated maximum.<br>
        Deadlift 3 sets 15 reps with 50% of the repeated maximum.<br>
        Squats 3 sets 15 reps with 50% of the repeated maximum.<br>
        Crunches 25 reps.
        <br><br>
        Practice 3-4 times a week. It is necessary to walk every day.After a month of training, the program will change.`);
  };

  function normalWeight(){
    console.log('less than 100');
      PROGRAMHEADER.innerHTML = (`Here is your program!`);
        PROGRAM.innerHTML = (`
          Super set(1):<br>
          Dips 3 sets 8 reps with 80% of the repeated maximum.<br>
          Biceps curls 3 sets 8 reps with 80% of the repeated maximum.<br>
          Super set(2):<br>
          Barbell bent over row 3 sets 8 reps with 80% of the repeated maximum.<br>
          Shoulder shrug 3 sets 8 reps with 80% of the repeated maximum.<br>
          Crunches 25 reps.<br><br>

          Super set(1):<br>
          Dips 3 sets 12 reps with 60% of the repeated maximum.<br>
          Biceps curls 3 sets 12 reps with 60% of the repeated maximum.<br>
          Super set(2):<br>
          Barbell bent over row 3 sets 12 reps with 60% of the repeated maximum.<br>
          Shoulder shrug 3 sets 12 reps with 60% of the repeated maximum.<br>
          Crunches 25 reps.<br><br>

          Alternate heavy workouts and light workouts. The program will change in a month.
        `);
  };
    
  
  const notification = title => ({
    title: title
  });
  
  class Member {
    constructor(name) {
        this.name = name
    }

    notify(notification) {
        console.log(this.name, ',', notification.title);
        NOTIFICATION.innerHTML = (this.name + ', ' + notification.title);
    };
  };
  
  class MembershipNotifications {
    constructor() {
      this.subscribers = []
    };

    subscribe(Member) {
      this.subscribers.push(Member)
    };

    sendnotifications(notifications) {
      this.subscribers.forEach(subscriber => {
        subscriber.notify(notifications)
      });
    };
  };
  
      


