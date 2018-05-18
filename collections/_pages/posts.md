---
layout: blog 
title: Blog
permalink: /posts/
---
<section id="portfolio">
<div class="container">
<div class="row">
  {% for post in site.posts %}
  <div class="col-md-4 col-sm-6 portfolio-item">
    <a class="portfolio-link" href="{{ post.url }}">
      <div class="portfolio-hover">
	<div class="portfolio-hover-content">
	  <i class="fa fa-plus fa-3x"></i>
	</div>
      </div>
      <img class="img-fluid" src="{{ post.img }}" alt="">
    </a>
    <div class="portfolio-caption">
      <p class="text-muted">{{ post.categories }}</p>
      <h4>{{ post.title }}</h4>
    </div>
  </div>
  {% endfor %}
</div>
</div>
</section>

