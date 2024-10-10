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

after: {% include notreallyads.html %}

no-h2: true

title: Home
---

<div class="cover">
    <img src="/images/cover-10-24.png">
    <h3 class="status-holder"><i><h1>bscit</h1><span>current status: {% include status.txt %}</span></i></h3>
</div>

## {{ page.title }}

Hello, and welcome to my website!<br>
I am mainly an artist and game developer, but I'm learning music too

Feel free to check out my stuff while you're here :O

### Posts

<nav class="post-navigation d-flex justify-content-between" aria-label="Post Navigation">
    {% assign posts_by_date = site.posts | sort: "date" | reverse %}
    {% for post in posts_by_date limit: 5 %}
        {% include widgets/post-mini.html post=post %}
    {% else %}
        <blockquote class="prompt muted">No posts right now. Have a nice day!</blockquote>
    {% endfor %}
</nav>
