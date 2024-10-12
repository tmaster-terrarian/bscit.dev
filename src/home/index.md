---
title: Home

meta: pages/home/meta.html
after: pages/home/after.html
no-h2: true
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
