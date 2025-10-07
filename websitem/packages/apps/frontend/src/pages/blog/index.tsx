import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogPostCard from '../../components/BlogPostCard';

const samplePosts = [
  {
    id: 1,
    title: "SMM Panel Kullanmanın Avantajları",
    summary: "Sosyal medya pazarlamasında SMM panelleri neden bu kadar popüler? İşletmenize ne gibi faydalar sağlar? Detaylar yazımızda...",
    imageUrl: "https://via.placeholder.com/400x200.png?text=Blog+Resmi+1",
  },
  {
    id: 2,
    title: "Instagram'da Takipçi Sayısını Artırmanın 5 Yolu",
    summary: "Organik olarak takipçi sayınızı nasıl artırabilirsiniz? İşte size özel olarak hazırladığımız 5 etkili yöntem.",
    imageUrl: "https://via.placeholder.com/400x200.png?text=Blog+Resmi+2",
  },
  {
    id: 3,
    title: "API Entegrasyonu ile Siparişlerinizi Otomatize Edin",
    summary: "Kendi yazılımınız veya siteniz üzerinden panelimize nasıl otomatik sipariş geçebilirsiniz? API kullanımı hakkında temel bilgiler.",
    imageUrl: "https://via.placeholder.com/400x200.png?text=Blog+Resmi+3",
  },
];

const BlogPage = () => (
  <div>
    <Header />
    <main className="container" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
      <div className="main-page-title col-span-12" style={{ marginBottom: '40px' }}>
        <i className="fas fa-newspaper"></i> Blog Yazıları
      </div>
      <div className="grid-container" style={{ gap: '20px' }}>
        {samplePosts.map(post => (
          <div className="col-span-4" key={post.id}>
            <BlogPostCard
              id={post.id}
              title={post.title}
              summary={post.summary}
              imageUrl={post.imageUrl}
            />
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </div>
);

export default BlogPage;