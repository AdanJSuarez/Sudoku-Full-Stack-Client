 

const URL: string = 'http://127.0.0.1:8080/sudoku/board';

export default function postNumber(selectedNumber: any):any {
    console.log('The selected number is:', selectedNumber)
    fetch(URL, {
        method: 'POST',
        body: JSON.stringify(selectedNumber),
    })
    .then((res) => res.json())
    .then((resJson) => {
        console.log("POST response: ", resJson)
        return {
            currentSudokuNumbers: resJson.numbers,
            loading: false,
            selectedNumber: 0
        }
    })
    .catch(res => (console.log('Error POST: ', res)))
}