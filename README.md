# The Smithing Lizard
This is a basic inventory app for a blacksmith in Skyrim. It allows you to sort through inventory based on damage type (slash/blunt), weapon type (sword/axe/mace), and one-handed/two-handed.

## Getting Started
### Prerequisites
+ Node.js v10.0 or higher
+ PostgreSQL v9.6 or higher
###Installing
***(NOTE)*** *This project requires a .env that is not provided to connect to database, this will be fixed in further versions*
1. Clone the repository: *git clone https://github.com/<your-username>/skyrim-blacksmith-inventory.git*
2. Install dependencies: *npm install*
3. *This is where the .env file would be necessary.*
4. Run the app: *npm start* or *npm devstart* for easier development.
### Usage
Once the app is running, open your web browser and go to http://localhost:3000. You should see the homepage where you can sort through the inventory based on damage type, weapon type, and one/two-handed.

### Built With
+ Express-generator - A scaffolding tool for creating an Express application skeleton.
+ Pug - A template engine for Node.js.
+ PostgreSQL - A powerful, open-source relational database management system.