const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
    await prisma.fact.createMany({
        data: [
            {
                id: "fact1", // явный ID
                title: "Бананы являются ягодами",
                category: "Наука",
                truth: true,
                explanation: "С точки зрения ботаники банан относится к ягодам."
            },
            {
                id: "fact2",
                title: "Китайскую стену видно из космоса",
                category: "История",
                truth: false,
                explanation: "Это миф. Невооружённым глазом её почти невозможно увидеть."
            },
            {
                id: "fact3",
                title: "У осьминога три сердца",
                category: "Животные",
                truth: true,
                explanation: "Два сердца качают кровь к жабрам, одно — к остальному телу."
            },
            {
                id: "fact4",
                title: "Мёд никогда не портится",
                category: "Наука",
                truth: true,
                explanation: "Благодаря составу мёд может храниться тысячи лет."
            },
            {
                id: "fact5",
                title: "Земля плоская",
                category: "География",
                truth: false,
                explanation: "Земля имеет форму геоида и близка к шару."
            },
            {
                id: "fact6",
                title: "Акулы существовали раньше деревьев",
                category: "Животные",
                truth: true,
                explanation: "Первые акулы появились примерно 450 млн лет назад, деревья — около 390 млн."
            },
            {
                id: "fact7",
                title: "Пингвины живут только в Антарктиде",
                category: "Животные",
                truth: false,
                explanation: "Пингвины обитают также в Южной Америке, Африке, Австралии и Новой Зеландии."
            },
            {
                id: "fact8",
                title: "Солнце белого цвета",
                category: "Космос",
                truth: true,
                explanation: "Из космоса Солнце выглядит белым, а жёлтым кажется из-за атмосферы Земли."
            }
        ]
    });

    console.log("Факты успешно добавлены");
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());