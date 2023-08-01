<script lang="ts">
	export let data;
    console.log(data.staff)
</script>

<section>

	<h1>Contact</h1>
    <div>
	{#if data.staff.length}
		{#each data.staff as staffMember}
			<h2>{staffMember.name}</h2>
		{/each}
	{/if}
    </div>
</section>