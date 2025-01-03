import { lusitana } from '../ui/fonts';

export default async function Page() {
  return (
    <>
      <h2 className={`${lusitana.className} text-2xl font-bold`}>
        Mentions légales
      </h2>
      <h3 className={`${lusitana.className} text-xl font-bold`}>
        Présentation du site
      </h3>
      <p className={`text-lg text-gray-800 md:text-xl md:leading-normal`}>
        En vertu de l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour
        la confiance dans l&apos;économie numérique, il est précisé aux
        utilisateurs du site http://www.partitions-fanfares-ivan-mur.com/ l&apos;identité des
        différents intervenants dans le cadre de sa réalisation et de son suivi.
      </p>
      <p className={`text-lg text-gray-800 md:text-xl md:leading-normal`}>
        Le présent site est édité par : Ivan Mur.
      </p>
      <p className={`text-lg text-gray-800 md:text-xl md:leading-normal`}>
        Responsable de la publication : Ivan Mur, joignable par email
        ivan.mur.partitions@gmail.com
      </p>
      <p className={`text-lg text-gray-800 md:text-xl md:leading-normal`}>
        Webmaster du site: Ivan Mur.
      </p>
      <p className={`text-lg text-gray-800 md:text-xl md:leading-normal`}>
        Hébergeur du site: Vercel, Inc.
      </p>
      <h3 className={`${lusitana.className} text-xl font-bold`}>
        Propriété intellectuelle et contrefaçons
      </h3>
      <p className={`text-lg text-gray-800 md:text-xl md:leading-normal`}>
        Ivan Mur est propriétaire des droits de propriété intellectuelle ou
        détient les droits d’usage sur tous les éléments accessibles sur le
        site : les textes, les images, les extraits de partitions, les fichiers midi, les vidéos. La
        reproduction, représentation, modification, publication, adaptation de
        tout ou partie des éléments du site, quel que soit le moyen ou le
        procédé utilisé, est interdite, sauf autorisation écrite préalable de
        Ivan Mur.
      </p>
      <p className={`text-lg text-gray-800 md:text-xl md:leading-normal`}>
        L&apos;exploitation non autorisée du site ou d’un quelconque élément
        qu’il contient sera considérée comme constitutive d’une contrefaçon et
        poursuivie conformément aux dispositions des articles L.335-2 et
        suivants du Code de Propriété Intellectuelle.
      </p>
      <h3 className={`${lusitana.className} text-xl font-bold`}>
        Cookies et traceurs
      </h3>
      <p className={`text-lg text-gray-800 md:text-xl md:leading-normal`}>
        Le site internet www.partitions-fanfares-ivan-mur.com n&apos;utilise pas de
        cookies.
      </p>
      <h3 className={`${lusitana.className} text-xl font-bold`}>
        Données personnelles
      </h3>
      <p className={`text-lg text-gray-800 md:text-xl md:leading-normal`}>
        Le site internet www.partitions-fanfares-ivan-mur.com ne collecte aucune donnée
        personnelle de l&apos;utilisateur.
      </p>
    </>
  );
}
