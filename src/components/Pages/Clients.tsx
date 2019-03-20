import React from 'react';
import Helmet from 'react-helmet';
import LayoutsMain from '../Layouts/Main';
import clientData from '../../assets/data/clients.json';
import ImageLoader from '../Site/ImageLoader';
import clientPlacer from '../../assets/images/client-placer.png';
import { ClientGrid, ClientItem } from '../UI/ClientsUI';
import { cdn } from '../../utils';

const Clients: React.FC = () => (
  <LayoutsMain>
    <Helmet title="Clients" />
    <h1>Clients</h1>
    <ClientGrid>
      {clientData.clients.map(client => (
        <ClientItem key={client.name}>
          <ImageLoader src={cdn('images', client.image)} alt={client.name} placer={clientPlacer} />
        </ClientItem>
      ))}
    </ClientGrid>
  </LayoutsMain>
);

export default Clients;
