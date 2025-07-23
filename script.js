document.addEventListener('DOMContentLoaded', () => {
    const wishes = [
        "ขอให้วันนี้เป็นวันที่ดีของคุณนะ!",
        "ขอให้มีความสุขในทุกๆ วันที่ตื่นขึ้นมาเลยนะ!",
        "ยิ้มเข้าไว้ โลกจะได้สดใสไปกับคุณ!",
        "ทุกก้าวที่คุณเดิน ขอให้มีแต่ความสำเร็จนะ!",
        "ขอให้วันนี้เต็มไปด้วยความรักและความเมตตา!",
        "เป็นกำลังใจให้เสมอ ไม่ว่าจะเจออะไร!",
        "ขอให้มีแต่เรื่องดีๆ เข้ามาในชีวิตนะ!",
        "ความสุขอยู่รอบตัว แค่ลองมองหาดูสิ!",
        "ขอให้มีพลังงานบวกตลอดทั้งวันเลยนะ!",
        "คุณคือคนพิเศษ อย่าลืมยิ้มให้ตัวเองนะ!"
    ];

    const wishText = document.getElementById('wishText');
    const newWishBtn = document.getElementById('newWishBtn');
    const wishCard = document.getElementById('wishCard');

    function getRandomWish() {
        const randomIndex = Math.floor(Math.random() * wishes.length);
        return wishes[randomIndex];
    }

    newWishBtn.addEventListener('click', () => {
        // Reset animation
        wishCard.style.animation = 'none';
        void wishCard.offsetWidth; // Trigger reflow
        wishCard.style.animation = null; // Reapply animation

        wishText.textContent = getRandomWish();
    });

    // Set initial wish
    wishText.textContent = getRandomWish();
});