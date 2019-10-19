export type Actions = {
	[key: string]: string;
};

export type Action = {
	type: string;
	payload: {
		[key: string]: any;
	};
};

export type Cart = {
	[key: number]: any;

};
