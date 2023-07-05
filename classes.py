class Recipe:
   
    def __init__(self,name,country,unique_ingredients,preparation_time,cooking_method,nutritional_value) :
       
        self.name=name
        self.country=country
        self.unique_ingredients=unique_ingredients
        self.preparation_time=preparation_time
        self.cooking_method=cooking_method
        self.nutritional_value=nutritional_value


class MoroccanRecipe(Recipe):


   def __init__(self, name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value):


       super().__init__(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value)




   def cook(self):
      
       return f"For {self.name} in {self.country}  cook the meal with {self.unique_ingredients} for {self.preparation_time} by {self.cooking_method} to gain  more {self.nutritional_value}"
  




class EthopianRecipe(Recipe):
   def __init__(self, name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value):


       super().__init__(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value)


   def cook(self):
              return f"For {self.name} in {self.country}  cook the meal with {self.unique_ingredients} for {self.preparation_time} by {self.cooking_method} to gain  more {self.nutritional_value}"
  




class  NigerianRecipe(Recipe):


   def __init__(self, name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value):


       super().__init__(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value)


   def cook(self):


       return f"For {self.name} in {self.country}  cook the meal with {self.unique_ingredients} for {self.preparation_time} by {self.cooking_method} to gain  more {self.nutritional_value}"
  
moroccan= MoroccanRecipe("Wheat","Morocco","vinegar","30 minutes","grilling","cumin")


ethiopian= EthopianRecipe("chicken_breasts","Ethiopia","white wine","45 minutes","stewing","doro wat")


nigerian=NigerianRecipe("Jollof","Nigeria","pepper","3 hours","stirring","proteins")




print(nigerian.cook())


print(moroccan.cook())


print(ethiopian.cook())



class Recipe:
  def __init__(self,ingredients, preparation_time,cooking_method,nutritional_info):
    self.ingredients = ingredients
    self.preparation_time = preparation_time
    self.cooking_method = cooking_method
    self.nutritional_info = nutritional_info
  
  
  
class KenyanRecipe(Recipe):
  def __init__(self,recipe_name,serving,ingredients,preparation_time,cooking_method,nutritional_info):
       super().__init__(ingredients,preparation_time,cooking_method,nutritional_info)
       self.recipe_name = recipe_name
       self.serving = serving
     
def portions(self,preferred_serving):
 
   if preferred_serving > self.serving:
       portion_amount = round(preferred_serving / self.serving)
       return f"The portion of ingredients can be increased {portion_amount} times "
   elif preferred_serving < self.serving:
       portion_amount = round(self.serving / preferred_serving)
       return f"The portion of ingredients can be decreased {portion_amount} times"
   else:
       return f"The portion of food serves {self.serving}"
recipe1 = KenyanRecipe("githeri", 6, "beans, nuts and maize", "30 mins", "stew", "well balanced meal")
# print(recipe1.portions(6))
  
  
class RwandaRecipe(Recipe):
  def __init__(self,recipe_name,ingredients,preparation_time,cooking_method,nutritional_info):
       super().__init__(ingredients, preparation_time,cooking_method,nutritional_info)
       self.recipe_name = recipe_name
  def allergic(self,allergen):
    if allergen in self.ingredients:
       return f"Beware! {allergen} are in {self.recipe_name} dish"
    else:
       return f"Relax! {allergen} is not in {self.recipe_name} dish"
 
recipe2 = RwandaRecipe("Isombe","beans,meat and onions","30 mins","boil and fry","kills children with no pain")
print(recipe2.allergic("yams"))






class Artist:
    def __init__(self, name, country, music_type, instruments):
        self.name = name
        self.country = country
        self.music_type = music_type
        self.instruments = instruments
    def artist_detail(self):
        print(f"name: {self.name}, country: {self.country}, musicType: {self.music_type}, instruments: {', '.join(self.instruments)}")


class Performance(Artist):
    def __init__(self, name, country, music_type, instruments, stage_time):
        super().__init__(name, country, music_type, instruments)
        self.stage_time = stage_time
    def scheduling(self):
        print(f"name: {self.name}, musicType: {self.music_type}, time: {self.stage_time}")
    def play_instrument(self, instrument):
        if instrument in self.instruments:
            print(f"{self.name} is playing {instrument}")
        else:
            print(f"{self.name} is not playing {instrument}")



class Stage(Artist):
    def __init__(self, name, country, music_type, instruments, capacity, location):
        super().__init__(name, country, music_type, instruments)
        self.capacity = capacity
        self.location = location
    def performance(self):
        print(f"name: {self.name}, country: {self.country}, musicType: {self.music_type}, capacity: {self.capacity}, place: {self.location}")
artist = Artist("jayz", "Canada", "hiphop", instruments=["guitar", "piano"])
artist.artist_detail()
perform = Performance("sautisol", "Kenya", "bongo", instruments=["guitar", "piano"], stage_time="2 hours")
perform.scheduling()
perform.play_instrument("guitar")
stage = Stage("Bridget blue", "Kenya", "gospel", instruments=["piano", "harp", "violin"], capacity=100, location="Nakuru")
stage.performance()





class Artist:
    def __init__(self, country, name, instruments):
        self.country = country
        self.name = name
        self.instruments = instruments
class Performance(Artist):
    def __init__(self, festival_lineup, schedule, band):
        super().__init__(festival_lineup.country, festival_lineup.name, festival_lineup.instruments)
        self.festival_lineup = festival_lineup
        self.schedule = schedule
        self.band = band
class Stage:
    def __init__(self, stage_arrangements, place, audience):
        self.stage_arrangements = stage_arrangements
        self.place = place
        self.audience = audience
artist1 = Artist("Nigeria", "Fela Kuti", ["guitar", "drums"])
artist2 = Artist("Ghana", "Kofi Annan", ["piano", "violin"])
artist3 = Artist("Kenya", "Wangari Maathai", ["flute", "harp"])
performance1 = Performance(artist1, "Friday, 10am", "The Fela Kuti Band")
performance2 = Performance(artist2, "Saturday, 2pm", "The Kofi Annan Quartet")
performance3 = Performance(artist3, "Sunday, 4pm", "The Wangari Maathai Trio")
stage1 = Stage("Open-air stage", "The Great Lawn", 10000)
stage2 = Stage("Indoor stage", "The Concert Hall", 5000)
# Print the festival lineup
print("The festival lineup is:")
for performance in [performance1, performance2, performance3]:
    print(performance.festival_lineup.__dict__)
# Print the schedule
print("\nThe schedule is:")
for performance in [performance1, performance2, performance3]:
    print(performance.schedule)
# Print the stages
print("The stages are:")
for stage in [stage1, stage2]:
    print(stage.stage_arrangements)




class Student:
   def __init__(self, name, age, grades):
       self.name = name
       self.age = age
       self.grades = grades
   def cal_average_grade(self):
       if len(self.grades) == 0:
           return 0
       total_sum = sum(self.grades)
       return total_sum / len(self.grades)
   def student_who_passed(self):
       average_grade = self.cal_average_grade()
       return average_grade >= 60
   def highest_grade(self):
       highest_grade = max(self.grades)
       print("Highest Grade:", highest_grade)
students = [
   Student("Mercy Jebichi", 18, [80, 75, 90]),
   Student("Feith Chepwogen", 19, [70, 85, 65]),
   Student("Alice Ekeno", 20, [90, 80, 95])
]
for student in students:
   print("Name:", student.name)
   print("Age:", student.age)
   print("Grades:", student.grades)
   average_grade = student.cal_average_grade()
   print("Average Grade:", average_grade)
   passing_status = "Passed" if student.student_who_passed() else "Failed"
   print("Passing Status:", passing_status)
   print()


   