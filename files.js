const fs = require('fs')

// reading files

// fs.readFile('./docs/blog1.txt', (err, data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data.toString())
//     }
// })
// console.log('Last line')

// writing files

// fs.writeFile('./docs/blog1.txt', 'ruby developers', ()=>{
//     console.log('file was written')
// })

// fs.writeFile('./docs/blog2.txt', 'python developers', ()=>{
//     console.log('file was written')
// })

// directories

if(!fs.existsSync('./assests')){
    fs.mkdir('./assests', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('folder created')
        }
    })

}else{
    fs.rmdir('./assests', (err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Folder deleted')
        }
    })
}

// deleting files
if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (err)=>{
        if(err){
            console.log(err)
        }
        console.log('file deleted')
    })
}