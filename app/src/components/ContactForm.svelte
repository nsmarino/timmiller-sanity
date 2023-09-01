<script>
    let status = "";
    const handleSubmit = async data => {
      status = 'Submitting...'
      const formData = new FormData(data.currentTarget)
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
    
      const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: json
      });
      const result = await response.json();
      if (result.success) {
          console.log(result);
          status = result.message || "Success"
      }
    }
</script>

<div class="container">

    <form on:submit|preventDefault={handleSubmit}>
        <input type="hidden" name="access_key" value="5b8a775f-d80c-4048-a8d1-9010f4428e9f">
        <div>
                <label for="name">Name (required)</label>
                <input id="name" type="text" name="name" required />

        </div>
        <div>
                <label for="email">Email (required)</label>
                <input id="email" type="email" name="email" required /></div>
        <div>
                <label for="tel">Telephone (required)</label>
                <input id="tel" type="tel" name="tel" required /></div>
        <div>
                <label for="property-address">Property Address</label>
                <input id="property-address" type="text" name="property-address" /></div>
        <div>
                <label for="mailing-address">Mailing Address</label>
                <input id="mailing-address" type="text" name="mailing-address" /></div>
        <div>
        <label for="message">Message (required)</label>
        <textarea id="message" name="message" required rows="3"></textarea></div>
        
        <input type="submit" />
    </form>

    <div>{status}</div>
</div>

<style>
    .container {
		padding: 0px 60px;
        max-width: 400px;
        font-family: var(--font-family-sans);
        font-size: 12px;


	}
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    form div {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    form input {
        height: 30px;
        border: 1px solid var(--dark-brown);
    }
    form textarea {
        border: 1px solid var(--dark-brown);
    }
    form input[type="submit"] {
        background-color: var(--dark-brown);
        color: white;
        height: 50px;
        border: 1px solid white;
        font-family: var(--font-family-serif);
        font-size: 16px;
        font-style: italic;
    }

	@media (max-width: 800px) {
		.container {
			padding: 20px;
		}
	}
</style>