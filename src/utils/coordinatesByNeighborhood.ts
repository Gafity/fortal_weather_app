import type { LatLngExpression } from "leaflet";

const COORDINATESBYNEIGHBORHOOD: { [key: string]: LatLngExpression } = {
  Messejana: [-3.833829, -38.494801],
  Pedras: [-3.8784072273861865, -38.515360914041594],
  Paupina: [-3.869280002390102, -38.49467905772551],
  São_Bento: [-3.855099512107024, -38.48044787286497],
  Ancuri: [-3.8653953269379286, -38.50806484349713],
  Parque_Santa_Maria: [-3.849961299259663, -38.49940413976175],
  Jangurussu: [-3.844548763722509, -38.51531642995187],
  Conjunto_Palmeiras: [-3.848758064425941, -38.52805415699367],
  Coaçu: [-3.844107752909322, -38.47732784350231],
  Lagoa_Redonda: [-3.8235205087237842, -38.46030529034214],
  Guajeru: [-3.8307367505593417, -38.47926623526552],
  Curió: [-3.8222284604770023, -38.47713481992228],
  Barroso: [-3.82053195906211, -38.511916788476384],
  Parque_Iracema: [-3.804960237267814, -38.496998790610135],
  Cambeba: [-3.8052499437042084, -38.48453700274564],
  Cajazeiras: [-3.803227941372882, -38.50940691160146],
  Cidade_dos_Funcionários: [-3.792950577325715, -38.50017832949132],
  Parque_Manibura: [-3.7913905204801464, -38.486545210446536],
  José_de_Alencar: [-3.8083301501398568, -38.47115388494624],
  Sapiranga__Coité: [-3.794963933647208, -38.46535369373089],
  Sabiaguaba: [-3.798858286070786, -38.42741517939417],
  Edson_Queiroz: [-3.777901574874879, -38.46203451352067],
  Praia_do_Futuro_I: [-3.7396174480793896, -38.45663025403287],
  Praia_do_Futuro_II: [-3.7608178395805427, -38.44613060403125],
  Manuel_Dias_Branco: [-3.758979989188997, -38.45920439158341],
  De_Lourdes: [-3.7409372444909548, -38.462990246690865],
  Papicu: [-3.739101320261517, -38.47532828310044],
  Cocó: [-3.7486928553925245, -38.480184362509924],
  Cidade_2000: [-3.7511672020730735, -38.47205985158027],
  Vicente_Pinzón: [-3.72898165192108, -38.469735918522055],
  Cais_do_Porto: [-3.7150393016804832, -38.47062173993952],
};

const FORTALPOSITION: LatLngExpression = [-3.795, -38.5266];

export function coordinatesByNeighborhood(
  neighborhood: string,
): LatLngExpression {
  neighborhood = neighborhood.replaceAll(" ", "_");
  neighborhood = neighborhood.replaceAll("/", "");

  console.log(neighborhood);
  const neighborhoodCoordinates: LatLngExpression =
    COORDINATESBYNEIGHBORHOOD[neighborhood] ?? FORTALPOSITION;
  return neighborhoodCoordinates;
}
