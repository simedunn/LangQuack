<script>
  import Form from '../components/form.svelte'
  import Results from '../components/results.svelte'

  let submitted = false;

</script>

<div class="bg-yellow-100 min-h-screen"> 
  <h1><b>LangQuack!</b></h1>

  {#if submitted == false}
    <Form/> 
  {:else}
    <Results/>
  {/if}
  
</div>