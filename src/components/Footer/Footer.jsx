// import React from 'react'
import { Link } from 'react-router-dom'
// import TelegramBot from 'node-telegram-bot-api'

import './Footer.scss'
import { useState } from 'react'

const socLinks = [
    {
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 7.5C11.11 7.5 10.24 7.76392 9.49993 8.25839C8.75991 8.75285 8.18314 9.45566 7.84254 10.2779C7.50195 11.1002 7.41283 12.005 7.58647 12.8779C7.7601 13.7508 8.18868 14.5526 8.81802 15.182C9.44736 15.8113 10.2492 16.2399 11.1221 16.4135C11.995 16.5872 12.8998 16.4981 13.7221 16.1575C14.5443 15.8169 15.2471 15.2401 15.7416 14.5001C16.2361 13.76 16.5 12.89 16.5 12C16.4987 10.8069 16.0241 9.66312 15.1805 8.8195C14.3369 7.97588 13.1931 7.50134 12 7.5ZM12 15C11.4067 15 10.8266 14.8241 10.3333 14.4944C9.83994 14.1648 9.45542 13.6962 9.22836 13.1481C9.0013 12.5999 8.94189 11.9967 9.05764 11.4147C9.1734 10.8328 9.45912 10.2982 9.87868 9.87868C10.2982 9.45912 10.8328 9.1734 11.4147 9.05764C11.9967 8.94189 12.5999 9.0013 13.1481 9.22836C13.6962 9.45542 14.1648 9.83994 14.4944 10.3333C14.8241 10.8266 15 11.4067 15 12C14.9991 12.7954 14.6827 13.5579 14.1203 14.1203C13.5579 14.6827 12.7954 14.9991 12 15ZM16.125 2.625H7.875C6.4831 2.62659 5.14867 3.18022 4.16444 4.16444C3.18022 5.14867 2.62659 6.4831 2.625 7.875V16.125C2.62659 17.5169 3.18022 18.8513 4.16444 19.8356C5.14867 20.8198 6.4831 21.3734 7.875 21.375H16.125C17.5169 21.3734 18.8513 20.8198 19.8356 19.8356C20.8198 18.8513 21.3734 17.5169 21.375 16.125V7.875C21.3734 6.4831 20.8198 5.14867 19.8356 4.16444C18.8513 3.18022 17.5169 2.62659 16.125 2.625ZM19.875 16.125C19.8739 17.1192 19.4784 18.0724 18.7754 18.7754C18.0724 19.4784 17.1192 19.8739 16.125 19.875H7.875C6.88078 19.8739 5.9276 19.4784 5.22458 18.7754C4.52156 18.0724 4.12612 17.1192 4.125 16.125V7.875C4.12612 6.88078 4.52156 5.9276 5.22458 5.22458C5.9276 4.52156 6.88078 4.12612 7.875 4.125H16.125C17.1192 4.12612 18.0724 4.52156 18.7754 5.22458C19.4784 5.9276 19.8739 6.88078 19.875 7.875V16.125ZM18 7.125C18 7.3475 17.934 7.56501 17.8104 7.75002C17.6868 7.93502 17.5111 8.07922 17.3055 8.16436C17.1 8.24951 16.8738 8.27179 16.6555 8.22838C16.4373 8.18498 16.2368 8.07783 16.0795 7.9205C15.9222 7.76316 15.815 7.56271 15.7716 7.34448C15.7282 7.12625 15.7505 6.90005 15.8356 6.69448C15.9208 6.48891 16.065 6.31321 16.25 6.1896C16.435 6.06598 16.6525 6 16.875 6C17.1734 6 17.4595 6.11853 17.6705 6.3295C17.8815 6.54048 18 6.82663 18 7.125Z" fill="#EBEBF5" />
        </svg>,
        "link": "https://t.me/Abbos_uz1"
    },
    {
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M23.0303 7.28039L20.2457 10.065C20.1709 12.8172 19.1204 15.5013 17.3375 17.472C15.2491 19.7801 12.3661 21 9.00001 21C5.72701 21 4.03989 19.3506 3.96967 19.2804C3.87372 19.1845 3.8056 19.0643 3.77256 18.9327C3.73951 18.8011 3.74279 18.663 3.78203 18.5331C3.82128 18.4032 3.89502 18.2864 3.9954 18.1951C4.09579 18.1039 4.21906 18.0415 4.35208 18.0148C5.15251 17.8526 7.13935 17.2212 7.98489 16.083C7.07836 15.5603 6.27339 14.8786 5.60851 14.0705C3.25614 11.214 3.30601 7.62426 3.76211 5.11589C3.78784 4.97429 3.85378 4.84308 3.95205 4.73792C4.05031 4.63277 4.17676 4.55811 4.3163 4.52285C4.45584 4.4876 4.60257 4.49324 4.73899 4.5391C4.87541 4.58495 4.99576 4.6691 5.08567 4.78148C5.11145 4.81354 7.57642 7.83351 11.25 8.82023V8.25023C11.2579 7.04932 11.7424 5.90071 12.5969 5.05689C13.4515 4.21308 14.6061 3.74312 15.807 3.75033C16.5871 3.76111 17.3511 3.97407 18.0243 4.36838C18.6975 4.7627 19.257 5.32489 19.6479 6.00004H22.5C22.6483 6.00004 22.7934 6.04402 22.9167 6.12643C23.04 6.20884 23.1362 6.32598 23.1929 6.46303C23.2497 6.60008 23.2646 6.75088 23.2356 6.89637C23.2067 7.04186 23.1352 7.1755 23.0303 7.28039Z" fill="#EBEBF5" />
        </svg>,
        "link": "https://t.me/Abbos_uz1"
    },
    {
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.6803 2.97513C21.4736 2.79669 21.222 2.67819 20.9528 2.63246C20.6837 2.58674 20.4071 2.61553 20.1531 2.71573L2.85087 9.51307C2.54934 9.63158 2.29428 9.84453 2.12385 10.1201C1.95342 10.3956 1.87678 10.7189 1.9054 11.0416C1.93402 11.3644 2.06636 11.6691 2.28262 11.9104C2.49888 12.1516 2.78744 12.3164 3.10512 12.3799L7.50002 13.2591V18.7485C7.49976 19.0453 7.58758 19.3354 7.75235 19.5823C7.91712 19.8291 8.15144 20.0215 8.42562 20.1351C8.69981 20.2487 9.00154 20.2783 9.29259 20.2203C9.58364 20.1623 9.85094 20.0192 10.0606 19.8092L12.4929 17.377L16.1844 20.6254C16.4561 20.8668 16.8069 21.0003 17.1703 21.0008C17.3283 21.0006 17.4853 20.9758 17.6356 20.927C17.8835 20.8484 18.1065 20.7061 18.2823 20.5144C18.458 20.3227 18.5805 20.0883 18.6373 19.8345L22.1636 4.4471C22.2251 4.18101 22.2125 3.90319 22.1273 3.64374C22.0421 3.38428 21.8875 3.1531 21.6803 2.97523V2.97513ZM17.1752 19.4993L9.45096 12.7019L20.5739 4.66873L17.1752 19.4993Z" fill="#EBEBF5" />
        </svg>,
        "link": "https://t.me/Abbos_uz1"
    },
    {
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21.9684 6.54354C21.8795 6.1986 21.7098 5.87975 21.4734 5.6133C21.237 5.34686 20.9406 5.14044 20.6087 5.0111C17.3959 3.77651 12.2793 3.78682 12 3.78832C11.7208 3.78607 6.60422 3.77651 3.39141 5.0111C3.05949 5.14042 2.76309 5.34681 2.52665 5.61325C2.29021 5.87968 2.12051 6.19852 2.03156 6.54345C1.78903 7.47448 1.5 9.17689 1.5 12.0001C1.5 14.8233 1.78903 16.5256 2.03156 17.4566C2.12049 17.8015 2.29017 18.1204 2.52659 18.3868C2.76301 18.6533 3.05941 18.8597 3.39131 18.989C6.46688 20.1709 11.2871 20.212 11.9382 20.212H12.0618C12.7133 20.212 17.5332 20.1708 20.6086 18.989C20.9405 18.8597 21.2369 18.6533 21.4734 18.3869C21.7098 18.1205 21.8795 17.8016 21.9684 17.4567C22.211 16.5257 22.5 14.8233 22.5 12.0001C22.5 9.17689 22.211 7.47457 21.9684 6.54354ZM15.208 12.3121L10.708 15.3121C10.6516 15.3497 10.5859 15.3713 10.5181 15.3746C10.4503 15.3779 10.3829 15.3627 10.3231 15.3307C10.2632 15.2987 10.2132 15.251 10.1783 15.1928C10.1434 15.1346 10.125 15.0679 10.125 15.0001V9.00007C10.125 8.9322 10.1434 8.86559 10.1783 8.80737C10.2132 8.74914 10.2632 8.70147 10.3231 8.66944C10.3829 8.63742 10.4503 8.62224 10.5181 8.62552C10.5859 8.6288 10.6516 8.65042 10.708 8.68807L15.208 11.6881C15.2594 11.7223 15.3015 11.7687 15.3306 11.8231C15.3598 11.8776 15.375 11.9383 15.375 12.0001C15.375 12.0618 15.3598 12.1226 15.3306 12.177C15.3015 12.2314 15.2594 12.2778 15.208 12.3121Z" fill="#EBEBF5" />
        </svg>,
        "link": "https://t.me/Abbos_uz1"
    },
    {
        "icon": <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12.75 12C12.75 15.5152 10.0584 18.375 6.75 18.375C3.44156 18.375 0.75 15.5152 0.75 12C0.75 8.48484 3.44156 5.625 6.75 5.625C10.0584 5.625 12.75 8.48484 12.75 12ZM22.5 6C22.3011 6 22.1103 6.07902 21.9697 6.21967C21.829 6.36032 21.75 6.55109 21.75 6.75V17.25C21.75 17.4489 21.829 17.6397 21.9697 17.7803C22.1103 17.921 22.3011 18 22.5 18C22.6989 18 22.8897 17.921 23.0303 17.7803C23.171 17.6397 23.25 17.4489 23.25 17.25V6.75C23.25 6.55109 23.171 6.36032 23.0303 6.21967C22.8897 6.07902 22.6989 6 22.5 6ZM17.25 6C16.7172 6 15.7125 6.25875 14.9696 7.99228C14.5056 9.07509 14.25 10.4984 14.25 12C14.25 13.5016 14.5056 14.925 14.9696 16.0077C15.7126 17.7412 16.7172 18 17.25 18C17.7828 18 18.7875 17.7412 19.5304 16.0077C19.9944 14.9249 20.25 13.5016 20.25 12C20.25 10.4984 19.9944 9.075 19.5304 7.99228C18.7874 6.25884 17.7828 6 17.25 6Z" fill="#EBEBF5" />
        </svg>,
        "link": "https://t.me/Abbos_uz1"
    }
]

const Footer = () => {
    const [email, setEmail] = useState('')

    const handleInputChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const telegramBotToken = '6610709503:AAGPO3Ot9XZVgDyuqCZ0ydAuJnmTNcEHvXk';
        const chatId = '-4050367412';

        const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
        const message = `New email: ${email}`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Message sent:', data);
                setEmail('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <section className="footer">

            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__item">
                        <h4 className="footer__title">Get the latest Rolling updates</h4>np
                        <form className="footer__form" onSubmit={handleSubmit}>
                            <input
                                required
                                className="footer__input"
                                placeholder='Enter your email'
                                value={email}
                                onChange={handleInputChange}
                                type="text" />
                            <button className="footer__btn" type="submit">Subscribe</button>
                        </form>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__title">Rolling</h4>

                        <a className="footer__link link" href="#">Explore</a>
                        <a className="footer__link link" href="#">Blog</a>
                        <a className="footer__link link" href="#">About us</a>
                        <a className="footer__link link" href="#">Become a partner</a>
                    </div>

                    <div className="footer__item">
                        <h4 className="footer__title">Community</h4>

                        <a className="footer__link link" href="#">Community Guidelines</a>
                        <a className="footer__link link" href="#">Roll Token</a>
                        <a className="footer__link link" href="#">Discussion</a>
                    </div>
                </div>

                <div className="footer__inner">
                    <Link className="footer__logo" to="/">
                        Rolling
                    </Link>

                    <a className="footer__link" href="#">Terms of Service</a>
                    <a className="footer__link" href="#">Privacy</a>

                    <div className="footer__soc">

                        {socLinks.map((item, index) => (
                            <a className="footer__soc-link" rel='noopener noreferrer' target="_blank" href={item.link} key={index}>
                                {item.icon}

                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer