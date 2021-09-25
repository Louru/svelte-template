<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import Layout from "@components/Layout.svelte";
  import TestComponent from "@components/TestComponent.svelte";
</script>

<Router>
  <Route path="/">
    <Layout title="Home">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum
        libero, porttitor in ligula id, aliquam fringilla augue. Sed ante augue,
        luctus et purus ut, faucibus luctus augue. Mauris id porttitor nunc.
        Integer laoreet quam non hendrerit sollicitudin. Cras a lacus libero.
        Sed suscipit hendrerit mattis. Sed nulla justo, volutpat ac scelerisque
        ut, tempus ut justo. Aenean ante turpis, consequat ac fermentum vitae,
        hendrerit ac arcu. In vestibulum consectetur euismod. Aenean nisl felis,
        vulputate efficitur urna at, porta molestie leo. Sed quam erat, posuere
        in fringilla id, tristique eu est. Mauris ultrices vel ex quis gravida.
        Fusce vel metus condimentum, aliquam dolor a, mollis erat. Duis in
        tellus purus. Aliquam semper convallis massa et lacinia.
      </p>
    </Layout>
  </Route>

  <Route path="/about">
    <Layout title="About">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ipsum
        libero, porttitor in ligula id, aliquam fringilla augue. Sed ante augue,
        luctus et purus ut, faucibus luctus augue. Mauris id porttitor nunc.
        Integer laoreet quam non hendrerit sollicitudin. Cras a lacus libero.
        Sed suscipit hendrerit mattis. Sed nulla justo, volutpat ac scelerisque
        ut, tempus ut justo. Aenean ante turpis, consequat ac fermentum vitae,
        hendrerit ac arcu. In vestibulum consectetur euismod. Aenean nisl felis,
        vulputate efficitur urna at, porta molestie leo. Sed quam erat, posuere
        in fringilla id, tristique eu est. Mauris ultrices vel ex quis gravida.
        Fusce vel metus condimentum, aliquam dolor a, mollis erat. Duis in
        tellus purus. Aliquam semper convallis massa et lacinia.
      </p>
    </Layout>
  </Route>

  <Route path="/test">
    <Layout title="Test Component">
      <TestComponent />
    </Layout>
  </Route>
</Router>
