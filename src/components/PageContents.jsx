function PageContents({ title, items }) {

    const scrollToSection = (id) => {

        const element = document.getElementById(id);

        if (element) {

            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    };

    return (

        <aside className="page-contents">

            <h4>{title}</h4>

            <ul>

                {items.map(item => (

                    <li key={item.id}>

                        <button
                            type="button"
                            className="contents-link"
                            onClick={() => scrollToSection(item.id)}
                        >
                            {item.title}
                        </button>

                    </li>

                ))}

            </ul>

        </aside>

    );

}

export default PageContents;