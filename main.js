"use strict";

const fastify = require("fastify")();

const price_hamburger = {
	101: 100,
	102: 130,
	103: 320,
	104: 320,
	105: 380
};
const price_sidemenu = {
	201: 150,
	202: 270,
	203: 320,
	204: 280
};
const price_drink = {
	301: 100,
	302: 220,
	303: 250,
	304: 150,
	305: 240,
	306: 270,
	307: 100,
	308: 150
};

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
		res.send({
			ok: true,
			message: "item_not_found"
		});
	} else{
		res.send({
			ok: false,
			message: "order_not_found"
		});
	}
});

fastify.listen(3000, (err) => {
	if (err) {
		throw err;
	}
	console.log("server is listen port:" + fastify.server.address().port);
});
