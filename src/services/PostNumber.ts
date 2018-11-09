/** 
 * Adan J. Suarez
 * adanjsuarez@gmail.com
 * Full Stack Home-Project 
 */

export default class PostNumber {

    private url: string;
    private selectedNumber: any;
    private sudoku: any;

    constructor(selectedNumber: any, url: string){
        this.bindingThis();
        this.selectedNumber = selectedNumber;
        this.url = url;
        console.log('The selected number is:', selectedNumber)
        this.sudoku = this.postNumber();
    }
    // console.log('The selected number is:', selectedNumber)
    public getPostedNumber(){
        return this.sudoku;
    }
    private async postNumber(){
        return await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(this.selectedNumber),
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
        .catch((res) => {
            console.log('Error POST: ', res)
            return {
                currentSudokuNumbers: [],
                loading: true,
                selectedNumber: 0
            }
        })
    }
    private bindingThis(){
        this.bindingThis = this.bindingThis.bind(this);
        this.getPostedNumber = this.getPostedNumber.bind(this);
        this.postNumber = this.postNumber.bind(this);

    }
}