---
layout: default
---


<div class="search-container">
  <div class="usa-grid">
    <div class="search-box">
      <input type="text" placeholder="Search topics, dates, or categories">
      <a class="usa-button" href="{{ site.baseurl }}/search/results">Search</a>
    </div>
  </div>
</div>
<div class="trending-topics-container">
  <div class="usa-grid">
    <h1>Trending Topics</h1>
    <ul class="usa-unstyled-list topic-list">
      {% include topics/topic-list-item.html name="Veterans ID Card" status="Top" sentiment="positive" url="dashboard" %}
      {% include topics/topic-list-item.html name="Veterans ID Card" status="Emerging" sentiment="negative" url="dashboard" %}
      {% include topics/topic-list-item.html name="Veterans ID Card" status="Emerging" sentiment="positive" url="dashboard" %}
      {% include topics/topic-list-item.html name="Veterans ID Card" status="Top" sentiment="positive" url="dashboard" %}
      {% include topics/topic-list-item.html name="Veterans ID Card" status="Emerging" sentiment="negative" url="dashboard" %}
      {% include topics/topic-list-item.html name="Veterans ID Card" status="Top" sentiment="positive" url="dashboard" %}
    </ul>
  </div>
</div>







