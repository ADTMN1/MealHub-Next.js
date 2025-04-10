import Link from "next/link";

export default function Page() {
    return (
        <div >
            <h1>Meal Options</h1>
            <div >
                <Link href="/meals/post1" >
                    Meal 1
                </Link>

            </div>
        </div>
    );
}
