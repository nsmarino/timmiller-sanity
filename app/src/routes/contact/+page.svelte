<script lang="ts">
	import StaffCard from "../../components/StaffCard.svelte";

	export let data;
    console.log("DATA HERE", data)
</script>

<section>

	<h1>Contact</h1>
	<p class="contact">Tel: (845) 265-4400</p>
	<p class="contact">Fax: (845) 265-4400</p>
	<p class="contact">contact@timmillerassociates.com</p>
	<p class="contact">10 North St, Cold Spring NY, 10516</p>
	
	
	
	
	
    <div class="staffers">
	{#if data.staff.length}
		{#each data.staff as staffMember}
			<StaffCard staffer={staffMember} />
		{/each}
	{/if}
    </div>
</section>

<style>
	h1 {
		padding: 180px 60px 40px;
		font-style: italic;
		font-size: 3rem;
		color: var(--dark-brown);
	}
	.contact {
		font-style: italic;
		padding: 5px 60px;
		font-style: italic;
		color: var(--dark-brown);

	}
	.staffers {
		margin-top: 40px;
		background: var(--light-blue);
		display: flex;
		flex-wrap: wrap;
		padding: 60px;
		gap: 40px 0px;
	}
</style>