// class Story {
//     constructor(title, description, moral_lesson, ageGroup) {
//     this.title = title;
//     this.text = description;
//     this.moral = moral_lesson;
//     this.ageGroup = ageGroup;
//     }
//     }
//     class StoryTeller {
//     constructor(name, title, language) {
//     this.name = name;
//     this.title = title;
//     this.language = language;
//     }
//     tellStories () {
//     return `${this.name} is telling ${this.title} in ${this.language}`;
//     }
    
    
//     };
//     let story= new StoryTeller("Grace Ogot","Tekayo","Luo")
//     console.log(story.tellStories());
//     class Translator extends StoryTeller {
//     constructor(name, title, language,targetLanguage) {
//     super()
//     this.name= name;
//     this.title=title;
//     this.language=language;
//     this.targetLanguage= targetLanguage;
    
    
//     }
    
    
//     tellStory(){
    
    
//     return ` ${this.name} translates ${this.title } from ${this.language} to ${this.targetLanguage} `
//     }
    
    
//     }
// const translate= new Translator ("Paula Karimi","Tekayo","Luo","Kiswahili")
// console.log(translate.tellStory()) ;




// class Recipe {
//     constructor(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value) {
//       this.name = name;
//       this.country = country;
//       this.unique_ingredients = unique_ingredients;
//       this.preparation_time = preparation_time;
//       this.cooking_method = cooking_method;
//       this.nutritional_value = nutritional_value;
//     }
//   }
  
//   class MoroccanRecipe extends Recipe {
//     constructor(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value) {
//       super(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value);
//     }
  
//     cook() {
//       return `For ${this.name} in ${this.country}, cook the meal with ${this.unique_ingredients} for ${this.preparation_time} by ${this.cooking_method} to gain more ${this.nutritional_value}`;
//     }
//   }
  
//   class EthiopianRecipe extends Recipe {
//     constructor(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value) {
//       super(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value);
//     }
  
//     cook() {
//       return `For ${this.name} in ${this.country}, cook the meal with ${this.unique_ingredients} for ${this.preparation_time} by ${this.cooking_method} to gain more ${this.nutritional_value}`;
//     }
//   }
  
//   class NigerianRecipe extends Recipe {
//     constructor(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value) {
//       super(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value);
//     }
  
//     cook() {
//       return `For ${this.name} in ${this.country}, cook the meal with ${this.unique_ingredients} for ${this.preparation_time} by ${this.cooking_method} to gain more ${this.nutritional_value}`;
//     }
//   }
  
//   const moroccan = new MoroccanRecipe("Wheat", "Morocco", "vinegar", "30 minutes", "grilling", "cumin");
//   const ethiopian = new EthiopianRecipe("chicken_breasts", "Ethiopia", "white wine", "45 minutes", "stewing", "doro wat");
//   const nigerian = new NigerianRecipe("Jollof", "Nigeria", "pepper", "3 hours", "stirring", "proteins");
  
//   console.log(nigerian.cook());
//   console.log(moroccan.cook());
//   console.log(ethiopian.cook());
  


//   class Recipe{
//     constructor(uniqueIngredient, preparationtime, cookingmethod,nutritionalinformation) {
//          this.uniqueIngredient=uniqueIngredient;
//          this.preparationtime=preparationtime;
//          this.cookingmethod=cookingmethod;
//          this.nutritionalinformation=nutritionalinformation;
//          this.ingredients=[];
//          }
//       addingredient(){
//           if(!this.ingredients.includes("onions")){
//               this
//               .ingredients.push("Onion");
//           }
//           else{
//               throw "You can't add the same ingrediant twice";
//           }
//         };
//   printIngredients (){
//     return `${this.ingredients}`
//   }
//   printUniqueIngredient () {
//        return `${this.uniqueIngredient}`;
//   };
//   printPreparationTime() {
//       return  `${this.preparationtime}`;
//   };
//   printCookingMethod() {
//       return `${this.cookingmethod}`;
//   };
//   }



//   class Recipe {
//     constructor(ingredients, preparationTime, cookingMethod, nutritionalInfo) {
//          this.ingredients = ingredients;
//          this.preparationTime = preparationTime;
//          this.cookingMethod = cookingMethod;
//          this.nutritionalInfo = nutritionalInfo;
//     }
//     }
//     class KenyanRecipe extends Recipe {
//     constructor(recipeName, serving, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
//          super(ingredients, preparationTime, cookingMethod, nutritionalInfo);
//          this.recipeName = recipeName;
//          this.serving = serving;
//     }
//     portions(preferredServing) {
//          if (preferredServing > this.serving) {
//              const portionAmount = Math.round(preferredServing / this.serving);
//              return `The portion of ingredients can be increased ${portionAmount} times`;
//          } else if (preferredServing < this.serving) {
//              const portionAmount = Math.round(this.serving / preferredServing);
//              return `The portion of ingredients can be decreased ${portionAmount} times`;
//          } else {
//              return `The portion of food serves ${this.serving}`;
//          }
//     }
//     }
//     class RwandaRecipe extends Recipe {
//     constructor(recipeName, ingredients, preparationTime, cookingMethod, nutritionalInfo) {
//          super(ingredients, preparationTime, cookingMethod, nutritionalInfo);
//          this.recipeName = recipeName;
//     }
//     allergic(allergen) {
//          if (this.ingredients.includes(allergen)) {
//              return `Beware! ${allergen} are in ${this.recipeName} dish`;
//          } else {
//              return `Relax! ${allergen} is not in ${this.recipeName} dish`;
//          }
//     }
//     }
//     const recipe1 = new KenyanRecipe("githeri", 6, "beans, nuts and maize", "30 mins", "stew", "well balanced meal");
//     console.log(recipe1.portions(6));
//     const recipe2 = new RwandaRecipe("Isombe", ["beans", "meat", "onions"], "30 mins", "boil and fry", "kills children with no pain");
//     console.log(recipe2.allergic("yams"));
//     console.log(recipe2.allergic("beans"));




//   class Species {
//     constructor(diet, typicalLifespan, migrationPatterns) {
//       this.diet = diet;
//       this.typicalLifespan = typicalLifespan;
//       this.migrationPatterns = migrationPatterns;
//     }
  
//     typeOfAnimal() {
//       if (this.diet === "herbivorous") {
//         console.log("This animal is not a danger to other animals.");
//       } else if (this.diet === "omnivorous") {
//         console.log("This animal feeds on plants but also feeds on some animals.");
//       } else {
//         console.log("This animal is very dangerous to other animals and does not eat plants.");
//       }
//     }
//   }
  
//   class Predator extends Species {
//     constructor(diet, typicalLifespan, migrationPatterns, typeOfTeeth, claws, venom, name) {
//       super(diet, typicalLifespan, migrationPatterns);
//       this.typeOfTeeth = typeOfTeeth;
//       this.claws = claws;
//       this.venom = venom;
//       this.name = name;
//     }
  
//     fastKillers() {
//       if (this.venom) {
//         console.log(`The bite of a ${this.name} can be lethal.`);
//       } else {
//         console.log(`The bite of a ${this.name} is not lethal.`);
//       }
//     }
  
//     methodOfKilling() {
//       if (this.typeOfTeeth.includes("carnassial teeth")) {
//         console.log(`A ${this.name} kills by slicing up their prey.`);
//       } else {
//         console.log("This predator cannot shear their prey's meat after attacks.");
//       }
//     }
//   }
  
//   class Prey extends Species {
//     constructor(diet, typicalLifespan, migrationPatterns, defenseMechanisms, name) {
//       super(diet, typicalLifespan, migrationPatterns);
//       this.defenseMechanisms = defenseMechanisms;
//       this.name = name;
//     }
  
//     addDefenseMechanism(defenseMechanism) {
//       this.defenseMechanisms.push(defenseMechanism);
//     }
//   }
  
//   const pred = new Species("grass", "40years", "easttowest");
//   pred.typeOfAnimal();
  
//   const deer = new Prey('herbivore', 10, 'seasonal', ['camouflage'], 'Deer');
//   console.log(deer.defenseMechanisms);
  
//   const lion = new Predator('carnivore', 15, 'non-migratory', ['carnassial teeth'], 'sharp claws', false, 'Lion');
//   lion.methodOfKilling();
//   lion.fastKillers();
  
//   deer.addDefenseMechanism('speed');
//   console.log(deer.defenseMechanisms);
  



//   class Artist {
//     constructor(name, country, musicType, instruments) {
//       this.name = name;
//       this.country = country;
//       this.musicType = musicType;
//       this.instruments = instruments;
//     }
  
//     artistDetail() {
//       console.log(`name: ${this.name}, country: ${this.country}, musicType: ${this.musicType}, instruments: ${this.instruments.join(', ')}`);
//     }
//   }
  
//   class Performance extends Artist {
//     constructor(name, country, musicType, instruments, stageTime) {
//       super(name, country, musicType, instruments);
//       this.stageTime = stageTime;
//     }
  
//     scheduling() {
//       console.log(`name: ${this.name}, musicType: ${this.musicType}, time: ${this.stageTime}`);
//     }
  
//     playInstrument(instrument) {
//       if (this.instruments.includes(instrument)) {
//         console.log(`${this.name} is playing ${instrument}`);
//       } else {
//         console.log(`${this.name} is not playing ${instrument}`);
//       }
//     }
//   }
  
//   class Stage extends Artist {
//     constructor(name, country, musicType, instruments, capacity, location) {
//       super(name, country, musicType, instruments);
//       this.capacity = capacity;
//       this.location = location;
//     }
  
//     performance() {
//       console.log(`name: ${this.name}, country: ${this.country}, musicType: ${this.musicType}, capacity: ${this.capacity}, place: ${this.location}`);
//     }
//   }
  
 
  
//   class FestivalLineup extends Artist {
//     constructor(country, name, instruments) {
//       super(country, name, instruments);
//     }
//   }
  

//   const artist1 = new Artist("Nigeria", "Fela Kuti", ["guitar", "drums"]);
//   const artist2 = new Artist("Ghana", "Kofi Annan", ["piano", "violin"]);
//   const artist3 = new Artist("Kenya", "Wangari Maathai", ["flute", "harp"]);
  
//   const performance1 = new Performance(artist1, "Friday, 10am", "The Fela Kuti Band");
//   const performance2 = new Performance(artist2, "Saturday, 2pm", "The Kofi Annan Quartet");
//   const performance3 = new Performance(artist3, "Sunday, 4pm", "The Wangari Maathai Trio");
  
//   const stage1 = new Stage("Open-air stage", "The Great Lawn", 10000);
//   const stage2 = new Stage("Indoor stage", "The Concert Hall", 5000);


//   const artist = new Artist("jayz", "Canada", "hiphop", ["guitar", "piano"]);
//   artist.artistDetail();
  
//   const perform = new Performance("sautisol", "Kenya", "bongo", ["guitar", "piano"], "2 hours");
//   perform.scheduling();
//   perform.playInstrument("guitar");
  
//   const stage = new Stage("Bridget blue", "Kenya", "gospel", ["piano", "harp", "violin"], 100, "Nakuru");
//   stage.performance();
  
//   console.log("The festival lineup is:");



  class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
    
    calculateTotalValue() {
      if (this.quantity > 0) {
        return this.price * this.quantity;
      } else {
        return 0;
      }
    }
  }
  
  const products = [
    new Product("pen", 10.5, 100),
    new Product("Book", 0.5, 150),
    new Product("sharpener", 0.2, 120)
  ];
  
  let totalValue = 0;
  
  for (let i = 0; i < products.length; i++) {
    if (products[i].quantity > 0) {
      totalValue += products[i].calculateTotalValue();
    }
  }
  
  console.log("Total value of all products:", totalValue);
  

  

  class Student {
    constructor(name, age, grades) {
      this.name = name;
      this.age = age;
      this.grades = grades;
    }
    calculateAverageGrade() {
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return sum / this.grades.length;
    }
    hasPassed() {
      const averageGrade = this.calculateAverageGrade();
      return averageGrade >= 60 && this.grades.length >= 3;
    }
    displayHighestGrade() {
      const highestGrade = Math.max(...this.grades);
      console.log("Highest Grade:", highestGrade);
    }
  }
  const students = [
    new Student("Mercy Jebichi", 18, [80, 75, 90]),
    new Student("Feith Chepwogen", 19, [70, 85, 65]),
    new Student("Alice Ekeno", 20, [90, 80, 95])
  ];
  for (const student of students) {
    console.log("Student information:");
    console.log("Name:", student.name);
    console.log("Age:", student.age);
    console.log("Grades:", student.grades);
    const averageGrade = student.calculateAverageGrade();
    console.log("Average Grade:", averageGrade);
    const passingStatus = student.hasPassed() ? "Passed" : "Failed";
    console.log("Passing Status:", passingStatus);
    student.displayHighestGrade();
    console.log();
  }








class LibraryCatalog {

    constructor() {
        this.books = [];
    }

    addBook(title, author, numCopies) {
        const book = {
            title,
            author,
            numCopies,
        };
        this.books.push(book);
    }

    searchByTitle(title) {
        return this.books.find((book) => book.title === title);
    }

    searchByAuthor(author) {
        return this.books.filter((book) => book.author === author);
    }

    getAvailableCopies(title) {
        const book = this.searchByTitle(title);
        if (book) {
            return book.numCopies;
        }
        return 0;
    }

    displayBookDetails(title) {
        const book = this.searchByTitle(title);
        if (book) {
            console.log("Title:", book.title);
            console.log("Author:", book.author);
            console.log("Number of copies:", book.numCopies);
        } else {
            console.log("Book not found");
        }
    }
}


const catalog = new LibraryCatalog();
catalog.addBook("The Hitchhiker's Guide to the Galaxy", "Douglas Adams", 10);
const book = catalog.searchByTitle("The Hitchhiker's Guide to the Galaxy");
catalog.displayBookDetails(book.title);
