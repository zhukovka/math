export function fillContents (containerId = "contents") {
    const contents = document.getElementById(containerId);

    if (contents) {
        // get all articles
        const articles = document.querySelectorAll("article");
        const fragment = document.createDocumentFragment();
        // get all headings in each article
        for (const article of articles) {
            const children = article.children;
            let h1, h2, h3, h4, h5, parent, li;
            // build headings hierarchy
            for (const child of children) {
                switch (child.tagName) {
                    case "H1":
                        h1 = getList(h1, li, fragment);
                        li = h1.appendChild(createListItem(child));
                        break;
                    case "H2":
                        h2 = getList(h2, li, fragment);
                        li = h2.appendChild(createListItem(child));
                        break;
                    case "H3":
                        h3 = getList(h3, li, fragment);
                        li = h3.appendChild(createListItem(child));
                        break;
                    case "H4":
                        h4 = getList(h4, li, fragment);
                        li = h4.appendChild(createListItem(child));
                        break;
                    case "H5":
                        h5 = getList(h5, li, fragment);
                        li = h5.appendChild(createListItem(child));
                        break;
                }
            }
        }
        contents.appendChild(fragment);

    }

    function getList (ul, li, fragment) {
        if (!ul) {
            ul = document.createElement("ul");
            let parent = li || fragment;
            parent.appendChild(ul);
        }
        return ul;
    }

    function createListItem (child) {
        child.id = child.id || child.innerText.replace(/\s/g, "");
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = `${location.pathname}#${child.id}`;
        a.innerHTML = child.innerText;
        li.appendChild(a);
        return li;
    }
}
