import Card from './components/Card';
import DefaultLayout from './layouts/DefaultLayout';
import Grid from './components/utils/Grid';
import Button from './components/Button';

function App() {
  return (
    <>
      <Grid />
      <DefaultLayout>
        <DefaultLayout.Header className="header | bg-light-2 py-xl">
          <div className="container flow">
            <h1 className="text-main">Titre de la page</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem beatae atque facere incidunt, vitae quia, sit
              consequatur iusto itaque cumque alias nemo, expedita molestiae
              magni asperiores explicabo similique minus qui.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem beatae atque facere incidunt, vitae quia, sit
              consequatur iusto itaque cumque alias nemo, expedita molestiae
              magni asperiores explicabo similique minus qui.
            </p>
          </div>
        </DefaultLayout.Header>
        <DefaultLayout.Body>
          <div className="container flow">
            <div className="grid-flow">
              <Card
                title="Produit 1"
                category="Meilleure vente"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia quod assumenda laudantium dignissimos minima! "
              />
              <Card
                title="Produit 2"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia quod assumenda laudantium dignissimos minima! "
              />
              <Card
                title="Produit 3"
                category="Nouveauté"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia quod assumenda laudantium dignissimos minima! "
              />
            </div>
            <Button>Primary Button</Button>
            <Button variant="secondary" size="tiny">
              Secondary Button
            </Button>
          </div>
        </DefaultLayout.Body>
      </DefaultLayout>
    </>
  );
}

export default App;
