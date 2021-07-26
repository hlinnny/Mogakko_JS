var i = 0;
var app = document.getElementById("app");

      var typewriter = new Typewriter(app, {
        loop: false,
      });

    typewriter
        .typeString("나랑 대화하자!")
        .start()

var json = []

var question = ""; //사용자의 질문 임시 저장
var answer = ""; //사용자의 대답 임시 저장

var key = 0;

function check_text() {
    var background = document.getElementsByTagName('body')[0];
    var input = document.getElementById("input-message").value;
    var inputbox = document.getElementById("input-message");
    var output = document.getElementsByClassName("output-message")[0];
    var image = document.getElementsByTagName('img')[0];

    for(let i = 0; i < json.length; i++){
        if(input == json[i].question){
            typewriter
                .deleteAll()
                .typeString(json[i].answer)
                .start()
            return;
        }
    }

    if (key == 0) {
        if (input == "안녕") {
            typewriter
                .deleteAll()
                .typeString("안녕~! 내 이름은 무민이야 >.<")
                .start()
            image.src = "./static/image.png";
        }
        else if (input == "바보야" || input == "바보") {
            typewriter
                .deleteAll()
                .typeString("바보 아니야!!!")
                .start()
            image.src = "./static/angry.jpg";
            image.setAttribute("height", "181px")
        }
        else if (input == "불꺼줘") {
            image.src = "./static/angry.jpg";
    
            if (i == 0) {
                typewriter
                    .deleteAll()
                    .typeString("지금 바쁜거 안보여?")
                    .start()
                i++;
            }
            else if (i == 1) { 
                typewriter
                    .deleteAll()
                    .typeString("아웅 귀찮아...")
                    .start()
                i++;
            }
            else {
                typewriter
                    .deleteAll()
                    .typeString("쳇 알았어 불 꺼줄게~!")
                    .start()
                background.style.backgroundColor = "#606060";
                background.style.transitionProperty = "all";
                background.style.transitionDuration = "3s";
                output.style.color = "white";
                inputbox.style.backgroundColor = "#606060";
                inputbox.style.transitionProperty = "all";
                inputbox.style.transitionDuration = "3s";
                inputbox.style.color = "white";
                i = 0;
            }
        }
        else if (input == "불켜줘") {
            typewriter
                .deleteAll()
                .typeString("접수완료 >.<")
                .start()
            image.src = "./static/image.png";
            background.style.backgroundColor = "white";
            background.style.transitionProperty = "all";
            background.style.transitionDuration = "3s";
            output.style.color = "black";
            inputbox.style.backgroundColor = "white";
            inputbox.style.transitionProperty = "all";
            inputbox.style.transitionDuration = "3s";
            inputbox.style.color = "black";
        }
        else if (input == "오늘 뭐먹지?" || input == "메뉴 추천해줘") {
            image.src = "./static/image.png";
            var n = Math.floor(Math.random() * 4);   // 0~3 사이의 랜덤 정수
    
            if (n == 0) {
                typewriter
                    .deleteAll()
                    .typeString("마라탕!")
                    .start()
            }
            else if (n == 1) {
                typewriter
                    .deleteAll()
                    .typeString("떡볶이!")
                    .start()
            }
            else if (n == 2) {
                typewriter
                    .deleteAll()
                    .typeString("피자!")
                    .start()
            }
            else {
                typewriter
                    .deleteAll()
                    .typeString("치킨!")
                    .start()
            }
        }
        else {
            image.src = "./static/image.png";
            typewriter
                .deleteAll()
                .typeString("무슨 말인지 모르겠어...")
                .pauseFor(1500)
                .start()
                key = 1;
                question = input;
        }
    }

    if(key == 1) {
        typewriter
            .deleteAll()
            .typeString("무슨 말인지 알려줄래?(좋아 or 싫어)")
            .start()
        key = 2;
        return;
    }

    if(key == 2) {
        if(input === "좋아"){
            typewriter
                .deleteAll()
                .typeString("대답을 입력해줘!")
                .start()
            key = 3;
        }
        else{
            typewriter
                .deleteAll()
                .typeString("싫으면 말구...")
                .start()
            key = 0;
        }
        return;
    }

    if(key == 3){
        answer = input; 
        push_json(); 
    }
    
}

function push_json(){
	json.push({question: `${question}`, answer: `${answer}`});
	typewriter
        .deleteAll()
        .typeString("이제 무슨 말인지 알겠어~!")
        .start()
	key = 0;
}

document.getElementById("btn").addEventListener("click", check_text);
