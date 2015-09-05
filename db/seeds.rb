# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

user = User.create({email: 'koolschoolfan@gmail.com',
                     password: 'auro1234'})
project = Project.create({Name: 'Yo', Description: 'lelelel'})
#User.projects.create
#ProjectUser.create :user => @User, :project => @Project
#user.projects.create({Name: 'Lol', Description: 'lololol'})