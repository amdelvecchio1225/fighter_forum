import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const bob = await prisma.user.upsert({
        where: { username: 'bobisawesome' },
        update: {},
        create: {
            username: 'bobisawesome',
            password: 'bobsawesomepassword',
            fighters: {
                create: {
                    name: "Bawb",
                    style: "Melee Fighter",
                    movelist: "Light/Medium/Heavy Punch & Kick, Rising Uppercut, Axe Kick, Supreme Blow, Ultra Combo"
                },
            },
        },
    });

    const john = await prisma.user.upsert({
        where: { username: 'johnsmith' },
        update: {},
        create: {
            username: 'johnsmith',
            password: 'doeisoverrated',
            fighters: {
                create: {
                    name: "Smithson",
                    style: "Ranged Fighter",
                    movelist: "Light/Medium/Heavy Punch & Kick, Rising Axe: Slash, Rising Axe: Chop, Enchanted Axe Blow, Ultimate Axe Kick"
                },
            },
        },
    });

    const jane = await prisma.user.upsert({
        where: { username: 'janedoe' },
        update: {},
        create: {
            username: 'janedoe',
            password: 'icantthinkofapassword',
            fighters: {
                create: {
                    name: "Doe Flipper",
                    style: "Defensive Fighter",
                    movelist: "Light/Medium/Heavy Punch & Kick, Rising Tackle, Flying Side Kick, Swift Grounded Counter, Air Throw Counter, Exploding Counter, Ultra-Power Counter Blow"
                },
            },
        },
    });
    console.log({bob, john, jane});
}

main()
    .then(async () => {
        await prisma.$disconnecet();
    })
    .catch(async (err) => {
        console.err(err);
        await prisma.$disconnect();
        process.exit(1);
    })