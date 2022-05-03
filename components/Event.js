function Event( { itens }) {

    return (
        <>
        <h3>Eventos</h3>
        {
            itens.map((item) => (
                <><p>{item.eventName}</p>
                {item.dateEvent}
                    {item.description}
                    {item.location}
                    {item.howToSee}</>
    ))}

        </>
    )
}

export default Event;