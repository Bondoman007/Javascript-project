const puzzlepro =  async (count) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${count}`)
    
        if(response.status === 200){
            const data = await response.json()
            return data.puzzle
        }else{
            throw new Error("this is error")
        }
}

// const puzzleproold = (count) => {
//     return fetch(`https://puzzle.mead.io/puzzle?wordCount=${count}`).then((response) => {
//         if(response.status === 200){
//             return response.json()
//         }else{
//             throw new Error("this is error")
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }


// const puzzleSyc = () => {
//     const request = new XMLHttpRequest()
//     request.open('GET','https://puzzle.mead.io/slow-puzzle?wordCount=3',false)
//     request.send()
//     if (request.readyState === 4 && request.status === 200){
//         const data = JSON.parse(request.responseText)
//         return data.puzzle
//     }else if(request.readyState === 4){
//         throw new Error('things are getting wrong')
//     }

// }