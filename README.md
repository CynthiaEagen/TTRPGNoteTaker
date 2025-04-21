# Purpose
This application will be used to take notes while playing a TTRPG.

# Platforms
This application will run as a webapp and will run on localhost. This may be expanded in the future to allow cross-device note taking.

# Requirements
## Functional Requirements:
1) The user must be able to write a note. The note must have the following features:
    - Title
    - Type (Person, Place, Thing, Misc)
    - Body
    - Custom tags

2) The app must save the note to be accessed later

3) The user must be able to search for a note by Title and/or Tags

4) The user must be able to view notes by Type (NFR1)

5) While writing a note, you must be able to reference another note using specific syntax. When viewing the note after it is saved, the user must be able to click on that note to view the referenced note

5a. Clicking on a referenced note must open the note

5b. Hovering over a referenced note must show a popup blurb showing a portion of the note.

6) The user must be able to add additional Games to take notes on. A Game is a named collection of notes

## Nonfunctional Requirements:

1) The app should have a sidebar that has containers/drop down lists for each Type (FR4). These containers should hold the notes of that type

1a. The app should allow filtering and sorting of the containers

2) The app should have a main section in the center of the screen for writing and viewing notes

2a. The main section should include:
    - Title, single line text box
    - Type, dropdown menu
    - Body, fixed size scrollable multiline text box
    - Tags, single line text box for adding to a list

2b. The main section should never change in its formatting. When viewing an existing note, the data should populate their respective fields. When adding a note, the fields should be cleared

3) The app should have a button that allows adding a new note

4) The app should save the current note when:
    - The save button is pressed,
    - The new note button (NFR3) is pressed
    - The user opens another note

5) The search results (FR3) must include the notes Title, Type, Tags, and a small portion of the Body

6) The user must be able to select which Game is open upon opening the app (FR6)

6a. The user must be able to switch which Game is open from a menu

# Implementation Notes
This application will use: SQLite, TypeORM, Node.js, and React.

FR1 & FR2:
    The application will use SQLite and TypeORM to facilitate this. Create a Note class with the required attributes and use TypeORM in order to create and manage the data 

FR6, NFR6, & NFR6a:
    Each Game will be stored as a separate table.

