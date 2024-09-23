<script>
  import { writable } from "svelte/store";
  import { tweened, spring } from "svelte/motion";
  import { backInOut } from "svelte/easing";
  import { arc as d3arc } from "d3-shape";
  import { scaleLinear } from "d3-scale";

  let width = 200;
  let height = 150;

  // let value = writable(50);
  let value = spring(20, { stiffness: 0.1 });
  //let value = tweened(50, { easing: backInOut, duration: 750 });

  let min = 0;
  let max = 100;

  let startAngle = -120;
  let endAngle = 120;
  let innerRadius = 50;
  let outerRadius = 60;
  let cornerRadius = 10;

  $: scale = scaleLinear().domain([min, max]).range([startAngle, endAngle]);

  $: valueAngle = scale($value);

  $: arc = d3arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle((startAngle * Math.PI) / 180)
    .endAngle((valueAngle * Math.PI) / 180)
    .cornerRadius(cornerRadius);

  $: trackArc = d3arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius)
    .startAngle((startAngle * Math.PI) / 180)
    .endAngle((endAngle * Math.PI) / 180)
    .cornerRadius(cornerRadius);

  $: trackArcCentroid = trackArc.centroid();
  // $: console.log(trackArcCentroid)

  let trackArcEl;
  $: boundingBox = trackArc && trackArcEl ? trackArcEl.getBBox() : {};
  // $: console.log(boundingBox)

  $: textArcCenterOffset = {
    x: outerRadius - boundingBox.width / 2,
    // x: 0,
    y: (outerRadius - boundingBox.height / 2) * -1,
  };
  // $: console.log(textArcCenterOffset)

  $: textArcBottomOffset = {
    x: outerRadius - boundingBox.width / 2,
    // x: 0,
    y: (outerRadius - boundingBox.height) * -1,
  };
  // $: console.log(textArcBottomOffset)

  let showTextSvgCenter = true;
  let showTextArcCenter = false;
  let showTextArcBottom = false;
  let showTextArcCentroid = false;
  let showCenterGuide = false;
</script>

<svg {width} {height}>
  <path
    d={trackArc()}
    transform="translate({width / 2}, {height / 2})"
    class="track"
    bind:this={trackArcEl}
  />
  <path d={arc()} transform="translate({width / 2}, {height / 2})" />

  {#if showTextSvgCenter}
    <text transform="translate({width / 2}, {height / 2})" dy={16}>
      {Math.round($value)}
    </text>
  {/if}

  {#if showTextArcCenter}
    <text
      x={textArcCenterOffset.x}
      y={textArcCenterOffset.y}
      transform="translate({width / 2}, {height / 2})"
      dy={16}
    >
      {Math.round($value)}
    </text>
  {/if}

  {#if showTextArcBottom}
    <text
      x={textArcBottomOffset.x}
      y={textArcBottomOffset.y}
      transform="translate({width / 2}, {height / 2})"
      dy={0}
    >
      {Math.round($value)}
    </text>
  {/if}

  {#if showTextArcCentroid}
    <text
      x={trackArcCentroid[0]}
      y={trackArcCentroid[1]}
      transform="translate({width / 2}, {height / 2})"
      dy={16}
    >
      {Math.round($value)}
    </text>
  {/if}

  {#if showCenterGuide}
    <text transform="translate({width / 2}, {height / 2})" dy={16}> + </text>
  {/if}

  <defs>
    <linearGradient id="fillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="hsl(60, 100%, 50%)" />
      <stop offset="100%" stop-color="hsl(140, 100%, 50%)" />
    </linearGradient>
  </defs>
</svg>

<!-- 
<div>
  <label for="">Value:</label>
  <input type="range" {min} {max} bind:value={$value} />
  <input
    type="number"
    value={Math.round($value)}
    on:change={(e) => ($value = Number(e.target.value))}
  />
</div>

<button on:click={() => ($value = min)}>Min</button>
<button on:click={() => ($value = min + (max - min) * 0.25)}>25%</button>
<button on:click={() => ($value = min + (max - min) * 0.5)}>50%</button>
<button on:click={() => ($value = min + (max - min) * 0.75)}>75%</button>
<button on:click={() => ($value = max)}>Max</button>

<div>
  <label for="">Min:</label>
  <input type="range" min={0} {max} bind:value={min} />
  <input type="number" bind:value={min} />
</div>

<div>
  <label for="">Max:</label>
  <input type="range" min={0} max={1000} bind:value={max} />
  <input type="number" bind:value={max} />
</div>

<div>
  <label for="">Start Angle:</label>
  <input type="range" min={-360} max={360} bind:value={startAngle} />
  <input type="number" bind:value={startAngle} />
</div>

<div>
  <label for="">End Angle:</label>
  <input type="range" min={-360} max={360} bind:value={endAngle} />
  <input type="number" bind:value={endAngle} />
</div>

<div>
  <label for="">Inner Radius:</label>
  <input type="range" min={0} max={200} bind:value={innerRadius} />
  <input type="number" bind:value={innerRadius} />
</div>

<div>
  <label for="">Outer Radius:</label>
  <input type="range" min={0} max={200} bind:value={outerRadius} />
  <input type="number" bind:value={outerRadius} />
</div>

<div>
  <label for="">Corner Radius:</label>
  <input type="range" min={0} max={200} bind:value={cornerRadius} />
  <input type="number" bind:value={cornerRadius} />
</div>

<div>Show Text</div>
<label
  ><input type="checkbox" bind:checked={showTextSvgCenter} /> SVG Center</label
>
<label
  ><input type="checkbox" bind:checked={showTextArcCenter} /> Arc Center</label
>
<label
  ><input type="checkbox" bind:checked={showTextArcBottom} /> Arc Bottom</label
>
<label
  ><input type="checkbox" bind:checked={showTextArcCentroid} /> Arc Centroid</label
>
<label
  ><input type="checkbox" bind:checked={showCenterGuide} /> Center Guide</label
> -->

<style>
  svg {
    /* background-color: hsl(0, 0%, 0%); */
    /* border: 1px solid #ddd; */
  }
  path {
    fill: url(#fillGradient);
    /* 		fill: red; */
    /* 		fill: conic-gradient(gold 40%, #f06 0); */
  }

  .track {
    stroke: hsla(0, 0%, 1%, 0.2);
    stroke-width: 1px;
    fill: none;
  }

  text {
    fill: black;
    font-size: 2rem;
    text-anchor: middle;
  }

  input[type="number"] {
    width: 72px;
  }
</style>
