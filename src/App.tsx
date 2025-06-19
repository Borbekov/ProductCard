import './App.css'
import ProductCard from './components/ProductCard'

function App() {
    const mockProducts = [
        {
            title: "iPhone",
            origin: "США",
            price: 134900,
            currency: "RUB" as const,
            imageUrl: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275",
        },
        {
            title: "Samsung",
            origin: "Korea",
            price: 254000,
            currency: "USD" as const,
            imageUrl: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275",
        },
        {
            title: "Xiaomi",
            origin: "China",
            price: 850000,
            currency: "EUR" as const,
            imageUrl: "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb86e2e09fceac9b363af536b93a1275",
        },
    ]

    return (
        <div className="layout">
            {mockProducts.map((product) => (
                <ProductCard
                    key={product.title}
                    product={product}
                />
            ))}
        </div>
    )
}

export default App
