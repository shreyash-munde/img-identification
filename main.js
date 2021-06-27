Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="snapped" src="'+data_uri+'">';

    });
}
console.log('ml5version: ',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/90icEQBe6/model.json',modelLoaded)
function modelLoaded(){
    console.log("modelloaded");

}

function check(){
    img=document.getElementById("snapped");
    classifier.classify(img,gotResult);
}

function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_object").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
 }
