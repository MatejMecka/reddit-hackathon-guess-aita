<script lang="ts">
  import { spring } from 'svelte/motion';
  import { fly, scale, slide } from 'svelte/transition';
  import Results from './lib/components/Results.svelte';
  import { onMount } from 'svelte';

  let question = $state("Bla Bla");
  
  const choices = [
    { id: 'Bla', label: 'Bla', color: 'bg-pink-300' },
    { id: 'bla', label: 'bla', color: 'bg-blue-300' },
    { id: 'BLA', label: 'BLA', color: 'bg-purple-300' },
  ];

  let votes = $state({
    NTA: 0,
    YTA: 0,
    ESH: 0
  });
  
  let showResults = $state(false);
  let voteName = $state('')
  
  function handleVote(choice: string) {
    votes[choice] += 1;
    showResults = true;
    voteName = choice;
    window.parent?.postMessage({
      type: "guess",
      data: {"choice": choice, "question": question}
    }, '*')
  }
  
let totalVotes = $derived(Object.values(votes).reduce((sum, count) => sum + count, 0));
  
 function calculatePercentage(voteCount: number) {
    if (totalVotes === 0) 
      return 0;
    return ((voteCount / totalVotes) * 100).toFixed(1);
} 

window.addEventListener('message', (event) => {
  if (event.data.type === 'devvit-message') {
    const { message } = event.data;
    console.log('Received from Devvit:', message);
  }
});

onMount(() => {
  console.log("BROADCAST")
  setTimeout(() => 5000);
  window.parent?.postMessage({"type": "Load", data: "hello"}, '*')
})

</script>

<div class="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 flex flex-col items-center justify-center p-4">
  <h1 
    class="text-4xl font-bold text-purple-600 mb-4"
    in:fly="{{ y: -50, duration: 500 }}"
  >
    Bla Bla
  </h1>

  {#if !showResults}
  <div 
    class="text-2xl text-center mb-8 text-gray-700"
    in:scale="{{ duration: 500, delay: 500, start: 0.9 }}"
  >
  {question}
  </div>

  <div class="flex space-x-4 mb-12">
    {#each choices as choice}
      <button
        class="{choice.color} text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 active:scale-95"
        onclick={() => handleVote(choice.id)}
      >
        {choice.label}
      </button>
    {/each}
  </div>
  {/if}

  {#if showResults}
    <Results
      voteName={voteName}
      choices={choices}
      votes={votes}
      calculatePercentage={calculatePercentage}
    >
    </Results>
    <button
        class="bg-green-300 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 active:scale-95"
        onclick={() => handleVote(choice.id)}
      >Next AITA?</button>
  {/if}
</div>

<style>
  /* Add any component-specific styles here if needed */
</style>