export default function PricingList() {
  const pricing = [
    {
      "Coupe longue": {
        "Shampoing, soin, coupe, coiffage": "40",
        "Shampoing, soin, coiffage": "23",
        "Couleur Inoa (racines), shampoing, soin, coupe, coiffage": "65",
        "Couleur Inoa (racines), shampoing, soin, coiffage": "55",
      },
      "Coupe courte": {
        "Shampoing, coupe, coiffage": "23",
        "Couleur, shampoing, coupe, coiffage": "55",
      },
      Carte: {
        Shampoing: "8",
        Soin: "8",
        Traitement: "8",
        "Mèches (1/2 tête)": "8",
        "Tie and Dye": "8",
      },
    },
  ];

  const pricingHtml = pricing.map((category, index) => (
    <ul key={index}>
      {Object.keys(category).map((serviceType) => (
        <li key={serviceType}>
          <strong>{serviceType}</strong>
          <ul>
            {Object.keys(category[serviceType]).map((service) => (
              <li key={service} className="flex flex-row justify-between items-center flex-2">
                <span className="w-fit">{service}:</span><hr className="w-full"/><span>{category[serviceType][service]} €</span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  ));

  return <div>{pricingHtml}</div>;
}
