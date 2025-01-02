const Clients = {
  name: "clients",
  title: "Clients",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
          source: "title",
        },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
    },
    {
        name: "position",
        title: "Position",
        type: "string",
    },
  ],
};

export default Clients;