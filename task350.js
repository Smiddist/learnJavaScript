function getAnswersChecked (arrModel, arrAnwers){
    let res =[]
    for (let i = 0; i < arrModel.length; i++){
      for (let j =0; j < arrModel[i].options.length; j++){
        if (arrModel[i].options[j].status !== arrAnwers[i].options[j].status){
          res.push(arrAnwers[i].options[j])
        }
      }
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
  const res = getAnswersChecked(arrModel, arrAnwers3) // { total: 2, right: , wrong: 2 }
  