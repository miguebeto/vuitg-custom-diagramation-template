const customGridSchema = {
    title: "Grilla Custom",
    type: "object",
    properties: {
        gridType: {
            title: "tipo de Grilla",
            type: "number",
            enum: [
                1,
                2,
                3,
                4
            ]
        }
    }
}

export default customGridSchema;