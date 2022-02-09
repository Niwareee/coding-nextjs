export default function handler(req, res) {
  const prisma = new PrismaClient();

  res.status(200).json({
    data: prisma.profile.findMany(),
  });
}
