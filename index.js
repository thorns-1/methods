const filtersInput = document.querySelector("input#filters");

const renderMethods = () => {
  const methodListContainer = document.querySelector("#methods-list");

  const methodsToRender = methods.filter(method => {
    if (filtersInput.value) {
      return method.tags.some(tag => filtersInput.value === tag);
    }
    return true;
  });

  methodListContainer.innerHTML = "";
  methodsToRender.forEach((method) => {
    const tags = method.tags.map(tag => `<p>${tag}</p>`).join('');

    const moreInfoSection = method.moreInfo ? `
      <details>
        <summary class="noselect">More information</summary>
        ${method.moreInfo}
      </details>
    ` : "";

    methodListContainer.innerHTML += `<div class="methodItem">
    <h4 id="${method.key}"><a href="#${method.key}">#${method.name}</a></h4>
    <p>${method.description}</p>
    ${moreInfoSection}
    <div class="footer">
      <a href="${method.link}">link</a>
      <div class="tags">${tags}</div>
    </div>
    </div>`;
  });
};

const renderMethodAnchors = () => {
  const methodAnchorsContainer = document.querySelector("#method-anchors");
  
  methods.forEach((method) => {
    methodAnchorsContainer.innerHTML += `<div class="methodAnchorItem">
    <p><a href="#${method.key}">#${method.key}</a></p>
    </div>`;
  });
}

const applyFilter = (el, name) => {
  if (filtersInput.value === name) {
    filtersInput.value = "";
    el.style.color = "white";
  } else {
    filtersInput.value = name;
    el.style.color = "red";    
  }
  renderMethods();
}

const clearFilters = () => {
  const tagsFilterContainerList = document.querySelectorAll("#tags-filter .tags p");
  for (const tag of tagsFilterContainerList) {
    tag.style.color = "white";
  }
}

// TODO: make it a choice list (but hide the checkboxes)
const renderConfig = () => {
  const totalMethodsContainer = document.querySelector("#total-methods");
  totalMethodsContainer.innerText = methods.length;

  const tagsFilterContainer = document.querySelector("#tags-filter .tags");

  const unpreparedTagsList = methods.flatMap((method) => method.tags);

  const tagsList = unpreparedTagsList.reduce((acc, tag, ) => {
    if (acc[tag]) {
      acc[tag] = acc[tag] + 1;
    } else {
      acc[tag] = 1;
    }
    return acc;
  }, {});

  Object.keys(tagsList).forEach((tag) => {
    tagsFilterContainer.innerHTML += `<p onclick="clearFilters(); applyFilter(this, '${tag}')">${tag} (${tagsList[tag]})</p>`
  });
}

renderMethods();
renderMethodAnchors();
renderConfig();
