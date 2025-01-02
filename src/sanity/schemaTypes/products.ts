const productsSchema = {
    name: 'products',
    title: 'Products',
    type: 'document',
    fields: [
        {
        name: 'title',
        title: 'Title',
        type: 'string',
        },
        {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            }
        },
        {
        name: 'price',
        title: 'Price',
        type: 'number',
        },
        {
        name: 'description',
        title: 'Description',
        type: 'text',
        },
        {
        name: 'image',
        title: 'Image',
        type: 'image',
        },
    ],
}

export default productsSchema;