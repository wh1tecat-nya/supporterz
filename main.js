"use strict";

const fastify = require("fastify")();

const price = {
	101: 100,
	102: 130,
	103: 320,
	104: 320,
	105: 380,
	201: 150,
	202: 270,
	203: 320,
	204: 280,
	301: 100,
	302: 220,
	303: 250,
	304: 150,
	305: 240,
	306: 270,
	307: 100,
	308: 150
};


/* items自動生成 */
const items = [];

Object.keys(price).forEach((key) => {
	items.push(key);
});

fastify.get("/test", (req, res) => {
	res.send("hello world");
});

fastify.post("/api/checkout", (req, res) => {
	console.log(req.body.order);
	if (!req.body.order) {
		res.send({
			ok: false,
			message: "order_not_found"
		});
	}

	if (Array.isArray(req.body.order)) {
		const orderitem = req.body.order;
		let order_price = 0;

		orderitem.forEach((val, index, array) => {
			if (!items.includes(val)) {
				order_price += parseInt(price[val], 10);
				console.log(parseInt("add:" + price[val], 10));
			}
			console.log(order_price);
		});
		res.send({
			ok: true,
			amount: order_price,
			items: orderitem
		});
	} else {
		res.send({
			ok: false,
			message: "order_not_found"
		});
	}
});

fastify.listen(3002, (err) => {
	if (err) {
		throw err;
	}
	console.log("server is listen port:" + fastify.server.address().port);
});
