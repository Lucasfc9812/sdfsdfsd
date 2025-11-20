'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';

export default function Home() {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 6;

    const updateProgress = (step) => {
        const progress = (step / totalSteps) * 100;
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            progressBar.style.width = `${progress}%`;
        }
    };

    useEffect(() => {
        updateProgress(currentStep);
    }, [currentStep]);

    const nextStep = (targetStepNumber) => {
        if (targetStepNumber === 5) {
            setCurrentStep(5);
            setTimeout(() => {
                setCurrentStep(6);
            }, 3000); // 3 seconds delay
        } else {
            setCurrentStep(targetStepNumber);
        }
    };

    return (
        <div className="app-container">
            {/* Header / Progress */}
            <header className="header">
                <div className="logo">Kamyla • Área Restrita +18</div>
                <div className="progress-bar">
                    <div className="progress-fill" id="progressBar"></div>
                </div>
            </header>

            <main className="quiz-content">
                {/* STEP 1: Age Gate */}
                <div className={`step ${currentStep === 1 ? 'active' : ''}`} id="step-1">
                    <div className="step-content">
                        <div className="image-preview blur-heavy">
                            <img src="/assets/img1.png" alt="Preview" />
                        </div>
                        <h1 className="title-lg text-danger">⚠️ ALERTA: CONTEÚDO +18</h1>
                        <p className="subtitle">
                            As imagens a seguir contêm nudez explícita e são destinadas apenas para maiores de idade.
                        </p>
                        <div className="actions">
                            <button className="btn btn-primary pulse-anim" onClick={() => nextStep(2)}>
                                SIM, TENHO MAIS DE 18 ANOS
                            </button>
                            <button className="btn btn-secondary" onClick={() => alert('Acesso negado.')}>
                                NÃO, SOU MENOR
                            </button>
                        </div>
                    </div>
                </div>

                {/* STEP 2: Preference */}
                <div className={`step ${currentStep === 2 ? 'active' : ''}`} id="step-2">
                    <div className="step-content">
                        <div className="image-preview blur-medium">
                            <img src="/assets/img2.png" alt="Preview" />
                        </div>
                        <h2 className="title-md">O QUE VOCÊ QUER VER PRIMEIRO?</h2>
                        <p className="subtitle">Me diga do que você gosta para eu preparar algo especial...</p>
                        <div className="actions vertical">
                            <button className="btn btn-option" onClick={() => nextStep(3)}>
                                <span>😈 FOTOS MINHAS NO ESPELHO</span>
                            </button>
                            <button className="btn btn-option" onClick={() => nextStep(3)}>
                                <span>🎥 VÍDEOS AMADORES CASEIROS</span>
                            </button>
                            <button className="btn btn-option" onClick={() => nextStep(3)}>
                                <span>🔥 TUDO LIBERADO (SEM CENSURA)</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* STEP 3: Secrecy (Persuasion) */}
                <div className={`step ${currentStep === 3 ? 'active' : ''}`} id="step-3">
                    <div className="step-content">
                        <div className="image-preview blur-light">
                            <img src="/assets/img3.png" alt="Preview" />
                        </div>
                        <h2 className="title-md">UMA PERGUNTA IMPORTANTE...</h2>
                        <p className="subtitle">
                            Meu conteúdo é muito pessoal e íntimo. Você promete que <strong>NUNCA</strong> vai vazar ou compartilhar nada?
                        </p>
                        <div className="actions vertical">
                            <button className="btn btn-primary" onClick={() => nextStep(4)}>
                                SIM, PROMETO MANTER SIGILO
                            </button>
                            <button className="btn btn-secondary" onClick={() => nextStep(4)}>
                                NÃO POSSO PROMETER
                            </button>
                        </div>
                    </div>
                </div>

                {/* STEP 4: Security Check */}
                <div className={`step ${currentStep === 4 ? 'active' : ''}`} id="step-4">
                    <div className="step-content">
                        <div className="security-badge">
                            <span className="shield-icon">🛡️</span>
                            <span>Compra Segura • Privacidade Garantida</span>
                        </div>

                        <h2 className="title-md text-success">🔒 CHECKOUT 100% SEGURO E TOTALMENTE DISCRETO</h2>

                        <p className="subtitle">
                            Você está em um ambiente seguro. Toda a transação é protegida por tecnologia avançada e exibida no extrato com um nome totalmente neutro. <strong>Ninguém verá que você comprou conteúdo +18.</strong>
                        </p>

                        <ul className="security-list">
                            <li>
                                <span className="icon">💳</span>
                                <div className="text">
                                    <strong>Arkama Pay</strong>
                                    <span>A cobrança aparece como Arkama Pay porque ela é a processadora autorizada, responsável por garantir uma transação segura e discreta.</span>
                                </div>
                            </li>
                            <li>
                                <span className="icon">🕵️</span>
                                <div className="text">
                                    <strong>Privacidade Assegurada</strong>
                                    <span>Seus dados nunca serão compartilhados.</span>
                                </div>
                            </li>
                            <li>
                                <span className="icon">👻</span>
                                <div className="text">
                                    <strong>Compra Anônima</strong>
                                    <span>Cobrança com nome neutro no extrato.</span>
                                </div>
                            </li>
                            <li>
                                <span className="icon">⚡</span>
                                <div className="text">
                                    <strong>Acesso Imediato</strong>
                                    <span>Liberação automática após confirmação.</span>
                                </div>
                            </li>
                        </ul>

                        <div className="actions">
                            <button className="btn btn-success pulse-anim" onClick={() => nextStep(5)}>
                                QUERO COMPRAR COM SEGURANÇA 🔒
                            </button>
                        </div>

                        <div className="security-seal-container">
                            <img src="/assets/security_seal_new.png" alt="Selo de Segurança" className="security-seal" />
                        </div>
                    </div>
                </div>

                {/* STEP 5: Analyzing */}
                <div className={`step ${currentStep === 5 ? 'active' : ''}`} id="step-5">
                    <div className="step-content centered">
                        <div className="spinner"></div>
                        <h2 className="title-md pulse">VERIFICANDO DISPONIBILIDADE...</h2>
                        <p className="subtitle">Analisando seu perfil para liberar o acesso...</p>
                        <div className="checking-steps">
                            <p className="check-item">✅ Idade verificada</p>
                            <p className="check-item">✅ Preferências salvas</p>
                            <p className="check-item">⏳ Gerando link exclusivo...</p>
                        </div>
                    </div>
                </div>

                {/* STEP 6: Offer */}
                <div className={`step ${currentStep === 6 ? 'active' : ''}`} id="step-6">
                    <div className="step-content">
                        <div className="final-image-container">
                            <img src="/assets/final.jpg" alt="Kamyla" className="final-img" />
                        </div>
                        <h1 className="title-lg text-highlight">ACESSO LIBERADO!</h1>
                        <p className="description">
                            Você conseguiu! 🎉 Liberei meu <strong>Pack Exclusivo</strong> pra você agora.
                            <br /><br />
                            Mas atenção: essa oferta é válida apenas pelos próximos <strong>10 minutos</strong>.
                            <br /><br />
                            <strong>👇 O que está te esperando:</strong>
                        </p>
                        <ul className="benefits-list">
                            <li>🔞 <strong>+500 Mídias</strong> (Fotos e Vídeos)</li>
                            <li>😈 <strong>Sem Censura</strong> (Tudo explícito)</li>
                            <li>📱 <strong>Meu WhatsApp Pessoal</strong></li>
                        </ul>

                        <div className="price-box">
                            <span className="old-price">De R$ 97,00</span>
                            <span className="new-price">POR APENAS R$ 9,99</span>
                        </div>

                        <a href="https://comprasprotegidas.com.br/VDBVbwgz" className="btn btn-primary btn-large pulse-anim">
                            QUERO VER TUDO AGORA 😈
                        </a>

                        <p className="security-note">
                            <span className="lock-icon">🔒</span> Compra 100% Segura e Discreta<br />
                            O nome na fatura não será relacionado a conteúdo adulto.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
