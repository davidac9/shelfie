module.exports = {
    getInv: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_inventory()
            .then( products => res.status(200).send( products ) )
            .catch( err => {
                res.status(500).send({errorMessage: "something went wrong! OOPS"})
                console.log(err)
            })
    },
    newProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const { name, price, image_url } = req.body

        dbInstance.create_product([name, price, image_url])
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "something went wrong with the new product! OOPS"})
                console.log(err)
            })
    },
    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const { product_id } = req.params

        dbInstance.delete_product(id)
            .then( () => res.sendStatus(200) )
            .catch( err => {
                res.status(500).send({errorMessage: "DELETE FAILED!!! oops"})
                console.log(err)
            })
    }
}