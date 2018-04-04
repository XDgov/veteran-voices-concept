---
layout: default
---


<div class="search-container">
  <div class="usa-grid">
    <div class="search-box">
      <input type="text" placeholder="Search topics, dates, or categories">
      <a class="usa-button" href="{{ site.baseurl }}/topics/transition-year">Search</a>
    </div>
  </div>
</div>
<div class="trending-topics-container">
  <div class="usa-grid">
    <h1>Trending Topics</h1>
    <ul class="usa-unstyled-list topic-list">
      {% include topics/topic-list-item.html name="Veterans ID Card" status="Top" sentiment="positive" url="dashboard" %}
      {% include topics/topic-list-item.html name="Appeals Modernization Act" status="Emerging" sentiment="negative" url="dashboard" %}
      {% include topics/topic-list-item.html name="Decision-ready Claims" status="Emerging" sentiment="positive" url="dashboard" %}
      {% include topics/topic-list-item.html name="Chapter 31" status="Top" sentiment="positive" url="dashboard" %}
      {% include topics/topic-list-item.html name="Boston VA Wait Times" status="Emerging" sentiment="negative" url="dashboard" %}
      {% include topics/topic-list-item.html name="GI Bill" status="Top" sentiment="positive" url="dashboard" %}
    </ul>
  </div>
</div>







