import { ApolloLink, concat, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';


export default (ctx) => {
	let link = new HttpLink({
		uri: '{{httpUrl}}'
	});

	// Create a WebSocket link:
	{{#isWs}}
	if (process.client) {
		let wsLink = new WebSocketLink({
			uri: '{{wsUrl}}',
			options: {
				reconnect: true
			}
		});

		link = split(
			({ query }) => {
				const { kind, operation } = getMainDefinition(query);
				return kind === 'OperationDefinition' && operation === 'subscription';
			},
			wsLink,
			httpLink
		);
	}
	{{/isWs}}

	// const authMiddleware = new ApolloLink((operation, forward) => {
	// 	// add the authorization to the headers
	// 	const token = '';
	// 	operation.setContext({
	// 		headers: {
	// 			authorization: `Bearer ${token}`
	// 		}
	// 	});
	// 	return forward(operation);
	// });

	return {
		link: link, // or concat(authMiddleware,link)
		cache: new InMemoryCache()
	};
};
