import "./styles/tabs.css";

class Tabs {
  constructor(container) {
    this.container = container;
    // looks inside container for ALL with class trigger
    this.tabs = container.querySelectorAll(".trigger");
  }
  //   initialize the tabs function
  init() {
    this.tabs.forEach(tab => {
      tab.addEventListener("click", e => {
        this.toggleTabs(e);
        this.toggleContent(e);
      });
    });
  }
  toggleTabs(e) {
    //   remove current active classes
    this.tabs.forEach(tab => tab.classList.remove("active"));
    // add new active class to clicked tab
    e.target.classList.add("active");
  }
  toggleContent(e) {
    //   remove current active classes from content
    this.container.querySelectorAll(".content").forEach(item => {
      item.classList.remove("active");
    });
    // add new active class to content
    const selector = e.target.getAttribute("data-target");
    const content = this.container.querySelector(selector);
    content.classList.add("active");
  }
}

export { Tabs as default };
