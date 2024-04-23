puts "Deleting previous records..."

User.destroy_all
Artist.destroy_all

puts "Complete\n "

puts "Creating users..."

User.create(username: "admin", password: "password")

puts "Complete\n "

puts "Creating artists..."

Artist.create(name: "Ceri May", bio: "Ceri's a wiz mixologist, but I don't know about giving her a tattoo gun.", insta: nil)
Artist.create(name: "Martin Souza", bio: "Martin isn't a tattoo artist, he shouldn't be on here.", insta: "screaming_skvll")
# Artist.create(name: "Justin McCrocklin", bio: "Hello, I am Justin, the owner of have fun tattoo. I have been tattooing since 2004. I started in Champaign, IL and quickly moved to Chicago where I tattooed for 15 years. I relocated to Cleveland five years ago and finally decided to open my own shop in 2023. I like doing everything from the simplest designs to large intricate work. I’ve tried to stay well rounded and offer a variety of styles. I like doing large or small black-and-grey and color work. I lean a lot into bolder and a more traditional style, but can also do delicate and fine line designs as well. I like to paint a lot of flash and always welcome anyone who likes my original designs. I can also take your ideas and design custom work just for you. With the shop I’ve tried to create a calm and relaxed environment that is welcoming to everyone. I like to make the process as smooth and relaxing as possible. I strive for prompt and thorough customer care from the email and planning phase, all the way to aftercare. If you’d like to get something started I prefer email or direct messaging on Instagram.", insta: nil)
    
# Artist.create(name: "Lacey", bio: "I started learning how to tattoo in West Virginia. After finishing my apprenticeship, I decided to relocate to Cleveland, Ohio for better opportunities. My work is traditional-based, and my designs focus on nostalgia and cute stuff. That said, I'm willing to try new things and make your ideas come to life.", insta: nil)

# Artist.create(name: "Betsy Wehrenberg", bio: "Born and raised in beautiful Cleveland, Ohio, I like to make bright, bold, traditional tattoos. I especially love tattooing anything from the natural world: critters, plants, animals, insects, fungi—you name it! I enjoy doing custom work and also always have tons of my own designs I'm itching to tattoo! When I'm not in the shop tattooing or painting, I'm probably in the woods with the dogs or at home cuddling with some combination of our three dogs and three cats. I enjoy traveling with my partner, whether for tattooing or exploring and enjoying nature.", insta: nil)

# Artist.create(name: "Trent", bio: "Hey, I'm Trent! I like to work with classic tattoo imagery as well as customers' custom ideas. Recently I relocated to Have Fun Tattoo in Cleveland from West By God in Virgina. I offer a safe, clean, and positive tattoo experience for everyone.", insta: nil)


puts "Complete\n "

puts "Seeding complete"