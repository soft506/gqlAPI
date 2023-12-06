const {gql} = require("apollo-server");
const typeDefs = gql`
	type Travel {
		id: ID
		client: String
		origin: String
		destin: String
		distance : String
		amount :  String
		createdAt: String
		status: String
		rateType: String
		currency: String
	}	
	type Subs {
		name: String
		idsub: String
		idcategory: String
	}	
	type Category {
		id: ID
		name: String
		idcategory: String
		status: String
		subs: [Subs]
	}		
	type items{
		servicio: String
		tipo: String
		imei: String
		tag: String
		folio: String
		monto: Int
		referencia: String
		concepto: String
		tecnico: String
	}
	type Tix {
		id: ID
		client: String
		origin: String
		destin: String
		distance : String
		amount :  String
		createdAt: String
		status: String
		rateType: String
		currency: String
	}		
	type Product {
		id: ID
		name: String
		price: Int
		ref: String 
		description: String
		presentation: String
		category: String
		status: String
		currency: String
		discount: Boolean
		bestseller: Boolean
		images:[String]
	}	
	type Transaction {
		id: ID
		name: String
		email: String
		description: String
		idApp: String
		idCard: String
		idBranch: String
		amount: Int
		ref: String 
		status: String
		type: String
		createdAt:String
		transactionType:String
		discount: Boolean
		bestseller: Boolean
		items:[items]
	}
	type User {
		id: ID
		name: String
		username: String
		email: String
		sitioweb : String
		description :  String
		password :String
		avatar:String
		createdAt:String
		role: UserRoleEnum!
	}
	type Token{
		token:String
	}
	type Query {
		user(id: ID!): User
		users(role: UserRoleEnum): [User!]!
	  }
	input TravelInput{
		client:String!
		origin:String!
		distance:String!
		destin:String!
		amount:String!
		status:String!
		currency:String!
		rateType:String!
	}
	input ProductInput{
		name:String!
		price:Int!
		ref:String!
		description:String!
		presentation:String!
		category:String!
		status:String!
		currency:String!
		discount:Boolean!
		bestseller:Boolean!
	}
	input TransactionInput{
		idCard: String!
		idApp: String!
		idBranch: String!
		description:String!
		name:String!
		email:String!
		amount:Int!
		ref:String!
		status:String!
		type:String!
		transactionType:String!
		discount:Boolean!
		bestseller:Boolean!
		
	}
	input TixInput{
		client:String!
		origin:String!
		distance:String!
		destin:String!
		amount:String!
		status:String!
		currency:String!
		rateType:String!
	}

	input UserInput{
		name:String!
		username:String!
		email:String!
		password:String!
		role: UserRoleEnum = ACCOUNTANT
	}
	input LoginInput{
		email:String!
		password:String!		
	}
	
	type Query {
		# user
		getUser: User 
		getTravelsByStatus(status:String!): [Travel] 
		getTransactionsByStatus(status:String!): [Transaction]
		getTransactionsByBranch(idBranch:String!,skip:Int,limit:Int): [Transaction]  
		getCategories(status:String!,skip:Int,limit:Int): [Category] 
		getTixsByStatus(status:String!): [Tix] 
		getProductsByStatus(status:String!,skip:Int,limit:Int): [Product] 
		getBestseller(bestseller:Boolean!,skip:Int,limit:Int): [Product] 
		getDiscount(discount:Boolean!,skip:Int,limit:Int): [Product] 

	}
	
	type Mutation {
		newTravel(input:TravelInput):Travel
	}
	type Mutation {
		newProduct(input:ProductInput):Product
	}
	type Mutation {
		newTransaction(input:TransactionInput):Transaction
	}
	type Mutation {
		newTix(input:TixInput):Tix
	}

	type Mutation {
		register(input:UserInput):User
	}
	type Mutation {
		login(input:LoginInput):Token
	}
	enum UserRoleEnum {
		ADMIN
		ACCOUNTANT
	  }

`;

module.exports=typeDefs;
