import React, { useState } from 'react';
import art1 from '../Conf/art1.jpg'

const Blog = () => {
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: 'Comment retrouver la forme après un cancer?',
      content: 'Contenu du premier article',
      image: '../Conf/art2.jpeg',
      date:'18 mai 2023',
      categorie: 'SANTÉ',
    },
    {
      id: 2,
      title: 'La technologie au service de la plateforme handitsport',
      content: 'La technologie au service de la plateforme handitsport',
      image: '../Conf/art2.jpeg',
      date:'19 mai 2023',
      categorie: 'SANTÉ',
    },
    {
      id: 3,
      title: 'Entraînement collectif en plein Paris, la nouvelle tendance bien-être',
      content: 'Contenu du troisième article',
      image: '../Conf/art3.png',
      date:'20 mai 2023',
      categorie: 'SPORT',
    },
    {
        id: 4,
        title: '5 aliments miraculeux pour la récupération musculaire',
        content: 'Contenu du troisième article',
        image: '../Conf/art3.png',
        date:'12/04/2023',
        categorie: 'NUTRITION',
      },
      {
        id: 5,
        title: 'Le diabète, ennemi numero un des athletes olympiques',
        content: 'Contenu du troisième article',
        image: '../Conf/art3.png',
        date:'20 mai 2023',
        categorie: 'SANTE',
      },
      {
        id: 6,
        title: 'lescalade: le nouveau sport en vogue chez les 8-15 ans',
        content: 'Contenu du troisième article',
        image: '../Conf/art3.png',
        date:'20 mai 2023',
        categorie: 'SPORT',
      },
      {
        id: 7,
        title: 'Kunto: la nouvelle application mobile adaptée à l activité physique des seniors',
        content: 'Contenu du troisième article',
        image: '../Conf/art3.png',
        date:'20 mai 2023',
        categorie: 'SPORT',
      },
      {
        id: 7,
        title: 'Planifier ses repas, la nouvelle technique anti-gaspillage',
        content: 'Contenu du troisième article',
        image: '../Conf/art3.png',
        date:'20 mai 2023',
        categorie: 'NUTRITION',
      },
      {
        id: 8,
        title: 'Du nouveau dans la recherche contre le cancer',
        content: 'Contenu du troisième article',
        image: '../Conf/art3.png',
        date:'20 mai 2023',
        categorie: 'SANTE',
      },
  ]);

  const [currentArticle, setCurrentArticle] = useState(null);

  const handleClick = (article) => {
    setCurrentArticle(article);
  };

  return (
    <div>
      <div className="articles-list">
        {articles.map((article) => (
          <div key={article.id} onClick={() => handleClick(article)}>
            <img src={art1} alt={article.title} />
           <div className='block'>
            <p className='cat'>{article.categorie}</p>
            <p className='date'> {article.date}</p>
            <h3>{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Blog;