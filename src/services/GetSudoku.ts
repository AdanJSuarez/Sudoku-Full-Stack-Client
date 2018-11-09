

/**
 * Class to facilitate testability (not in use)
 * @export
 * @class GetSudoku
 */
export default class GetSudoku {
    
    private url: string;
    private sudokuFetch: any;

    constructor(url: string) {
        this.bindingThis();
        this.url = url;
        this.sudokuFetch = this.fetchSudoku();
    }
    /**
     * Return an object with sudoku numbers in it.
     * @returns {*}
     * @memberof GetSudoku
     */
    public getSudoku():any {
        return this.sudokuFetch;
    }
    /**
     * Fetch sudoku from server and return an object.
     * @private
     * @memberof GetSudoku
     */
    private async fetchSudoku(){
        return await fetch(this.url, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((resJson) => {
            return {
                currentSudokuNumbers: resJson.numbers, 
                loading: false,
            }
        })
        .catch((err)=>{
            console.log("Error in fetch indicated down: ")
            console.error(err);
            return {
                currentSudokuNumbers: [], 
                loading: true,
            }
        });
    }
    private bindingThis(): void {
        this.bindingThis = this.bindingThis.bind(this);
        this.getSudoku = this.getSudoku.bind(this);
        this.fetchSudoku = this.fetchSudoku.bind(this);
    }
}