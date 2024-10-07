



function App() {

  return (
   <>
       <header>
        <div className="container">
            <nav>
                <ul>
                    <li className="logo">BitPrize</li>
                    <li><a href="#how-it-works">How It Works</a></li>
                    <li><a href="#prizes">Prizes</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                    <li><a href="#stats">Stats</a></li>
                    <li><a href="#" className="cta-button">Launch App</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <main>
        <div className="container">
            <section className="hero">
                <h1>Win Bitcoin.<br/>Never Lose.</h1>
                <p>BitPrize is the first Bitcoin-native savings game. Deposit your BTC, earn yield, and get a chance to win big prizes - all without risking your principal.</p>
                <a href="#" className="cta-button">Start Saving & Winning</a>
            </section>

            <section id="how-it-works" className="section">
                <h2>How BitPrize Works</h2>
                <div className="card-grid">
                    <div className="card">
                        <h3>1. Deposit Bitcoin</h3>
                        <p>Safely deposit your BTC into the BitPrize smart contract.</p>
                    </div>
                    <div className="card">
                        <h3>2. Earn Yield</h3>
                        <p>Your deposited BTC earns yield through secure DeFi protocols.</p>
                    </div>
                    <div className="card">
                        <h3>3. Win Prizes</h3>
                        <p>The yield is distributed as prizes in weekly drawings.</p>
                    </div>
                </div>
            </section>

            <section id="prizes" className="section">
                <h2>Prize Pool</h2>
                <div className="prize-pool">
                    <h3>Current Prize Pool: ₿ 2.5847</h3>
                    <p>Next Draw: 2d 14h 33m</p>
                    <p>90% of the yield goes to the prize pool, 10% to the protocol for sustainability.</p>
                    <a href="#" className="cta-button">Deposit Now to Enter</a>
                </div>
            </section>

            <section id="faqs" className="section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h3>Is BitPrize really `lossless`?</h3>
                    <p>Yes! Your deposited Bitcoin remains yours and can be withdrawn at any time. Only the yield generated is used for prizes.</p>
                </div>
                <div className="faq-item">
                    <h3>How are winners selected?</h3>
                    <p>Winners are chosen using a provably fair random number generator on the blockchain, ensuring complete transparency and fairness.</p>
                </div>
                <div className="faq-item">
                    <h3>What are my odds of winning?</h3>
                    <p>Your odds are proportional to the amount of Bitcoin you've deposited compared to the total pool size.</p>
                </div>
                <div className="faq-item">
                    <h3>Is my Bitcoin safe?</h3>
                    <p>BitPrize uses advanced security measures and smart contracts that have been audited by leading blockchain security firms.</p>
                </div>
            </section>

            <section id="stats" className="section">
                <h2>BitPrize Stats</h2>
                <div className="stats-grid">
                    <div className="card">
                        <h3>Total Value Locked</h3>
                        <p>₿ 1,234.5678</p>
                    </div>
                    <div className="card">
                        <h3>Total Players</h3>
                        <p>12,345</p>
                    </div>
                    <div className="card">
                        <h3>Avg. APY</h3>
                        <p>5.67%</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Ready to Start?</h2>
                <p>Join thousands of players already saving and winning with BitPrize.</p>
                <a href="#" className="cta-button">Launch App</a>
            </section>
        </div>
    </main>

    <footer>
        <div class="container">
            <div class="footer-grid">
                <div>
                    <h4>BitPrize</h4>
                    <p>The Bitcoin-native savings game where everyone's a winner.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#how-it-works">How It Works</a></li>
                        <li><a href="#prizes">Prizes</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Legal</h4>
                    <ul>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">Medium</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2024 BitPrize. All rights reserved.</p>
            </div>
        </div>
    </footer>
   </>
  )
  
}

export default App
