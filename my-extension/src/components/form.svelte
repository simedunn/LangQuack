<script>
  export let prompt = '';
  const characterLimit = 500;

  $: validPrompt = (prompt.length <= characterLimit);
</script>

<form>
  <p>Insert any text and I will generate a Spanish lesson from it.</p>
  <input
    type="text"
    placeholder="copy/paste text here"
    bind:value={prompt}
  />
  <div>{prompt.length}/{characterLimit}</div>
  
  <!-- immediately disable the button when pressed or when prompt is invalid length-->
  <button type="submit" disabled={!validPrompt}>Submit</button>
</form>


