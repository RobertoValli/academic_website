/* AI guide (/ai/): behaviour for the collapsible Q&A entries
   rendered by layouts/shortcodes/qa.html.

   - A link such as /ai/#sensitive-data opens that entry. Scrolling to it
     (with the navbar offset) is already handled by the theme.
   - Adds an "Expand all / Collapse all" button. It is created here, so it
     only appears when this script runs.
   - Opens every entry before printing, so the printout is complete. */
(function () {
  var entries = document.querySelectorAll('details.qa');
  if (!entries.length) return;

  function openFromHash() {
    var id = decodeURIComponent(window.location.hash.slice(1));
    var el = id && document.getElementById(id);
    if (el && el.classList.contains('qa')) el.open = true;
  }
  openFromHash();
  window.addEventListener('hashchange', openFromHash);

  function allOpen() {
    return Array.prototype.every.call(entries, function (d) { return d.open; });
  }
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'qa-toggle-all';
  function updateLabel() {
    button.textContent = allOpen() ? 'Collapse all answers' : 'Expand all answers';
  }
  button.addEventListener('click', function () {
    var open = !allOpen();
    entries.forEach(function (d) { d.open = open; });
    updateLabel();
  });
  entries.forEach(function (d) { d.addEventListener('toggle', updateLabel); });
  updateLabel();

  var firstSection = document.querySelector('.article-style h2');
  if (firstSection) firstSection.parentNode.insertBefore(button, firstSection);

  window.addEventListener('beforeprint', function () {
    entries.forEach(function (d) { d.open = true; });
  });
})();
