export function fetchContent() {
    return {
        type: "FETCH_CONTENT_FULFILLED",
        payload: {
            id: 1,
            title: "This is a news item",
            excerpt: "This will show up as an excerpt to show as a headline or a single introductory paragraph.",
            body: "This is the actual body. Here comes lorem ipsum goodness! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: "2017-06-20 16:38:22",
            author: "Pedro Lucas Ferreira"
        }
    };
}