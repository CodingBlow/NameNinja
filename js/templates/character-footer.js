/**
 * Character Generator Footer Template
 * Dynamically inserts consistent footer across all character generators
 */

document.addEventListener('DOMContentLoaded', function() {
    // If this generator has a footer-container element, populate it with our standard footer
    const footerContainer = document.getElementById('footer-container');
    
    if (footerContainer) {
        footerContainer.innerHTML = `
        <footer>
            <div class="container">
                <div class="footer-content">
                    <div class="footer-column">
                        <h4>Name Generators</h4>
                        <ul class="footer-links">
                            <li><a href="../pet-name.html">Pet Names</a></li>
                            <li><a href="../baby-name.html">Baby Names</a></li>
                            <li><a href="../fantasy-name.html">Fantasy Names</a></li>
                            <li><a href="../startup-name.html">Business Names</a></li>
                            <li><a href="../gamer-tag.html">Gamer Tags</a></li>
                            <li><a href="../boyfriend-name.html">Boyfriend Nicknames</a></li>
                            <li><a href="../girlfriend-name.html">Girlfriend Nicknames</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Character Names</h4>
                        <ul class="footer-links">
                            <li><a href="villain-name.html">Villain Names</a></li>
                            <li><a href="hero-name.html">Hero Names</a></li>
                            <li><a href="wizard-name.html">Wizard Names</a></li>
                            <li><a href="warrior-name.html">Warrior Names</a></li>
                            <li><a href="elf-name.html">Elf Names</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Business Names</h4>
                        <ul class="footer-links">
                            <li><a href="../business/restaurant-name.html">Restaurant Names</a></li>
                            <li><a href="../business/tech-startup-name.html">Tech Startup Names</a></li>
                            <li><a href="../business/boutique-name.html">Boutique Names</a></li>
                            <li><a href="../business/salon-name.html">Salon Names</a></li>
                            <li><a href="../business/consulting-name.html">Consulting Names</a></li>
                        </ul>
                    </div>
                    <div class="footer-column">
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter for the latest naming trends and generator updates.</p>
                        <form class="newsletter-form">
                            <input type="email" placeholder="Your email address">
                            <button type="submit"><i class="fas fa-paper-plane"></i></button>
                        </form>
                        <div class="footer-social">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-discord"></i></a>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2025 Name Generator Hub. All rights reserved. | <a href="../../company/privacy-policy.html">Privacy Policy</a> | <a href="../../company/terms-of-service.html">Terms of Service</a></p>
                </div>
            </div>
        </footer>
        `;
    }
});