# Purpose
This application will be used to take notes while playing a TTRPG. The application will allow the user to create a sortable, searchable collection of notes for the games they play.

# Platforms
This application will run as a webapp and will run on localhost. This may be expanded in the future to allow cross-device note taking.

# User Stories
## Main Story
As a TTRPG player, I want to be able to write notes on a person, place, thing in the game -- or more miscellaneous note -- with an optional list of tags, so that I can create a sortable, searchable collection of notes that corrospond to different ttrpg games.

### Acceptance Criteria
1) The user must be able to write the body of a note
2) Notes must have a title


## Story 1
As a TTRPG player, I want to be able to write and edit notes on a person, place, or thing in the game, as write well as more miscellanious notes, so I can reference them at a later date.

### Acceptance Criteria
1) The user must be able to write a note
2) Each note must have a unique title
    - Each title should be unique only to its game. I.e., Game 1 has a note titled 'Note' and Game 2 has a note also titled 'Note', but neither game can have another note titled 'Note'.
3) Notes must have one of the following types
    - Person
    - Place
    - Thing
    - Misc
4) The notes must be saved and accessible to the user
5) The notes must be editable

## Story 2
*Parent: Story 1 AC 4*

As a TTRPG player, I want to be able to see my notes categorized by type, so that I can more easily find the note I'm looking for.

### Acceptance Criteria
1) The application must display all notes for a game sorted by category

## Story 3
As a TTRPG player, I want to be able to add tags to my notes so I can search for a note by either its title or its tags, so that I can more easily find the note I'm looking for.

### Acceptance Criteria
1) Must be able to add custom tags to a note
2) Must be able to search for a note by title
3) Must be able to search for a note by tags

## Story 4
As a TTRPG player, I want to be able to write notes on multiple ongoing games and keep those game's notes separate, so that I can have a single organized repository of notes for any game I play.

### Acceptance Criteria
1) Must be able to create a game
2) Each game must have a name
3) Notes must be separated by the game they belong to

## Story 5
As a TTRPG player, I want to be able to reference other already created notes within another note using specific syntax, so that I can easily navigate to related information.

### Acceptance Criteria
1) Must be able to use syntax while writing the note to reference another existing note
2) The user must be able to click on the reference to pull up the referenced note
3) Nice-to-have: The user can hover over the reference to pull up a preview of the note without having to open it in full 

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

7) When adding tags, the user should be able to hover over an information icon to be told the rules of tags; i.e., tags must be less than a certain number of characters and cannot contain any commas

# Implementation Notes
This application will use: SQLite, TypeORM, Node.js, and React.

FR1 & FR2:
    The application will use SQLite and TypeORM to facilitate this. Create a Note class with the required attributes and use TypeORM in order to create and manage the data 

FR6, NFR6, & NFR6a:
    Each Game will be stored as an object with a one-to-many relationship with a collection of Notes.
