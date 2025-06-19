import { priceFormatter } from "../helpers/priceFormatter"
import type { TProductCard } from "../types/productCard"
import s from "./ProductCard.module.css"

type ProductCardProps = {
    product: TProductCard
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className={s.card_wrapper}>
            <img
                src={product.imageUrl}
                alt={product.title}
                className={s.product_image}
            />
            <div className={s.product_data}>
                <div>
                    <p>{product.title}</p>
                    <p>Страна: {product.origin}</p>
                </div>
                <p className={s.product_price}>
                    {priceFormatter(product.price, product.currency)}
                </p>
            </div>
        </div>
    )
}

export default ProductCard
