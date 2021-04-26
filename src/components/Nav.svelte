<script>
  import { navList } from '../assets/config/navList';
</script>

<nav>
  <ul>
    {#each navList as nav}
    <li class="pointer"><a href="{nav.link}" target="_blank" rel="noreferrer">{ nav.title }</a></li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    width: 100%;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 30px;
  }

  ul, li {
    list-style-type: none;
  }

  ul {
    margin-left: -20px;
    padding-bottom: 20px;
    text-align: left;
  }

  li {
    display: inline-block;
    width: 170px;
    height: 60px;
    margin-left: 20px;
    margin-top: 20px;
    line-height: 60px;
    text-align: center;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.6);
    transition: all .6s ease-in-out;
  }

  li:hover {
    background-color: rgb(255, 228, 181, 0.6);
    transform: scale(1.125);
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: #333;
    text-shadow: 1px 1px 1px #ccc, 2px 2px 2px #ccc, 3px 3px 3px #444;
    text-decoration: none;
    border-radius: 20px;
  }

  a:visited {
    color: #333;
  }

  a:hover {
    color: #fff;
  }
</style>
