function getAnswersChecked(arrModel, arrAnwers){
    let res = { total: 0, right: 0, wrong: 0 }
    
    for (let i = 0; i < arrModel.length; i++){
        if (JSON.stringify(arrModel[i].options) === JSON.stringify(arrAnwers[i].options)){
            res.right += 1;
        }
        else {
            res.wrong += 1            
        }
        res.total += 1;
    }
    console.info(res)
    return res;
}
const arrModel = [
        {
          "designType": "CheckBox",
          "multi": true,
          "capture": "Сколько существует видов решения уравнений с модулями?",
          "options": [
            { "label": "1", "status": false },
            { "label": "3", "status": true },
            { "label": "2", "status": false },
            { "label": "4", "status": false }
          ]
        },
        {
          "designType": "CheckBox",
          "multi": true,
          "capture": "В графическом способе решения уравнения с модулями сколько надо построить графиков?",
          "options": [
            { "label": "1", "status": false },
            { "label": "2", "status": true },
            { "label": "4", "status": false }
          ]
        },
]

const arrAnwers = [
        {
          "options": [
            { "label": "1", "status": false },
            { "label": "3", "status": true },
            { "label": "2", "status": false },
            { "label": "4", "status": false }
          ]
        },
        {
          "options": [
            { "label": "1", "status": false },
            { "label": "2", "status": true },
            { "label": "4", "status": false }
          ]
        },
]

let res = getAnswersChecked(arrModel, arrAnwers) // { total: 2, right: 2, wrong: 0 }

const arrAnwers2 = [
        {
          "options": [
            { "label": "1", "status": false },
            { "label": "3", "status": true },
            { "label": "2", "status": false },
            { "label": "4", "status": false }
          ]
        },
        {
          "options": [
            { "label": "1", "status": true },
            { "label": "2", "status": false },
            { "label": "4", "status": false }
          ]
        },
]

res = getAnswersChecked(arrModel, arrAnwers2) // {  total: 2, right: 1, wrong: 1 }

const arrAnwers3 = [
  {
    options: [
      { label: '1', status: false },
      { label: '3', status: true },
      { label: '2', status: true },
      { label: '4', status: false },
    ],
  },
  {
    options: [
      { label: '1', status: true },
      { label: '2', status: false },
      { label: '4', status: false },
    ],
  },
]

res = getAnswersChecked(arrModel, arrAnwers3) // {  total: 2, right: 0, wrong: 2 }
