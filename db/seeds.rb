puts "Deleting previous records..."

User.destroy_all

puts "Complete\n "

puts "Creating users..."

User.create(username: "admin", password: "password")

puts "Complete\n "

puts "Seeding complete"