import React from 'react'
import CardItemP from './CardItemP';
import './CardsP.css';


function ProductCards() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemP
                            src='https://tinyurl.com/y5tyt3s9'
                            text='DaBaby is an American rapper and songwriter from Charlotte, North Carolina. After releasing several mixtapes between 2014 and 2018, DaBaby rose to mainstream prominence in 2019. 
                            '
                            label='Da Baby'
                            path='/products'
                        />

                        <CardItemP
                            src='https://tinyurl.com/y46g2jbe'
                            text=' Megan Thee Stallion is an American rapper, singer, and songwriter. Originally from Houston, Texas, she first garnered attention when videos of her freestyling became popular on social media platforms such as Instagram.
                            '
                            label='Megan Thee Stallion'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y5vhx72a'
                            text='NLE Choppa is an American rapper and Internet personality. He rose to fame with his January 2019 single "Shotta Flow", which was certified platinum by the RIAA and peaked at number 36 on the Billboard Hot 100
                           '
                            label='NLE Choppa'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y26ltuqm'
                            text='Lil Baby is an American rapper and songwriter from Atlanta, Georgia. He rose to mainstream fame in 2017 following the release of his mixtape Perfect Timing, becoming one of the most prominent figures in the trap music scene to date. 
                           '
                            label='Lil Baby'
                            path='/products' />
                    </ul>
                </div>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemP
                            src='https://tinyurl.com/yxesw6ea'
                            text='Giveon is an American R&B singer and songwriter. He rose to prominence with his feature on Drakes 2020 single "Chicago Freestyle", which peaked at number 14 on the Billboard Hot 100.
                            '
                            label='Giveon'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y3sjflf3'
                            text='Ari Lennox is an American R&B singer-songwriter from Washington, D.C.. She is the first female artist to be signed to J. Coles record label, Dreamville Records. She released her first EP Pho on the label in 2016, when she began gaining recognition.
                            '
                            label='Ari Lennox'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y5xmwxmn'
                            text='Anderson Paak, is an American singer, songwriter, rapper, record producer and multi-instrumentalist from Oxnard, California. He released his debut mixtape, O.B.E. Vol. 1 in 2012 and went on to release Venice in 2014.
                            '
                            label='Anderson.Paak'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/yyym7xlk'
                            text='Bryson Djuan Tiller is an American singer, rapper, and songwriter. Born in Louisville, Kentucky, he started his career in 2011, releasing the debut mixtape titled Killer Instinct Vol.1.'
                            label='Bryson Tiller'
                            path='/products' />
                    </ul>
                </div>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemP
                            src='https://tinyurl.com/y274xny3'
                            text='Maranda Curtis is an American gospel singer and praise and worship leader formerly with The Potters House Church, Dallas.'
                            label='Miranda Curtis'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y6o3ns7d'
                            text='Todd Dulaney is a gospel musician, and former baseball player. His music career started in 2011, with the release of the CD version, Pulling Me Through. This would be his breakthrough released upon the Billboard Gospel Albums chart.'
                            label='Todd Dulaney'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y5n3o4xd'
                            text='Kierra "Kiki" Sheard-Kelly is an American gospel singer, songwriter, fashion designer, actress, entrepreneur, and creative director. She is the daughter of gospel singer Karen Clark Sheard member of gospel singing group and the granddaughter of gospel choral director Mattie Moss Clark. '
                            label='Kierra Sheard-Kelly'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y4956caq'
                            text='Erica Campbell is an urban contemporary gospel singer and songwriter. She started her music career in 1998 with her younger sister, Tina Campbell, as part of the gospel music group, Mary Mary.'
                            label='Erica Campbell'
                            path='/products' />
                    </ul>
                </div>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItemP
                            src='https://tinyurl.com/y2rqqkq9'
                            text='Beyoncé Giselle Knowles-Carter is an American singer, songwriter, actress, and record producer. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child.
                            '
                            label='Beyonce'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y5zr7n5j'
                            text=' Cardi B is an American rapper, songwriter, and actress. Born in Manhattan and raised in the Bronx, New York City, she became an Internet celebrity by achieving popularity on Vine and Instagram
                            '
                            label='Cardi B'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y49sjmz4'
                            text='Kirk Dewayne Franklin is an American choir director, gospel musician, singer, songwriter, and author. He is best known for leading urban contemporary gospel choirs such as The Family, Gods Property, and One Nation Crew among many others. He has won numerous awards, including 16 Grammy Awards.
                           '
                            label='Kirk Franklin'
                            path='/products' />
                        <CardItemP
                            src='https://tinyurl.com/y6tnu6cu'
                            text='Kendrick Lamar Duckworth is an American rapper, songwriter, and record producer. Since his mainstream debut in 2012 with Good Kid, M.A.A.D. City, Lamar has been regarded as one of the most influential artists of his generation, as well as one of the greatest rappers and lyricists of all time.'
                            label='Kendrick Lamar'
                            path='/products' />
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default ProductCards

