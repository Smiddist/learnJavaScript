function getAnswersChecked (array){
    let res = { total: 0, right: 0, wrong: 0 }
    let trigger;
    array.forEach(function (item){
        trigger = true
        item.options.forEach(function (item){
            if (item["status"] !== item.answer){
                trigger = false
            }
        })
        res.total +=1
        if (trigger){
            res.right +=1
        }
        else{
            res.wrong +=1
        }
    })
    console.info(res)
    return res;
}
const questions = [
        {
          "designType": "CheckBox",
          "multi": true,
          "capture": "Сколько существует видов решения уравнений с модулями?",
          "options": [
            { "label": "1", "status": false, answer: false },
            { "label": "3", "status": true, answer: true },
            { "label": "2", "status": true, answer: true },
            { "label": "4", "status": false, answer: false }
          ]
        },
        {
          "designType": "CheckBox",
          "multi": true,
          "capture": "В графическом способе решения уравнения с модулями сколько надо построить графиков?",
          "options": [
            { "label": "1", "status": false,  answer: false },
            { "label": "2", "status": true, answer: true },
            { "label": "4", "status": false, answer: false }
          ]
        },
]

res = getAnswersChecked(questions) // {  total: 2, right: 2, wrong: 0 }

const questions2 = [
        {
          "designType": "CheckBox",
          "multi": true,
          "capture": "Сколько существует видов решения уравнений с модулями?",
          "options": [
            { "label": "1", "status": false, answer: false },
            { "label": "3", "status": true, answer: true },
            { "label": "2", "status": true, answer: true },
            { "label": "4", "status": false, answer: false }
          ]
        },
        {
          "designType": "CheckBox",
          "multi": true,
          "capture": "В графическом способе решения уравнения с модулями сколько надо построить графиков?",
          "options": [
            { "label": "1", "status": false, answer: true },
            { "label": "2", "status": true, answer: true },
            { "label": "4", "status": false, answer: false }
          ]
        },
]

res = getAnswersChecked(questions2) // {  total: 2, right: 1, wrong: 1 }


const questions3 = [
        {
          "designType": "CheckBox",
          "multi": true,
          "capture": "Сколько существует видов решения уравнений с модулями?",
          "options": [
            { "label": "1", "status": false, answer: false },
            { "label": "3", "status": true, answer: false },
            { "label": "2", "status": true, answer: true },
            { "label": "4", "status": false, answer: false }
          ]
        },
        {
          "designType": "CheckBox",
          "multi": true,
          "capture": "В графическом способе решения уравнения с модулями сколько надо построить графиков?",
          "options": [
            { "label": "1", "status": false, answer: true },
            { "label": "2", "status": true, answer: true },
            { "label": "4", "status": false, answer: false }
          ]
        },
]

res = getAnswersChecked(questions3) // {  total: 2, right: 0, wrong: 2 }
