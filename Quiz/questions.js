let data = {
    "questions":[
        {"q": "How many ghosts chase Pac-Man at the start of each game?",
        "o1": "2",
        "o2": "3",
        "o3": "4",
        "o4": "5",
        "a":"o3"
    },
    {"q": "What sports car company manufactures the 911?",
        "o1": "Porsche",
        "o2": "BMW",
        "o3": "Jaguar",
        "o4": "KTM",
        "a":"o1"
    },
    {"q": "Which planet has the most moons?",
        "o1": "Saturn",
        "o2": "Venus",
        "o3": "Mercury",
        "o4": "Earth",
        "a":"o1"
    },
    {"q": "What is the world's fastest bird?",
        "o1": "Peregrine Falcon",
        "o2": "Vultures",
        "o3": "Cassowary",
        "o4": "White Collared Swift",
        "a":"o1"
    },
    {"q": "Who composed 'Swan Lake'?",
        "o1": "Johann Sebastian Bach",
        "o2": "Pyotr Tchaikovsky",
        "o3": "Wolfgang Amadeus Mozart",
        "o4": "Antonio Vivaldi",
        "a":"o2"
    },
    {"q": "Who played the titular character in the Harry Potter franchise?",
        "o1": "Daniel Radcliffe",
        "o2": "Me",
        "o3": "You",
        "o4": "Emma Watson",
        "a":"o2"
    }
    ]
};

var ques = data.questions;
// console.log(data.questions)
for(const k of ques){
    console.log(`${k.q}: \n
        ${k.o1} \n
        ${k.o2} \n
        ${k.o3} \n
        ${k.o4} \n 
        ans: ${k.a} \n `)
    questionCard(k.q,k.o1,k.o2,k.o3,k.o4,k.a);
}   