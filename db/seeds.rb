# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
9.times do |i|
    Recipe.create(
      name: "Recipe #{i + 1}",
      ingredients: '5 potatoes, 1/2 cup of shredded cheddar cheese, 1 diced tomato, 1 medium onion diced, 4 cloves of garlic finely minced, 1 green pepper chopped, 1 small/medium carrot grated, 5-6 medium (560 g) fresh tomatoes diced or use canned (20 oz), 6 tbsp tomato paste, 2 cups water or vegetable broth, 4 cups cooked or canned beans (e.g. kidney beans, black beans, pinto beans, white beans, or 1 cup of each), 2 tsp coconut sugar or sub brown sugar or any other sweetener like maple syrup, 1 tsp ground cumin, 1 tsp onion powder, 1/2 to 1 tsp garlic powder, 3/4 tsp salt or less if you use vegetable broth, 1/2 tsp black pepper or to taste, 1/2 tsp smoked paprika, Pinch of cayenne pepper, 1-2 hot red chili peppers, snipped chives or chopped parsley to serve (optional)',
      instruction: 'Peel the potatoes and cut them into about 1/2 inch-wide sticks. Place potato sticks in a bowl, sprinkle sugar over them. Set aside until liquid is released from the potatoes (20-25 minutes). After 15 minutes, preheat oven to 425 degrees F (220 C) and line 1 large baking sheet with parchment paper. Spray with cooking spray. Drain liquid from potatoes and dry them well with kitchen paper. Coat fries with the seasonings. You can also use cooking spray on them to make them even crispier but they also turn out crispy without oil. Spread the fries into a single layer on the baking sheet and bake for about 30-40 minutes or until golden brown and crispy. Flip halfway through. You can also use an air fryer and it will take less time (about 25 minutes at 400 degrees F). Meanwhile, start making the chili. In a large pan or pot over medium heat, add in the oil. Sauté the onion and pepper for about 3-4 minutes, add the garlic and sauté for an additional 1-2 minutes, stirring occasionally. Mix in the tomatoes and sauté for another 2-3 minutes. Now add all remaining ingredients, increase the heat and simmer for about 30-40 until thickened, stirring occasionally. Once the fries are ready and the chili is done, make this 3-minute vegan cheese sauce (skip this step if you use store-bought cheese). Serve the fries on a plate, ladle some chili over them and top with a layer of cheese sauce (or vegan cheese of choice). Garnish with fresh herbs.'
    )
end