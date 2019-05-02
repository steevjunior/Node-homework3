const posts = [
    {id: '1',
     content:'posts num 1',
     dateofcreation:`${new Date().getDate()}-${new Date().getUTCMonth()+1}-${new Date().getFullYear()}//${new Date().getHours()}:${new Date().getMinutes()}`,
     lastmodification:`${new Date().getDate()}-${new Date().getUTCMonth()+1}-${new Date().getFullYear()}//${new Date().getHours()}:${new Date().getMinutes()}`
    },
    {id: '2',
     content:'posts num 2',
     dateofcreation:`${new Date().getDate()}-${new Date().getUTCMonth()+1}-${new Date().getFullYear()}//${new Date().getHours()}:${new Date().getMinutes()}`,
     lastmodification:`${new Date().getDate()}-${new Date().getUTCMonth()+1}-${new Date().getFullYear()}//${new Date().getHours()}:${new Date().getMinutes()}`
    }
  ]

module.exports = {
    posts : posts
}