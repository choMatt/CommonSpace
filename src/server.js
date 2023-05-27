import { createServer, Model, Response } from "miragejs"


createServer({
    models: {
        notes: Model,
        users: Model
    },

    seeds(server) {
        server.create("note", {
            id: "1",
            name: "Moby Dick",
            author: "Herman Merlville",
            imageUrl: "https://live.staticflickr.com/7452/13989280327_4923fff6da_b.jpg" 
        })
        server.create("note", {
            id: "2",
            name: "Lord of the Flies",
            author: "William Golding",
            imageUrl: "https://live.staticflickr.com/5218/5450460721_dacfef4a6a.jpg" 
        })
        server.create("note", {
            id: "3",
            name: "Sapiens: A Brief History of Humankind",
            author: "Yuval Noah Harari",
            imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1595674533i/23692271.jpg" 
        })
        server.create("note", {
            id: "4",
            name: "1984",
            author: "George Orwell",
            imageUrl: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2017/01/2a34d8_a6741e88335241308890543d203ad89dmv2.jpg?resize=500%2C815&ssl=1" 
        })
        server.create("note", {
            id: "5",
            name: "Dune",
            author: "Frank Herbert",
            imageUrl: "https://kbimages1-a.akamaihd.net/7cdf60e0-c47b-498b-842d-eb8c094ef77e/1200/1200/False/dune-2.jpg" 
        })
        server.create("note", {
            id: "6",
            name: "Lord of the Rings: The Fellowship of the Ring",
            author: "J.R.R. Tolkien ",
            imageUrl: "https://cdn.waterstones.com/bookjackets/large/9780/0085/9780008567125.jpg" 
        })
        server.create("user", {
            id: "123",
            email: "b@b.com",
            password: "p123",
            name: "Bob"
        })
    },

    routes() {
        this.namespace = "api"
        this.logging = false
        this.timing = 1000
        // this.passthrough("https://firestore.googleapis.com/**")

        this.get("/notes", (schema, request) => {
            // return new Response(400, {}, {error: "Error fetching data"})
            return schema.notes.all()
        })

        this.get("/notes/:id", (schema, request) => {
            const id = request.params.id
            return schema.notes.find(id)
        })

        this.get("/host/notes", (schema, request) => {
            // Hard-code the hostId for now
            return schema.notes.where({ hostId: "123" })
        })

        this.get("/host/notes/:id", (schema, request) => {
            // Hard-code the hostId for now
            const id = request.params.id
            return schema.notes.findBy({ id, hostId: "123" })
        })

        this.post("/login", (schema, request) => {
            const { email, password } = JSON.parse(request.requestBody)
            // This is an extremely naive version of authentication. Please don't
            // do this in the real world, and never save raw text passwords
            // in your database 😇
            const foundUser = schema.users.findBy({ email, password })
            if (!foundUser) {
                return new Response(401, {}, { message: "No user with those credentials found!" })
            }

            // At the very least, don't send the password back to the client 😅
            foundUser.password = undefined
            return {
                user: foundUser,
                token: "Enjoy your pizza, here's your tokens."
            }
        })
    }
})