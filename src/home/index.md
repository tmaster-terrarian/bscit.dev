---
meta:
  - '<style>
        .cover {
            img {
                width: 100%;
                object-fit: cover;
                aspect-ratio: 3/1;
            }
            .status-holder {
                display: block;
                position: absolute;
                top: 0;
                left: 1.45em;
                cursor: default;
                h1 {
                    margin: 0;
                    font-weight: normal;
                    color: rgba(204, 204, 204, 0);
                }
                span {
                    font-size: 14px;
                }
            }
        }

        .content {
            position: relative;
        }

        .buttons {
            grid-area: after;
            max-width: min(calc(185px + 1em), calc((100vw - 38rem - 6rem) / 2));

            section {
                cursor: default;
                margin-top: 1em;
                margin-left: 1em;
            }
            iframe:not(.navlink-ads), img.imgg {
                display: inline-block;
                width: min(88px, calc(50% - 4.5px));
                height: auto;
                aspect-ratio: 88/31;
            }
            div {
                a {
                    display: block !important;
                    width: min(200px, 100%);
                    img {
                        width: 100%;
                    }
                }
            }
        }
    </style>'

after:
  - '<details
            style="grid-area: after;
                max-width: min(calc(185px + 1em), calc((100vw - 38rem - 6rem) / 2));"
            class="buttons mobile-hidden"
            open>
        <summary>Button Zone</summary>
        <section style="margin-top: 1em;
                        margin-left: 1em;">
            <a href="https://dimden.dev/" target="_blank"><img src="https://dimden.dev/images/88x31.gif"></a>
            <a href="https://boxy.neocities.org/" target="_blank"><picture><source srcset="https://boxy.neocities.org/images/ggWebp.webp" type="image/webp"><img src="https://boxy.neocities.org/images/ggPng.png"></picture></a>
            <a href="https://cyber.dabamos.de/88x31" target="_blank"><img src="https://maia.crimew.gay/badges/88x31.gif"></a>
            <a href="https://discord.com" target="_blank"><img src="/images/88x31gifs/discord_now.gif"></a>
            <a href="https://corru.observer/"><img src="https://corru.observer/8831.gif"></a>
            <img src="/images/88x31gifs/all-rights-reserved.png">
            <iframe src="https://michealtheratz.neocities.org/button" width="88" height="32" style="border: none;"></iframe>
            <a href="https://mikeythemike.neocities.org/" target="_blank" title="MIKE"><img src="/images/88x31gifs/MIKE-button.png"></a>
            <iframe style="border:2px outset white; border-color: white black black white; background-color:#ccc; width: 100%; aspect-ratio: 1;" src="https://dimden.neocities.org/navlink/" name="neolink"></iframe>
            <a href="https://en.wikipedia.org/wiki/Adobe_Flash#End_of_life" target="_blank"><img src="/images/88x31gifs/adobe_getflash4.gif"></a>
            <!--<img src="/images/88x31gifs/bestviewedwithacomputer.gif">-->
            <a href="https://s1nez.nekoweb.org/"><img src="https://s1nez.nekoweb.org/BUTTON.gif"></a>
            <a href="https://uncannyvalley.neocities.org/" target="_blank"><img src="https://uncannyvalley.neocities.org/uncanny.gif"></a>
            <a href="https://melps.neocities.org" target="_blank"><img src="https://melps.neocities.org/limk1.jpg" width='88px'></a>
            <a href="https://mookalh.com/" target="_blank"><img src="/images/88x31gifs/mookal-button.gif"></a>
            <a href="https://benboquest.neocities.org/" target="_blank" title="SUPER BENBO QUEST II WEBPAGED CONTRABAND EDITION"><img src="/images/88x31gifs/BENBOWARS button.gif"></a>
            <a href="https://roachette.neocities.org" target="_blank" title="Roachette"><img src="/images/88x31gifs/rchettebutton.gif"></a>
            <iframe src="//incr.easrng.net/badge?key=bscit" style="background: url(//incr.easrng.net/bg.gif)" title="increment badge" width="88" height="31" frameborder="0"></iframe>
            <script src="https://transring.neocities.org/ring.js"></script>
        </section>
    </details>'

no-h2: true

title: Home
---

<div class="cover">
    <img src="/images/cover-10-24.png">
    <h3 class="status-holder"><i><h1>bscit</h1><span>current status: {% include status.txt %}</span></i></h3>
</div>
<h2>{{ page.title }}</h2>
<p>
    Hello, and welcome to my website!<br>
    I am mainly an artist and game developer, but I'm learning music too
</p>
<p>
    Feel free to check out my stuff while you're here :O
</p>

### Posts

<nav class="post-navigation d-flex justify-content-between" aria-label="Post Navigation">
    {% assign posts_by_date = site.posts | sort: "date" | reverse %}
    {% assign first = posts_by_date | first %}
    {% for post in posts_by_date limit: 5 %}
        {% if post == first %}
            {% include widgets/post.html post=post %}
        {% else %}
            {% include widgets/post-mini.html post=post %}
        {% endif %}
    {% else %}
        <blockquote class="prompt">No posts right now. Have a nice day!</blockquote>
    {% endfor %}
</nav>
