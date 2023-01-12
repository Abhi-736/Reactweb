import React from 'react'
import vg from '../assets/pngegg.png';
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai"
export const Home = () => {
    return (<>
        <div className="home" id='home'>
            <main>
                <h1>weeknd</h1>
                <p>He is a R&D star</p>
            </main>
        </div>

        <div className="home2">
            <img src={vg} alternate='cat' />
            <div>
                <p>He is a R&D star</p>
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>who we are?</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius recusandae eligendi, molestias atque possimus quibusdam cumque dolorum enim officia blanditiis vel temporibus corporis suscipit tempora neque ipsam ex illo. Nobis.
                    Asperiores eius, culpa nemo quibusdam maxime vero, accusantium vel praesentium harum tempore nostrum illum atque aut sint inventore, eligendi iusto aliquam eum cumque ducimus. Ea esse error recusandae incidunt vel!
                    At impedit aperiam facere fuga adipisci, illo rem enim, unde, deserunt ducimus nesciunt? Magnam placeat possimus quas veritatis, saepe delectus. Voluptas, aliquid officia asperiores cum necessitatibus amet ab provident autem.
                    Aspernatur, nemo? Quos praesentium quia eveniet, ipsa ratione deserunt repellendus sint in ipsum facere illo reprehenderit perspiciatis tempora vel. Consectetur iste doloremque voluptatum ad, repellendus voluptatem ullam deleniti illum velit!
                </p>
            </div>
        </div>
        <div className="home4" id='Brands'>
        <div><h1>Brands</h1>
            <article>
                <div style={{ animationDelay: "0.3s" }}><AiFillGoogleCircle />
                <p>Google</p></div>
                <div style={{ animationDelay: "0.5s" }}><AiFillAmazonCircle />
                <p>Amazon</p></div>
                <div style={{ animationDelay: "0.7s" }}><AiFillYoutube />
                <p>Youtube</p></div>
                <div style={{ animationDelay: "1s" }}><AiFillInstagram />
                <p>Instagram</p></div>
            </article>
        </div>
        </div>
    </>
    )
}
export default Home
