const Project ={
  name:"project",
  title :"Projects",
  type :"document",
  fields :[
    {
      name:"name" ,
      title :"Name",
      type: "string",
    },
    {
      name:"image" ,
      title :"Image",
      type: "image",
      option:{hotspot : true},
      fields :[
        {
          name :"alt",
          title :"Alt",
          type: "string",
        }
      ]
    },
    {
      name:"slug" ,
      title :"Slug",
      type: "slug",
      option:{source :"name"},    
    },
    {
      name:"url" ,
      title :"URL",
      type: "url",
    },
    {
      name:"content",
      title: "Content",
      type :"array",
      of:[{type:"block"}],
    }
  ]

}
export default Project