
// FAQ section scripte
document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".toggle-icon");

        question.addEventListener("click", () => {
            // إغلاق جميع الأسئلة الأخرى
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.querySelector(".faq-answer").style.display = "none";
                    otherItem.querySelector(".toggle-icon").textContent = "+";
                    otherItem.classList.remove('active');
                }
            });

            // تبديل حالة العنصر الحالي
            if (answer.style.display === "block" || item.classList === "active") {
                answer.style.display = "none";
                icon.textContent = "+";
                item.classList.remove('active');
            } else {
                answer.style.display = "block";
                icon.textContent = "−";
                item.classList.add('active')
            }
        });
    });
});

// Info section scripte
document.addEventListener("DOMContentLoaded", function () {
    const automationBox = document.querySelectorAll(".automation-box");
    automationBox.forEach((item) => {
        const automationTitle = item.querySelector(".automation-title");
        const automationText = item.querySelector(".automation-text");
        // const icon = item.querySelector(".toggle-icon");

        automationTitle.addEventListener("click", () => {
            // إغلاق جميع الأسئلة الأخرى
            automationBox.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.querySelector(".automation-text").style.display = "none";
                    // otherItem.querySelector(".toggle-icon").textContent = "+";
                    otherItem.classList.remove("active");
                    console.log("clicked box")
                }
            });

            // تبديل حالة العنصر الحالي
            if (automationText.style.display === "block" || item.classList === "active") {
                automationText.style.display = "none";
                item.classList.remove("active");
            } else {
                automationText.style.display = "block";
                item.classList.add('active');
            }
        });
    });
});
