import React, { FC } from "react";

const SortSelect: FC = () => (
	<select className="products-topside__sort-select">
		<option value="" selected disabled>
			Sortuj
		</option>
		<option value="price">Cena</option>
		<option value="name">Nazwa</option>
	</select>
);

export default SortSelect;
