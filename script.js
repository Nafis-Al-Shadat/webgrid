const messages = ["ই-কমার্স ওয়েবসাইট", "আকর্ষণীয় ল্যান্ডিং পেজ", "দ্রুত বাগ ফিক্সিং" , "এআই (AI) ইন্টিগ্রেশন"];
let index = 0;

const changeEl = document.getElementById("changing-h1");

function changeText() {
  changeEl.textContent = messages[index];
  index = (index + 1) % messages.length; 
}

// পেজ লোড হওয়ার সাথে সাথে প্রথম টেক্সটটি দেখানোর জন্য
changeText(); 

// setInterval এর বদলে এটি ব্যবহার করুন। 
// এটি প্রতিবার CSS অ্যানিমেশন (২ সেকেন্ড) শেষ হওয়ার ঠিক মুহূর্তে ফায়ার হবে, যখন টেক্সটটি অদৃশ্য (opacity: 0) থাকে।
changeEl.addEventListener("animationiteration", changeText);


document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("comp-container");
  const modernLayer = document.getElementById("modern-layer");
  const sliderHandle = document.getElementById("comp-slider");
  
  let isSliding = false;

  // মাউস ইভেন্ট
  sliderHandle.addEventListener("mousedown", () => isSliding = true);
  document.addEventListener("mouseup", () => isSliding = false);
  document.addEventListener("mousemove", (e) => slideMove(e.pageX));

  // মোবাইল টাচ ইভেন্ট
  sliderHandle.addEventListener("touchstart", () => isSliding = true);
  document.addEventListener("touchend", () => isSliding = false);
  document.addEventListener("touchmove", (e) => slideMove(e.touches[0].pageX));

  function slideMove(pageX) {
    if (!isSliding) return;
    
    // কন্টেইনারের পজিশন বের করা
    const containerRect = container.getBoundingClientRect();
    
    // কার্সরের এক্স (X) পজিশন হিসাব করা
    let xPosition = pageX - containerRect.left;
    
    // স্লাইডার যেন বক্সের বাইরে না যায়
    if (xPosition < 0) xPosition = 0;
    if (xPosition > containerRect.width) xPosition = containerRect.width;
    
    // আধুনিক ওয়েবসাইটের লেয়ার এবং হ্যান্ডেলের জায়গা পরিবর্তন করা
    modernLayer.style.width = xPosition + "px";
    sliderHandle.style.left = xPosition + "px";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(question => {
    question.addEventListener("click", function() {
      // বর্তমানে ক্লিক করা প্রশ্নটির একটিভ স্ট্যাটাস চেক করা
      const isActive = this.classList.contains("active");
      
      // অন্য সব প্রশ্নের উত্তর বন্ধ করে দেওয়া (যাতে একসাথে শুধু একটি উত্তর খোলা থাকে)
      faqQuestions.forEach(btn => {
        btn.classList.remove("active");
        btn.nextElementSibling.style.maxHeight = null;
      });

      // যদি প্রশ্নটি আগে থেকে খোলা না থাকে, তাহলে এটি খুলবে
      if (!isActive) {
        this.classList.add("active");
        const answer = this.nextElementSibling;
        // scrollHeight এর মাধ্যমে ঠিক যতটুকু টেক্সট আছে, ততটুকু জায়গা স্মুথলি খুলে যাবে
        answer.style.maxHeight = answer.scrollHeight + "px"; 
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
      const wrapper = document.getElementById('parallax-wrapper');
      const system = document.getElementById('orbit-system');

      if(wrapper && system) {
          wrapper.addEventListener('mousemove', (e) => {
              const rect = wrapper.getBoundingClientRect();
              
              // Mouse position relative to the element
              const x = e.clientX - rect.left; 
              const y = e.clientY - rect.top;  
              
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              // Max tilt degree
              const maxRotate = 15; 

              // Calculate 3D tilt
              const rotateY = ((x - centerX) / centerX) * maxRotate;
              const rotateX = -((y - centerY) / centerY) * maxRotate;

              system.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          });

          // Reset the position smoothly when mouse leaves
          wrapper.addEventListener('mouseleave', () => {
              system.style.transform = `rotateX(0deg) rotateY(0deg)`;
          });
      }
  });