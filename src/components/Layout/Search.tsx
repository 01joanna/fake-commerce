
type SearchProps = {
    value: string,
    onChange: (newValue: string) => void
}

export default function Search({value, onChange}: SearchProps) {
    return (
        <input 
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar producto"
        className="border border-black rounded w-[700px] p-2 m-3"
        />
    )
}