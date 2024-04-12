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

puts "Complete\n "

puts "Seeding complete"