const devLink = 'https://dev.makris.io';
const menuItems = [
    {
        name : "Learning",
        url : devLink + "/learning.html"
    }
];

const navItems = Vue.component('nav-items', {
    props : ['navItem'],
    template : `
    <li class="nav-item">
        <a class="nav-link" v-bind:href="navItem.url">{{ navItem.name }}</a>
    </li>
    `
});

const menu = new Vue({
    el: '#menu',
    data : {
        items : menuItems
    }
})

const listing = new Vue({
    el : '#listing',
    data : {
        items : menuItems
    }
})


export default {
    navItems
}