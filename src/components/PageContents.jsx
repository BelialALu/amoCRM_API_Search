function PageContents({ title, items }) {

    return (

        <aside className="page-contents">

            <h4>{title}</h4>

            <ul>

                {items.map(item => (

                    <li key={item.id}>

                        <a href={`#${item.id}`}>
                            {item.title}
                        </a>

                    </li>

                ))}

            </ul>

        </aside>

    );

}

export default PageContents;