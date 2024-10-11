document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskValue = taskInput.value.trim();
    
    if (taskValue) {
        addTask(taskValue);
        taskInput.value = ''; // Girdiyi temizle
    }
});

function addTask(task) {
    const taskList = document.getElementById('task-list');
    
    // Yeni görev öğesi oluştur
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${task}</span>
        <button class="delete">Delete</button>
    `;
    
    // Tamamlanan görev üzerine tıklayınca üstü çizilecek
    li.querySelector('span').addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    // Görevi silmek için buton
    li.querySelector('.delete').addEventListener('click', function() {
        li.remove();
    });

    // Görev listesinin sonuna ekle
    taskList.appendChild(li);


    // Rastgele renk üretme fonksiyonu
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Arka plan rengini değiştiren fonksiyon
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// 2 saniyede bir arka plan rengini değiştir
setInterval(changeBackgroundColor, 2000);

}
