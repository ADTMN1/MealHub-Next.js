'use server'


import { redirect } from "next/navigation"
import { saveMeal } from "./meals"

export async function ShareMeal(formData) {
    'use server'
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instruction: formData.get('instructions'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
        image: formData.get('image')

    }
    await saveMeal(meal)
    redirect('/meals')
}