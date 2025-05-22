function downloadPDF() {
    // Ẩn tabs trước khi xuất PDF
    var tabs = document.querySelector('.tabs');
    if (tabs) tabs.style.display = 'none';

    const element = document.getElementById('portfolio-content');
    html2pdf().set({
        margin: 0.5,
        filename: 'portfolio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    }).from(element).save().then(() => {
        // Hiện lại tabs sau khi xuất PDF
        if (tabs) tabs.style.display = '';
    });
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(function(tab) {
        tab.style.display = 'none';
    });
    document.querySelectorAll('.tab-btn').forEach(function(btn) {
        btn.classList.remove('active');
    });
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}