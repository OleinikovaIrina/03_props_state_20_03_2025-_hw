// Создайте компонент Champion, который принимает 2 props:
// nameOfChampion – имя чемпиона.
// yearsOfChampions – массив годов чемпионства.
// country – страна чемпиона.
// Требования:

// В компоненте Champion отобразите имя чемпиона, название страны и список годов чемпионства.
// В корневом элементе root создайте несколько экземпляров Champion с разными данными.
// Годы чемпионства должны выводиться в виде списка


const root = ReactDOM.createRoot(document.getElementById('root'));

const Champion =({nameOfChampion,yearsOfChampions,country}) =>{
    return(
        <div className="card m-5 shadow">
        <h2 style={{ textAlign: "center", color: "green" }}>Name: {nameOfChampion}</h2>
        <p style={{ textAlign: "center", fontSize: "20px" }}>Country: {country}</p>
        <p style={{ textAlign: "center", fontSize: "20px" }}>Years of Championships:</p>
        <ul style={{ textAlign: "center", listStyle: "none", padding: 0 }}>
            {yearsOfChampions.map((year, index) => (
                <li key={index} style={{ fontSize: "18px" }}>{year}</li>
            ))}
        </ul>
    </div>
);
};


    root.render(
    <>
        <Champion nameOfChampion="Wilhelm Steinitz" yearsOfChampions={[1886, 1894]} country="Austria-Hungary / USA" />
        <Champion nameOfChampion="Emanuel Lasker" yearsOfChampions={[1894, 1921]} country="Germany" />
        <Champion nameOfChampion="José Raúl Capablanca" yearsOfChampions={[1921, 1927]} country="Cuba" />
        <Champion nameOfChampion="Alexander Alekhine" yearsOfChampions={[1927, 1935, 1937, 1946]} country="France / USSR" />
        <Champion nameOfChampion="Max Euwe" yearsOfChampions={[1935, 1937]} country="Netherlands" />
        <Champion nameOfChampion="Mikhail Botvinnik" yearsOfChampions={[1948, 1957, 1958, 1960, 1961, 1963]} country="USSR" />
    </>
);
