import './News.css';
import { useLanguageHook } from '../../hooks/useLanguage';
import SectionTitle from '../../components/layout/SectionTitle';

const newsCards = [
  {
    id: 1,

    image: "/assets/images/Co Profile 70 Pages 03-images-54.jpg"
  },
  {
    id: 2,
 
    image: "/assets/images/Co Profile 70 Pages 03-images-63.jpg"
  },
  {
    id: 3,
 
    image: "/assets/images/Co Profile 70 Pages 03-images-65.jpg"
  },
];

const News = () => {
  const { language } = useLanguageHook();
  const isRTL = language === 'ar';

  const text = {
    title: isRTL ? 'يسعدنا الإعلان عن مشاركة مصنعنا في معرض هيلث إكسبو – بغداد، والذي سيُقام من 18 إلى 21 أيلول. سنعرض خلاله جودة خدماتنا وإمكاناتنا المتقدمة في مجال الطباعة. ' : 'We are pleased to announce our participation in Health Expo – Baghdad, taking place from September 18 to September 21. During the event, we will showcase the quality of our services and our advanced printing capabilities.',
  };

  return (
    <div className={`news-page ${isRTL ? 'rtl' : 'ltr'}`}>
      {/*  الفيديو  */}
      <SectionTitle title={language === 'ar' ? 'الاخبار' : 'News '} />

      <div className="news-container">
        <div className="news-text">
          <h2>{text.title}</h2>
        </div>
        <div className="news-video">
          <video controls>
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>


      <div className="news-cards">
        {newsCards.map((news) => (
          <div className="news-card" key={news.id}>
            <img src={news.image} alt={isRTL ? news.titleAr : news.titleEn} />
            <div className="news-card-content">
              <h3>{isRTL ? news.titleAr : news.titleEn}</h3>
              <p>{isRTL ? news.descriptionAr : news.descriptionEn}</p>
              <span className="news-card-date">{news.date}</span>
              {/* <button className="read-more-btn">{text.button}</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
