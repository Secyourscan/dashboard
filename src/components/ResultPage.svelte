<script>
  import PercentGauge from "./PercentGauge.svelte";
  let val = 0;
  let options = {
    thickness: 12,
    legend: "Total",
    color: "orangered",
    bgColor: "#bbb",
    valueOverflow: true,
    textColor: "#ffc0b5",
  };

  import mention from "$lib/lib/assets/mention.svg";
  import malware from "$lib/lib/assets/malware.svg";
  import report from "../lib/assets/report.svg";
  import trojen from "$lib/lib/assets/trojen.svg";

  import * as Table from "$lib/components/ui/table";

  const reports = [
    {
      icon: report,
      value: "184",
      type: "Employee Credential Leak",
    },
    {
      icon: trojen,
      value: "1",
      type: "Stealer Log for Sale",
    },
    {
      icon: malware,
      value: "42",
      type: "Stealer Logs",
    },
    {
      icon: mention,
      value: "5",
      type: "Dark Web & Hacker Channel Mentions",
    },
  ];
</script>

<div
  class="max-w-[75rem] bg-white mx-auto my-9 rounded-2xl border border-gray-600/20 flex flex-col gap-12"
>
  <div class="flex items-center justify-around px-16">
    <div class="flex p-8 flex-col gap-1 justify-center items-center">
      <p>Status: Completed</p>
      <PercentGauge value={val} bind:options></PercentGauge>
      <p>Exposure Level</p>
    </div>
    <div class="h-32 w-[0.1rem] bg-slate-200"></div>
    <div>
      <div>
        <h1 class="text-2xl font-bold text-red-500 mb-4">
          Dark Web Scan Result is Here!
        </h1>
        <p class="mb-2">
          <span class="font-bold">Domain: </span>presidential.edu.np
        </p>
        <p class="mb-2">
          <span class="font-bold"
            >Date Scaned:
          </span>{new Date().toDateString()}
        </p>
        <p class="mb-2">
          Scanned 3 times during the last 6 months for presidential.edu.np
        </p>
      </div>
    </div>
  </div>
</div>
<div class="max-w-[75rem] mx-auto">
  <div class="w-full">
    <ul class="flex gap-4 w-full justify-between">
      {#each reports as report}
        <li
          class="bg-white px-4 py-4 rounded-xl flex flex-col items-center flex-1"
        >
          <img src={report.icon.src} alt="Report" class="w-24 h-24" />
          <div class="text-center">
            <p class="text-5xl text-red-400 font-bold">{report.value}</p>
            <p class="font-bold">{report.type}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
</div>

<div class="max-w-[75rem] bg-white mx-auto mt-10 rounded-xl">
  <div class="px-4 py-6 font-bold">Employee Credential Leak</div>
  <Table.Root>
    <!-- <Table.Caption>A</Table.Caption> -->
    <Table.Header>
      <Table.Row>
        <Table.Head class="font-extrabold">Breach Time</Table.Head>
        <Table.Head class="font-extrabold">Credentials Data</Table.Head>
        <Table.Head class="font-extrabold">Source</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>2024-09-12</Table.Cell>
        <Table.Cell>s****t@presidential.edu.np | p****l</Table.Cell>
        <Table.Cell>COMBOLIST</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2024-09-12</Table.Cell>
        <Table.Cell>s****t@presidential.edu.np | W****1</Table.Cell>
        <Table.Cell>COMBOLIST</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2024-09-12</Table.Cell>
        <Table.Cell>k****l@presidential.edu.np | k****p</Table.Cell>
        <Table.Cell>COMBOLIST</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</div>

<div class="max-w-[75rem] bg-white mx-auto mt-10 rounded-xl">
  <div class="px-4 py-6 font-bold">Stealer Logs for Sale</div>
  <Table.Root>
    <!-- <Table.Caption>A</Table.Caption> -->
    <Table.Header>
      <Table.Row>
        <Table.Head class="font-extrabold">Affected Assets</Table.Head>
        <Table.Head class="font-extrabold">Tag</Table.Head>
        <Table.Head class="font-extrabold">Source</Table.Head>
        <Table.Head class="font-extrabold">Price</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>entrance@presidential.edu.np</Table.Cell>
        <Table.Cell>Possible Customer</Table.Cell>
        <Table.Cell>Russian Market</Table.Cell>
        <Table.Cell>On Sale</Table.Cell>
      </Table.Row><Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell>Possible Customer</Table.Cell>
        <Table.Cell>Russian Market</Table.Cell>
        <Table.Cell>On Sale</Table.Cell>
      </Table.Row><Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell>Possible Customer</Table.Cell>
        <Table.Cell>Russian Market</Table.Cell>
        <Table.Cell>On Sale</Table.Cell>
      </Table.Row><Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell>Possible Customer</Table.Cell>
        <Table.Cell>Russian Market</Table.Cell>
        <Table.Cell>On Sale</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</div>

<div class="max-w-[75rem] bg-white mx-auto mt-10 rounded-xl">
  <div class="px-4 py-6 font-bold">Stealer Log from Infected Machine</div>
  <Table.Root>
    <!-- <Table.Caption>A</Table.Caption> -->
    <Table.Header>
      <Table.Row>
        <Table.Head class="font-extrabold">Affected Assets</Table.Head>
        <Table.Head class="font-extrabold">Tag</Table.Head>
        <Table.Head class="font-extrabold">Source</Table.Head>
        <Table.Head class="font-extrabold">Price</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>https://entrance.presidential.edu.np/login</Table.Cell>
        <Table.Cell>Possible Customer</Table.Cell>
        <Table.Cell>*****</Table.Cell>
        <Table.Cell>-</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>https://entrance.presidential.edu.np/login</Table.Cell>
        <Table.Cell>Possible Customer</Table.Cell>
        <Table.Cell>*****</Table.Cell>
        <Table.Cell>-</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>https://entrance.presidential.edu.np/login</Table.Cell>
        <Table.Cell>Possible Customer</Table.Cell>
        <Table.Cell>*****</Table.Cell>
        <Table.Cell>-</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>https://entrance.presidential.edu.np/login</Table.Cell>
        <Table.Cell>Possible Customer</Table.Cell>
        <Table.Cell>*****</Table.Cell>
        <Table.Cell>-</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</div>

<div class="max-w-[75rem] bg-white mx-auto mt-10 rounded-xl">
  <div class="px-4 py-6 font-bold">Dark Web Mentions</div>
  <Table.Root>
    <!-- <Table.Caption>A</Table.Caption> -->
    <Table.Header>
      <Table.Row>
        <Table.Head class="font-extrabold">Date</Table.Head>
        <Table.Head class="font-extrabold">Content</Table.Head>
        <Table.Head class="font-extrabold">Source</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>2024-09-12</Table.Cell>
        <Table.Cell>*****</Table.Cell>
        <Table.Cell>HACKER FORUM</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2024-09-12</Table.Cell>
        <Table.Cell>*****</Table.Cell>
        <Table.Cell>HACKER FORUM</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2024-09-12</Table.Cell>
        <Table.Cell>*****</Table.Cell>
        <Table.Cell>HACKER FORUM</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>2024-09-12</Table.Cell>
        <Table.Cell>*****</Table.Cell>
        <Table.Cell>HACKER FORUM</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</div>

<div class="max-w-[75rem] bg-red-400 mx-auto mt-8 rounded-xl px-8 py-8">
  <div class="flex items-center justify-between">
    <h2 class="text-xl font-bold text-white">Dark web scan Result is Here!</h2>
    <button class="px-4 py-2 bg-white text-red-400 rounded-lg"
      >Download Full Report</button
    >
  </div>
</div>
