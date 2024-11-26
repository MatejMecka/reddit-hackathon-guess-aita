<script>
    import { slide } from "svelte/transition";

    export let voteName;
    export let choices;
    export let votes;
    export let calculatePercentage;
</script>
<h3 class="text-2xl text-center mb-4 text-gray-700">Bla bla bla</h3>

<div class="w-full max-w-md" transition:slide="{{ duration: 500 }}">
    {#each choices as choice}
      <div class="mb-4">
        <div class="flex justify-between mb-1">
          <span class="text-gray-700"><b>{choice.label}</b></span>
          <span class="text-gray-700">
            {calculatePercentage(votes[choice.id])}%
          </span>
        </div>
        <div class="h-4 rounded-full overflow-hidden bg-gray-200">
          <div
            class="h-full {choice.color} transition-all duration-500"
            style="width: {calculatePercentage(votes[choice.id])}%"
          ></div>
        </div>
      </div>
    {/each}
</div>