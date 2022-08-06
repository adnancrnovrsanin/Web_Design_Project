const app = Vue.createApp({
    data() {
        return {
            members: [
                {
                id: "1",
                role: "developer",
                name: "Clark Petersen",
                phone: "066/154-14-87",
                email: "petersen@gmail.com",
                image: "https://i.pravatar.cc/300?img=60",
                },
                {
                id: "2",
                role: "developer",
                name: "James Nelson",
                phone: "063/124-48-72",
                email: "nelson@gmail.com",
                image: "https://i.pravatar.cc/300?img=59",
                },
                {
                id: "3",
                role: "developer",
                name: "Joe Davis",
                phone: "061/148-55-67",
                email: "davis@gmail.com",
                image: "https://i.pravatar.cc/300?img=53",
                },
                {
                id: "4",
                role: "developer",
                name: "David Olson",
                phone: "065/177-99-25",
                email: "olson@yahoo.com",
                image: "https://i.pravatar.cc/300?img=14",
                },
            ]
        };
    }
});

app.component("member", {
    props: ["role", "name", "phone", "email", "image"],
    template: `
        <div class="karticaClana">
            <img :src="image" class="slikaKartice">
            <div class="details">
                <h5>{{ role }}</h5>
                <h2>{{ name }}</h2>
                <h6>{{ email }}</h6>
                <h6>{{ phone }}</h6>
            </div>
        </div>
    `
});

app.mount("#app");