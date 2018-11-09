/** 
 * Adan J. Suarez
 * adanjsuarez@gmail.com
 * Full Stack Home-Project 
 */

export default class PostNumber {

    private static FAKESUDOKU: any = {
        currentSudokuNumbers:[9,5,8,7,4,3,2,6,1,6,7,1,5,9,8,2,3,4,3,4,9,2,1,6,8,7,5,5,6,
            3,9,7,1,4,8,2,1,8,2,3,5,4,7,9,6,7,9,4,8,6,2,1,5,3,4,1,7,6,8,5,3,2,9,9,3,6,
            1,2,7,5,4,8,8,2,5,4,3,9,6,1,7],
        loading: false
    }

    constructor(selectedNumber: any, url: string){
        // Do nothing   
    }
    public getPostedNumber() {
        let result = new Promise(response =>{
            response(PostNumber.FAKESUDOKU)
        })
        return result;
    }
}