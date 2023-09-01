<script lang="ts">
	import StaffCard from "../../components/StaffCard.svelte";
    import { PortableText } from '@portabletext/svelte';

	export let data;
</script>

<section>
	<div class="header">
		<h1>About Us</h1>

		<div>
			<p class="contact">Tel: (845) 265-4400</p>
			<p class="contact">contact@timmillerassociates.com</p>
			<p class="contact">10 North St, Cold Spring NY, 10516</p>
		</div>
	</div>
	<div class="richtext">
		<PortableText value={data.settings.about_desc} />
	</div>
	
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
		font-style: italic;
		font-size: 3rem;
		color: var(--dark-brown);
	}
	.contact {
		font-style: italic;
		font-style: italic;
		color: var(--dark-brown);

	}
	.richtext {
		padding: 20px 60px;
		font-family: var(--font-family-sans);
		color: var(--dark-brown);
		max-width: 600px;
	}
	.staffers {
		margin-top: 40px;
		background: var(--light-blue);
		display: flex;
		flex-wrap: wrap;
		padding: 60px;
		gap: 40px 0px;
	}

	.header {
		padding: 180px 60px 20px;

		display: flex;
		justify-content: space-between;
	}
	@media (max-width: 800px) {
		.header {
			padding: 120px 20px 20px;
			flex-direction: column;
			gap: 40px;
		}
		.staffers {
			padding: 20px;
			flex-direction: column;
		}
		.richtext {
			padding: 20px;
		}
	}
</style>