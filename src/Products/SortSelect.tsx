import React, { Factory } from "react";
import { Product as TProduct } from "../../typdefs/Product";

type SortSelectProps = {
	products: Array<TProduct>;
	setProducts: Function;
};

function sortProductsByName(productA: TProduct, productB: TProduct): number {
	if (productA.name > productB.name) return 1;
	if (productA.name < productB.name) return -1;
	return 0;
}

function sortProductsByPrice(productA: TProduct, productB: TProduct): number {
	if (productA.price > productB.price) return 1;
	if (productA.price < productB.price) return -1;
	return 0;
}

const SortSelect: Factory<SortSelectProps> = ({ products, setProducts }) => {
	function sortItems(e: any): void {
		const val: string = e.target.value;
		switch (val) {
			case "price":
				setProducts([...products.sort(sortProductsByPrice)]);
				break;
			case "name":
				//THIS NEXT
				setProducts([...products.sort(sortProductsByName)]);
				break;
		}
	}

	return (
		<select
			onChange={sortItems}
			defaultValue="none"
			className="products-topside__sort-select"
		>
			<option value="none" disabled>
				Sortuj
			</option>
			<option value="price">Cena</option>
			<option value="name">Nazwa</option>
		</select>
	);
};

export default SortSelect;
