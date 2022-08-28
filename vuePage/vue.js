const app = Vue.createApp({
    data() {
        return {
            members: [
                {
                id: "1",
                role: "Product designer",
                name: "Clara Petersen",
                phone: "066/154-14-87",
                email: "petersen@gmail.com",
                image: "https://i.pravatar.cc/300?img=32",
                },
                {
                id: "2",
                role: "Product menager",
                name: "James Nelson",
                phone: "063/124-48-72",
                email: "nelson@gmail.com",
                image: "https://i.pravatar.cc/300?img=68",
                },
                {
                id: "3",
                role: "Developer",
                name: "Joe Davis",
                phone: "061/148-55-67",
                email: "davis@gmail.com",
                image: "https://i.pravatar.cc/300?img=12",
                },
                {
                id: "4",
                role: "Content Advisor",
                name: "David Olson",
                phone: "065/177-99-25",
                email: "olson@yahoo.com",
                image: "https://i.pravatar.cc/300?img=63",
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