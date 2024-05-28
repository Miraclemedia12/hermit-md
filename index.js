const client = require('./lib/client')

const connect = async () => {
	try {
		await client.connect()
	} catch (error) {
		console.error(error)
	}
}

connect()
US.VIEW:   toBool(process.env.AUTO_STATUS
