import {
	AspectRatio,
	Box,
	Container,
	Heading,
	SimpleGrid
} from '@chakra-ui/react';

const NewsFeed = (props) => {
	return (
		<Box {...props}>
			<Heading align="center" color="white" my={8} id="news">
				News
			</Heading>
			<Container maxW="container.lg">
				<SimpleGrid columns={[1, 2]} spacing={4} row={1}>
					<rssapp-feed id="_TaqOVIln8c9y3xXr"></rssapp-feed>
					<script
						src="https://widget.rss.app/v1/feed.js"
						type="text/javascript"
						async
					></script>

					<div>{/* 2nd column here */}</div>
				</SimpleGrid>
			</Container>
		</Box>
	);
};

export default NewsFeed;
