const contributions = [
  { id: 1, type: 'available', price: '1.50', title: 'أرض تجارية - شمال الرياض', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600', area: '1200م²', ret: '15%' },
  { id: 2, type: 'available', price: '2.30', title: 'مجمع سكني - جدة', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600', area: '2500م²', ret: '18%' },
  { id: 3, type: 'closed', price: '3.10', title: 'برج ميزة - الخبر', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600', area: '5000م²', ret: '22%' },
  { id: 4, type: 'available', price: '0.95', title: 'فلل سكنية - الدمام', img: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600', area: '800م²', ret: '12%' },
  { id: 5, type: 'available', price: '1.20', title: 'مخطط النخيل - الرياض', img: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600', area: '1500م²', ret: '14%' },
  { id: 6, type: 'available', price: '2.80', title: 'مجمع تجاري - مكة', img: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745b?w=600', area: '3200م²', ret: '20%' }
];

const grid = document.getElementById('grid');
const filterButtons = document.querySelectorAll('.filter button');

function renderCards(items) {
  grid.innerHTML = items.map(item => `
    <article class="card">
      <div class="card-img">
        <img src="${item.img}" alt="${item.title}" loading="lazy">
        <span class="badge">${item.type === 'available' ? 'متاح' : 'مغلق'}</span>
      </div>
      <div class="card-body">
        <div class="price">${item.price} مليون <span>/ قيمة السهم</span></div>
        <h4>${item.title}</h4>
        <div class="meta"><span>📐 ${item.area}</span><span>📈 ${item.ret} عائد</span></div>
        <div class="card-footer">
          <button class="btn-turq" type="button" data-invest="${item.id}">استثمر الآن</button>
        </div>
      </div>
    </article>
  `).join('');
}

function filterCards(type) {
  const filtered = type === 'all'
    ? contributions
    : contributions.filter(item => item.type === type);
  renderCards(filtered);
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    filterCards(button.dataset.filter);
  });
});

grid.addEventListener('click', event => {
  const investButton = event.target.closest('[data-invest]');
  if (!investButton) return;

  const contributionId = investButton.dataset.invest;
  alert(`سيتم تحويلك لصفحة تفاصيل المساهمة رقم ${contributionId}\nهنا تربطها بصفحة الدفع`);
});

renderCards(contributions);
