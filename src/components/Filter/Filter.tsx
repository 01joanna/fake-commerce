import type { Category } from '../../models/Category'

type FilterProps =  {
    categories: Category[],
    selectedCategory: string,
    onChange: (category: string) => void; 
}

export default function Filter({}: FilterProps) {
    const  [categories, setCategories] = useState<Category[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>("")

    
    return (

    )
}