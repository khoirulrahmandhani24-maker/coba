const searchInput = document.getElementById('searchInput');
const resultDiv = document.getElementById('result');
const noResultDiv = document.getElementById('noResult');
const mimpiList = document.getElementById('mimpiList');

function renderList(filter = 'all') {
  mimpiList.innerHTML = '';
  const filtered = filter === 'all' ? mimpiData : mimpiData.filter(m => m.kategori === filter);
  filtered.forEach(m => {
    const div = document.createElement('div');
    div.className = 'mimpi-item';
    div.innerHTML = `<h4>${m.kata.charAt(0).toUpperCase() + m.kata.slice(1)}</h4><p>${m.arti.substring(0, 60)}...</p>`;
    div.onclick = () => showResult(m);
    mimpiList.appendChild(div);
  });
}

function showResult(data) {
  resultDiv.innerHTML = `
    <h3>Arti Mimpi: <span style="color:var(--primary);">${data.kata.charAt(0).toUpperCase() + data.kata.slice(1)}</span></h3>
    <p><strong>Makna:</strong> ${data.arti}</p>
    <div class="filosofi">
      <p><strong>Refleksi Filosofis:</strong> ${data.filosofi}</p>
    </div>
    <p class="source">— ${data.sumber}</p>
  `;
  resultDiv.style.display = 'block';
  noResultDiv.style.display = 'none';
}

// Pencarian
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  if (!query) {
    resultDiv.style.display = 'none';
    return;
  }
  const match = mimpiData.find(m => m.kata.includes(query));
  if (match) {
    showResult(match);
  } else {
    resultDiv.style.display = 'none';
    noResultDiv.style.display = 'block';
  }
});

// Kategori
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderList(btn.dataset.cat);
  };
});

// Init
renderList();