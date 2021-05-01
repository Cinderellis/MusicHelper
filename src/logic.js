const getListOfNotes = () =>{
    return (['A','A# / Bb','B','C','C# / Db','D','D# / Eb','E','F','F# / Gb','G','G# / Ab'])
}

const updateNotation=(notes=[],showSharps=true) =>{
    const correctNotation = []
    for(let i = 0;i<7;i++){
        if(notes[i].length >1){
            if(showSharps){correctNotation.push(notes[i].split(' / ')[0])}
            else{correctNotation.push(notes[i].split(' / ')[1])}
        }else{correctNotation.push(notes[i])}
    }
    return correctNotation
}

const getCircleOfFifths = ()=>{
    const notes = getListOfNotes();
    const circleOfFifths= []
    for(let index = 0;index < 12;index++){
        circleOfFifths.push(notes[(index+7)%12])
    }
    return (circleOfFifths)
}

const getKeysByRoot = (root='',showSharps=true) => {
    const notes = getListOfNotes()
    const rootIndex = notes.indexOf(root)
    if(rootIndex===-1)return{'major':[],minor:[]}
    const major = []
    const minor = []
    major.push(notes[rootIndex])
    major.push(notes[(rootIndex+2)%12])
    major.push(notes[(rootIndex+4)%12])
    major.push(notes[(rootIndex+5)%12])
    major.push(notes[(rootIndex+7)%12])
    major.push(notes[(rootIndex+9)%12])
    major.push(notes[(rootIndex+11)%12])
    minor.push(notes[rootIndex])
    minor.push(notes[(rootIndex+2)%12])
    minor.push(notes[(rootIndex+3)%12])
    minor.push(notes[(rootIndex+5)%12])
    minor.push(notes[(rootIndex+7)%12])
    minor.push(notes[(rootIndex+8)%12])
    minor.push(notes[(rootIndex+10)%12])

    return{'major':updateNotation(major,showSharps),'minor':updateNotation(minor,showSharps)}

}
export {getListOfNotes,getCircleOfFifths,getKeysByRoot}