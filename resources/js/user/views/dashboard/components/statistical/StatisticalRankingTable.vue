<template>
    <div class="statistical__left--top-ranking">
        <div class="statis-header">
            <div class="statistical__title">
                top ranking
            </div>
            <select class="btn btn-select" @change="onChangeRanking('rankingKey', $event)">
                <option v-for="rankingKey in rankingKeys"
                    :value="rankingKey.key"
                    :selected="rankingKey.key === currentOptions.rankingKey"
                >{{ rankingKey.value }}</option>
            </select>
            <select class="btn btn-select btn-select-statis" @change="onChangeRanking('type', $event)">
                <option v-for="optionType in optionTypes"
                    :value="optionType.key"
                    :selected="optionType.key === currentOptions.type"
                >{{ optionType.value }}</option>
            </select>
        </div>
        <table class="table">
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Position</th>
                <th>Conversations Completed</th>
                <th>Practiced</th>
                <th>Examinations</th>
                <th>Final Point</th>
                <th>Rank</th>
                <th width="18%">Join at</th>
            </thead>
            <tbody>
                <tr v-for="item in getItems()">
                    <td>{{ item.user.id }}</td>
                    <td>{{ item.user.name }}</td>
                    <td>{{ item.position }}</td>
                    <td>{{ item.count_conversation_completed }}</td>
                    <td>{{ item.count_practiced }}</td>
                    <td>{{ item.count_examination }}</td>
                    <td>{{ item.final_point }}</td>
                    <td>
                        <img :src="`/statics/${item.ranking_key}.png`" width="30" height="28" />
                    </td>
                    <td>{{ item.user.joined_at }}</td>
                </tr>
            </tbody>
        </table>
        <div class="view-all-ranking">
            <router-link to="/rankings" class="btn btn-view-all">
                View All
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatisticalRankingTable",

        data() {
            return {
                currentOptions: {
                    rankingKey: 'beginner',
                    type: 'month',
                },
                rankingKeys: [
                    { key: 'beginner', value: 'Beginner' },
                    { key: 'junior', value: 'Junior' },
                    { key: 'senior', value: 'Senior' },
                ],

                optionTypes: [
                    { key: 'month', value: 'Month' },
                    { key: 'week', value: 'Week' },
                ],
            }
        },

        computed: {
            rankings() {
                return this.$store.state.dashboard.rankings
            },
        },

        methods: {
            getItems() {
                let rankings = this.rankings,
                    currentOptions = this.currentOptions

                return rankings ? rankings[currentOptions.type][currentOptions.rankingKey] : []
            },

            onChangeRanking(key, event) {
                return this.currentOptions[key] = event.target.value
            },
        },
    }
</script>
