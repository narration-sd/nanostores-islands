<script>
    // similar forward questions about possible restructure as noted
    // for Astro and the Vue abiliteis, in SharedActivities.vue

    import { eSettings } from '../../store/assurance.ts'
    import { onMount, onDestroy } from "svelte";

    const getFreshActivity = async () => {
        const response = await fetch('https://www.boredapi.com/api/activity')
            .catch (err => { return { error: err } })

        if (response.ok) {
            const json = await response.json()
            return json.activity
        } else {
            return response.error + ' (see browser console)'
        }
    }

    const shareActivity = async () => {
        const activity = await getFreshActivity()
        eSettings.setKey('activity', activity)
    }

    let intervalId

    onMount(() => {
        intervalId = setInterval (shareActivity, 2000)
    })

    onDestroy(() => {
        clearInterval (intervalId)
    })

</script>

<div>
<!--    <h3>activity would be shared from here: { $eSettings.activity }</h3>-->
</div>