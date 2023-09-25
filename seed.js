import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const bob = await prisma.fighter.upsert({
            fighters: {
                create: {
                    name: "Bawb",
                    style: "Melee Fighter",
                    movelist: "Light/Medium/Heavy Punch & Kick, Rising Uppercut, Axe Kick, Supreme Blow, Ultra Combo"
                },
            },
        });

    const john = await prisma.fighter.upsert({
            fighters: {
                create: {
                    name: "Smithson",
                    style: "Ranged Fighter",
                    movelist: "Light/Medium/Heavy Punch & Kick, Rising Axe: Slash, Rising Axe: Chop, Enchanted Axe Blow, Ultimate Axe Kick"
                },
            },
        });

    const jane = await prisma.fighter.upsert({
            fighters: {
                create: {
                    name: "Doe Flipper",
                    style: "Defensive Fighter",
                    movelist: "Light/Medium/Heavy Punch & Kick, Rising Tackle, Flying Side Kick, Swift Grounded Counter, Air Throw Counter, Exploding Counter, Ultra-Power Counter Blow"
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
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    })