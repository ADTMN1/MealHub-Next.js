import sql from 'better-sqlite3'

const db = sql('meals.db')

export default async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM meals').all();
}
