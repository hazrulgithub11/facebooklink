import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const username = process.env.ADMIN_USERNAME || 'admin'
  const password = process.env.ADMIN_PASSWORD || 'admin123'

  console.log(`Creating admin user: ${username}`)

  const hashedPassword = await bcrypt.hash(password, 10)

  const admin = await prisma.admin.upsert({
    where: { username },
    update: {
      password: hashedPassword,
    },
    create: {
      username,
      password: hashedPassword,
    },
  })

  console.log('✓ Admin user created/updated successfully!')
  console.log(`  Username: ${admin.username}`)
  console.log(`  Password: ${password}`)
}

main()
  .catch((e) => {
    console.error('Error creating admin user:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

