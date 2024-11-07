import prisma from "./db";

export async function getHabits() {
  const habits = await prisma.habit.findMany();
  return habits;
}

export async function getHabit(id) {
  const habit = await prisma.habit.findUnique({ where: { id } });
  return habit;
}

export async function createHabit(data) {
  const habit = await prisma.habit.create({ data });
  return habit;
}

export async function updateHabit(id, data) {
  const habit = await prisma.habit.update({ where: { id }, data });
  return habit;
}

export async function deleteHabit(id) {
  const habit = await prisma.habit.delete({ where: { id } });
  return habit;
}

export async function getHabitEntries(habitId) {
  const entries = await prisma.habitEntry.findMany({
    where: { habitId },
    orderBy: { createdAt: "desc" },
  });
  return entries;
}

export async function createHabitEntry(data) {
  const entry = await prisma.habitEntry.create({ data });
  return entry;
}

export async function deleteHabitEntry(id) {
  const entry = await prisma.habitEntry.delete({ where: { id } });
  return entry;
}

export async function updateHabitEntry(id, data) {
  const entry = await prisma.habitEntry.update({ where: { id }, data });
}
