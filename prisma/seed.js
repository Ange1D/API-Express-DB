const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    const woopa4 = await prisma.explorer.upsert({
        where: { name: 'Woopa 4' },
        update: {},
        create: {
          name: 'Woopa 4',
          username: 'ajolonauta4',
          mission: 'Java'
        },
      });

      const woopa5 = await prisma.explorer.upsert({
        where: { name: 'Woopa 5' },
        update: {},
        create: {
          name: 'Woopa 5',
          username: 'ajolonauta5',
          mission: 'Node'
        },
      });  

    console.log('Create 6 explorers');

    const woopa20 = await prisma.explorer2.upsert({
        where: { name: 'Woopa20' },
        update: {},
        create: {
          name: 'Woopa20',
          lang: 'spanish',
          missionCommander: 'Carlo'
        },
      });
  
      const woopa21 = await prisma.explorer2.upsert({
        where: { name: 'Woopa21' },
        update: {},
        create: {
          name: 'Woopa21',
          lang: 'spanish',
          missionCommander: 'Carlo'
        },
      });
  
      const woopa22 = await prisma.explorer2.upsert({
        where: { name: 'Woopa 22' },
        update: {},
        create: {
          name: 'Woopa 22',
          lang: 'spanish',
          missionCommander: 'Fer'
        },
      });
  
      const woopa23 = await prisma.explorer2.upsert({
        where: { name: 'Woopa 23' },
        update: {},
        create: {
          name: 'Woopa 23',
          lang: 'spanish',
          missionCommander: 'Carlo'
        },
      });
  
      const woopa24 = await prisma.explorer2.upsert({
          where: { name: 'Woopa 24' },
          update: {},
          create: {
            name: 'Woopa 24',
            lang: 'spanish',
            missionCommander: 'Fer'
          },
        });
  
        const woopa25 = await prisma.explorer2.upsert({
          where: { name: 'Woopa 25' },
          update: {},
          create: {
            name: 'Woopa 25',
            lang: 'spanish',
            missionCommander: 'Carlo'
          },
        });  
  
      console.log('Create 6 explorers2');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();