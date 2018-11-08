

/**
 * Class to facilitate testability (not in use)
 * @export
 * @class GetSudoku
 */
export default class GetSudoku {
    
    private static URL: string = 'http://127.0.0.1:8080/sudoku/board';
    
    private currentSudokuNumbers: number[];
    private loading: boolean;
    private selectedNumber: any;

    constructor() {
        this.bindingThis();
        this.currentSudokuNumbers = [];
        this.loading = true;
        this.selectedNumber = 0;
        this.fetchSudoku();
    }
    /**
     * Return an object with sudoku numbers in it
     * @returns {*}
     * @memberof GetSudoku
     */
    public getSudoku():any {
        return {
            currentSudokuNumbers: this.currentSudokuNumbers, 
            loading: this.loading, 
            selecetedNumber: this.selectedNumber
        }
    }
    private bindingThis(): void {
        this.bindingThis = this.bindingThis.bind(this);
        this.getSudoku = this.getSudoku.bind(this);
        this.fetchSudoku = this.fetchSudoku.bind(this);
    }
    /**
     * Fetch sudoku from server and modify fields.
     * @private
     * @memberof GetSudoku
     */
    private async fetchSudoku(){
        await fetch(GetSudoku.URL, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((resJson) => {
            // console.log('Numbers after fetch: ', resJson);
            this.currentSudokuNumbers = resJson.numbers; 
            this.loading = false;
            this.selectedNumber = 0;
        })
        .catch((err)=>{
            console.log("Error in fetch indicated down: ")
            console.error(err);
        });
    }
    
}