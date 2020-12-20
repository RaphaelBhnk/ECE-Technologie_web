
# Chat application - final project

Welcome to our final project web application ! After some hard work from our part, the application work correctly.
Enjoy it !

## Usage

*how to start and use the application, run the tests, ...*

* Clone this repository, from your local machine:
  ```
  git clone https://github.com/adaltas/ece-2020-fall-webtech-project.git webtech
  cd webtech
  ```
* Install [Go](https://golang.org/) and [Dex](https://dexidp.io/docs/getting-started/). For example, on Ubuntu, from your project root directory:   
  ```
  # Install Go
  apt install golang-go
  # Download Dex
  git clone https://github.com/dexidp/dex.git
  # Build Dex
  cd dex
  make
  make examples
  ```
  Note, the provided `.gitignore` file ignore the `dex` folder.
* Register your GitHub application, get the clientID and clientSecret from GitHub and report them to your Dex configuration. Modify the provided `./dex-config/config.yml` configuration to look like:
  ```yaml
  - type: github
    id: github
    name: GitHub
    config:
      clientID: xxxx98f1c26493dbxxxx
      clientSecret: xxxxxxxxx80e139441b637796b128d8xxxxxxxxx
      redirectURI: http://127.0.0.1:5556/dex/callback
  ```
* Inside `./dex-config/config.yml`, the frond-end application is already registered and CORS is activated. Now that Dex is built and configured, your can start the Dex server:
  ```yaml
  cd dex
  bin/dex serve dex-config/config.yaml
  ```
* Start the back-end
  ```bash
  cd back-end
  # Install dependencies (use yarn or npm)
  yarn install
  # Optional, fill the database with initial data
  bin/init
  # Start the back-end
  bin/start
  ```
* Start the front-end
  ```bash
  cd front-end
  # Install dependencies (use yarn or npm)
  yarn install
  # Start the front-end
  yarn start
  ```

## Author

Raphael BOUHNIK, raphael.bouhnik@edu.ece.fr && Adrien ZYCHOWSKI, adrien.zychowski@edu.ece.fr

## Tasks

Project management

* Naming convention   
  We respected the community conventions as well as we could.
* Project structure   
  We used simple name files/services and components, so the structure is well understandable. From the start of the project, we added Edit.js and Settings.js. Both names are easisy understandable.
* Code quality   
  We took care about the understandability and we used 'Prettier' to identitate proprely
* Design, UX   
  We used a lot of material UI stuff, somes PopUps and one backgroundImage for the connexion with oauth
* Git and DevOps   
  We used one Branch each with our names, each commit was for one new feature.

Application development

* Welcome screens   
  The user arrived on the Login page where he can found the oauth login button. We provided a backgroundImage with one Lampe.
* New channel creation   
  We inserted a button "ADD CHANNEL" that, when clicked, shows a popup, which enable the user to create his own channels.
* Channel membership and access   
  We have an owner attribute for each channel. If the user does not exist in the data base, he should create an account and his email will be x linked with his account
* Ressource access control   
  A user can only gain access to the channel he created, the channel where he is administrator and the channels he was invited to. Moreover, we created another status called 'Administrator' which allows the user to invite new members in the channels and make someone alse administrator as well.
* Invite users to channels   
  The creator and administrators can add new members to channel, the new members will have no right except to write message inside the channel.
* Message modification   
  We created a 'modif icon' for the messages of the user, which allow the user to edit the first message he sent.
* Message removal   
  We created a 'delete icon' for the messages of the user, but this button actually does not work.
* Account settings   
  We created a Setting page, which allows the user to update his data. All labels must be filled before clicking the 'CREATE' button. He can change his Username, his bio and his avatar's photo among thoses we created. When he clicked the 'CREATE' button, all the data will be update automatically and he will be able to see his changes in the Header if he changed his photo or bio.
* Gravatar integration   
  If a user does not have a Gravatar account, we will displayed a random idendicon image in the Header when he first register in the app. If he has a Gravatar Account, his photo will load in the Header. If he decided to change his photo when creating his account/updating his account, his photo will be replace by the photo his picked. If he decided to retake his gravatar photo, he has to fill '0' in the form.
* Avatar selection   
  We provided a 9 choices image, and the user can decide if he want to take one as his avatar image by doing it from the form.
* Personal custom avatar   
  We did not achieve this task.

## Bonus

Three Status : 
-"Owner" : he can rename a channel/ Add member / make someone Administrator / write messages
-"Administrator" : he can :  Add member / make someone Administrator/ write messages
-"Member" : he can :  he can write messages

In the bin/init of the back-end, we decided to put this email: 'david@adaltas.com' as Administrator in Channel 1, Owner in Channel 2 and member in Channel 3. So you will be able to see the difference. 