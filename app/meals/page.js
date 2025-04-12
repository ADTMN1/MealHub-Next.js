import Link from "next/link";
import classes from "./page.module.css"
import getMeals from "@/lib/meals";
import MealsGrid from "@/component/meals/meals-grid";
export default async function Page() {
    const meals = await getMeals();

    return (
        <div >
            <header className={classes.header}>
                <div>
                    <h1>
                        Delicious meals, created <span className={classes.highlight}>by you</span>
                    </h1>
                    <p>
                        choose your favorite recipe and cook it yourself.It is easy and fun!
                    </p>
                    <p className={classes.cta}>
                        <Link href="/meals/share">Share your Favorite Recipe</Link>
                    </p>
                </div>
            </header>

            <main className={classes.main}>
                <MealsGrid meals={meals} />
            </main>

        </div>
    );
}
