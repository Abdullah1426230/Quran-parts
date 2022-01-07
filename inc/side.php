 <header>
     <nav>
         <h1></h1>
         <span id="open"><i class="fas fa-bars fa-2x"></i></span>
     </nav>
    
     <div class="sideOverlay"></div>
     <aside class="side">
         <div class="title">
             <h3>القائمة</h3>
             <span id="close"><i class="fas fa-times fa-2x"></i></span>
         </div>
         <ul>
             <a href="../index.php">
                 <li>الرئيسية</li>
             </a>
             <a href="../index.php#about">
                 <li>عن الموقع</li>
             </a>
             <div class="drop">
                 <li>الأجزاء</li>
                 <menu>

                 </menu>
             </div>

             <a href="#description">
                 <li>وصف القراء</li>
             </a>
             <!-- <a href="../index.php#all">
                    <li>القرآن كاملًا للقراء</li>
                </a> -->
             <a href="../index.php#contact">
                 <li>تواصل معنا</li>
             </a>
             <a href="../index.php#PDFs">
                 <li>القرآن الكريم والتفسير الميسر</li>
             </a>
             <a href="end.php">
                 <li>دعاء ختم القرآن الكريم</li>
             </a>
             <!-- <!- <a href="">
                    <li>حمل تطبيقنا</li>
                </a> ->
                <a href="">
                    <li>مواقعنا</li>
                </a> -->
             <a target="_blank" href="https://t.me/WebsiteQuran">
                 <li>قناتنا على تيليجرام</li>
             </a>
         </ul>
     </aside>
 </header>
 <div style=" position: fixed;
    padding:10px;
    font-size:45px;
    text-align:center;
    height: 100vh;
    width: 100vw;
    background-color: #748824;
    color: white;
    top: 0;
    right: 0;
    z-index: 66666666666666666666666666666666666666666666666;" class="loading">
     <h2>جاري التحميل....</h2>
 </div>


 <!-- Top + Open Side -->
 <div class="top-openside">
     <button>فتح القائمة</button>
     <button onclick="goToTop()"><i class="fas icon fa-arrow-up"></i></button>
 </div>