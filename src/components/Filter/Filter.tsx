import type { Category } from '../../models/Category'

type FilterProps =  {
    categories: Category[],
    selectedCategory: string,
    onChange: (category: string) => void; 
}

export default function Filter({}: FilterProps) {
    
    return (

    )
}