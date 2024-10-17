---
title: Index
---

- [Creative Works](/works/)
- [Home](/home/)
- [Index](/index/)
- [Posts](/posts/)
- [Tools](/tools/)

---
### Posts
<ul>
    {%- assign posts_by_date = site.posts | sort: "date" | reverse -%}
    {%- for post in posts_by_date -%}
    <li>
        <flex class="align-baseline w-fit-content">
            <p class="w-fit-content d-inline-block margin-0">
                <a href="{{ post.url }}">{{ post.title }}</a>
            </p>
            <span class="nowrap flex-shrink muted" style="font-size: 0.8em;">
                <a href="{{ post.url }}" class="ppl no-underline" style="text-decoration: none !important">{{ post.date | date: "%b %d %Y" }}{% if post.draft %} - DRAFT{%- endif -%}</a>
            </span>
        </flex>
    </li>
    {%- endfor -%}
</ul>

---
### Old legacy links (very broken)
- [Home](/old-home)
- [Snippets](/snippets)
- [Tools](/tools/old)
- [Works](/works/old)
