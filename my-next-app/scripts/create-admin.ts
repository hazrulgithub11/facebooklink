import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@example.com'
  const password = process.env.ADMIN_PASSWORD || 'admin123'
  const name = process.env.ADMIN_NAME || 'Admin'

  console.log(`Creating admin user: ${email}`)

  const hashedPassword = await bcrypt.hash(password, 10)

  const admin = await prisma.user.upsert({
    where: { email },
    update: {
      isAdmin: true,
      password: hashedPassword,
      name,
    },
    create: {
      email,
      name,
      isAdmin: true,
      password: hashedPassword,
    },
  })

  console.log('✓ Admin user created/updated successfully!')
  console.log(`  Email: ${admin.email}`)
  console.log(`  Name: ${admin.name}`)
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

