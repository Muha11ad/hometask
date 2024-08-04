
export function verifyRole(...roles) {
	return async (req, res, next) => {
		try {
			let { token } = req.headers;

			//check if token is given
			if (!token) {
				res.status(403).send({
					success: false,
					message: "Token is invalid",
				});
				return;
			}

			let id = customVerify(token);
			// find user
			let [user] = await fetchData("Select * from users where id = $1", id);
			// check users token
			if (user) {
				if (roles.find(el => el == user.role)) {
					next();
				} else {
					res.status(403).send({
						success: false,
						message: "Unauthorized user",
					});
				}
			} else {
				res.status(404).send({
					success: false,
					message: "Cannot find user",
				});
			}
		} catch (error) {
			res.status(500).send({
				success: false,
				message: "Error in verify role",
			});
		}
	};
}

