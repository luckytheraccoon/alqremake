export default (contentId) => {
	
    var content = new Object({
        id: null,
        title: null
    });

    var amt = 10;
    var n = [];
    for(var i=0;i<amt;i++) {
        var x = Object.create(content);
        x.id = i;
        x.title = i + "Yoooo";
        n.push(x);
    }
	
    var contentToShow = n[contentId];

    return {
        id: contentToShow.id,
        title: "Content Title " + contentToShow.id,
        intro: "This will show up as an excerpt to show as a headline or a single introductory paragraph.",
        body: "This is the actual body. Here comes lorem ipsum goodness! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        date: "20 Junho, 2017",
        time: "16h30m",
        author: "Pedro Lucas Ferreira"
    };
};