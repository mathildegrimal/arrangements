import Image from 'next/image';
import { lusitana } from '../ui/fonts';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-6 bg-white">
      <div className="mt-16 flex flex-col gap-6 px-6 md:px-16 lg:gap-20 lg:px-24 xl:flex-row">
        <div className="flex flex-col gap-6">
          <Image
            className="h-50 w-full rounded object-cover object-top"
            src={'/pexels-pixabay-45243.jpg'}
            alt={'saxo et partition'}
            width={390}
            height={320}
          />
        </div>
        <div className="flex flex-col gap-6 xl:w-2/3">
          <h1 className={`${lusitana.className} text-2xl font-bold`}>Tarifs</h1>
          <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
            Pour tout morceau figurant dans la liste des morceaux disponibles,
            le tarif sera de <span className="font-bold">49 €</span> par
            morceau.
          </p>
          <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
            Ce montant comprend :
            <ul>
              <li>- l&apos;envoi des partitions au format PDF</li>
              <li>- un conducteur et un fichier midi sur demande</li>
              <li>
                - toute adaptation de l&apos;arrangement selon votre demande
                (changement de tonalité, ajout ou suppression de voix etc...)
              </li>
            </ul>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6 px-6 md:px-16 lg:px-24">
        <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
          Pour tout morceau ne figurant pas dans cette liste, me consulter. Le
          tarif dépendra du travail à fournir mais se situe généralement entre
          60 et 80 €, sauf difficulté particulière (pour un medley par exemple).
        </p>
        <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
          Le montant comprendra :
          <ul>
            <li>- le temps passé pour l&apos;écriture de l&apos;arrangement</li>
            <li>
              - l&apos;envoi des partitions au format PDF + un conducteur et un
              fichier midi sur demande
            </li>
            <li>
              - toute adaptation de l&apos;arrangement selon votre demande
              (changement de tonalité, ajout ou suppression de voix etc...)
            </li>
          </ul>
        </p>
        <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
          Possiblité de tarif dégressif en cas de commande de 3 morceaux ou
          plus.
        </p>
        <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
          3 modes de paiement acceptés (paiement à la commande) :
          <ul>
            <li>- Chèque</li>
            <li>- Virement</li>
            <li>
              - Paypal (dans ce cas merci de cocher &quot;envoyer à un
              proche&quot;).
            </li>
          </ul>
        </p>
      </div>
    </main>
  );
}
