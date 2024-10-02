const { user_name, password } = process.env;
console.log("username", user_name, password);

export const connectionStr = `mongodb+srv://${user_name}:${password}@cluster0.iur8g.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0`;