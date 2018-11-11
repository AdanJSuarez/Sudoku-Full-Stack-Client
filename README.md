# Sudoku-Full-Stack Client
Coding problem to cover different aspect of full stack
This part is specifically for front-end.

It is better begins for Sudoku-Full-Stack-Server (it is the other repository).

## Specification:

- It should render a solved sudoku, it is, a square of 9X9 small squares with a single number in it.
This solved sudoku is sent by sudoku-ws (backend) in a JSON object with at least a field which is an
array of 81 integers.

- It should include a button to reload the sudoku solved (with a new one).

- It should have a spinning image when solved sudoku is loading (waiting for sudoku-ws to send it). Once the solved
sudoku is solved, this spinning image has to desapear showing reload button again.

- It should allow us to select a number (Selected Number) and after press reload button another solved sudoku should
show up but with that selected number in the same position.

- It should be shown as a single application even though there is a backend and Nginx working.

## Assumptions:

### Technology: 
I decided to use Reactjs because is used already by the company. I alse decided to use typescript because usually 
code writen with it ends up with less bugs thanks to be a static typing language (javascript superset to be more specific).

### Construction: 
I decide to decompose sudoku (9X9) square in 3 different React component: SudokuComponent, SudokuLine and SudokuElement.
I decided to do so to let me separate behavious and styles.
It has 1 SudokuComponent, 9 SudokuLine and 81 SudokuElement.
SudokuComponent is composed of 9 SudokuLines.
Each SudokuLine is composed of 9 SudokuElement.
Each component has its own Props: 

- SudokuComponent has sudokuNumbers that is an array with all numbers of a solved sudoku and toggleNumber that is 
an array of length 3 reperesenting the Selected Number [number, row, column]

- SudokuLine has row that is an array respresenting the row in the sudoku, dataLine that is an array representing all the
numbers in that row, a toggleNumber that is an array representing the Selected Number [number, row, column]

- SudokuElement has row that is a number representing the line in which this component is in the sudoku, column that is a
number representing the column in which this component is in the sudoku, dataElement is a number representing the
specific number in this position in the sudoku and toggleNumber that is an array representing the Selected Number [number,
row, column]

All this data is needed under my assumptions to deal with backend (sudoku-ws) to be able first push down the numbers to every
sudokuElement, and to bubble up the Selecte Number from the specific sudokuElement clicked.

Under click, in any element, the toggleNumber is bubble up, through a method call toggleNumber, to App to be POST to the sudoku-ws.

There are other methods in App:
- handleClick: to deal with click in reload button.
- toggledNumber: to bubble up Selected Number.
- getSudoku: used to fetch solved sudoku numbers.
- postNumber: used to POST Selected Number to sudoku-ws.

Method in SudokuComponent:
- getRow: used to get the numbers of an specific row.

There is a Dockerfile with the specification to build the docker image and nginx.conf with specification of how need to work nginx.

### Build

We assume nodejs and docker had been install previously, if not we need to do it.

You just need to type: ./npm run dockerbuild

- It is going to install dependencies.
- It is going to build (again) the React project under ./build
- It is going to build two docker image, sudoku-spa:level-4 and Nginx.

Nginx is used as reverse proxy showing port 80 as just one application. It is build together with sudoku-ws in Dockerfile and
all configuration is in this file.

### Run

To run it just need to type: ./sudo docker run -p 80:80 sudoku-spa:level-4

It need to have sudoku-ws running previously to show the numbers.

To see it as only one application type this in a browser: http://localhost

