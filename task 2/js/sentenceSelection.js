function searchSentence(){
    let paragraph = document.getElementById("paragraph").value;
    let sentence = document.getElementById("sentence").value;
    paragraph = paragraph.split(".");
    console.log(paragraph);
    //arrow function
    const newParagraph = paragraph.filter(likesentence => likesentence.includes(sentence));
    //reguler function
    // const newParagraph = paragraph.filter(function (likesentence) {
    //     return likesentence.includes(sentence);
    // });
    console.log(newParagraph);
    document.getElementById("result").innerHTML = `<hr><h3>result</h3>${newParagraph}`;
}