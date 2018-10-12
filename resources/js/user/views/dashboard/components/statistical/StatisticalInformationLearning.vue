<template>
     <div class="statistical__left--infomation-learning">
        <div class="statis-header">
            <div class="statistical__title">
                statistical information learning
            </div>
            <select class="btn btn-select" @change="onChangeYearLearning">
                <option v-for="year in getOptionYear()" 
                    :value="year"
                    :selected="year == currentYear"
                >{{ year }}</option>
            </select>
        </div>
        <table class="table">
            <thead>
                <th class="statis-type-user">Type user</th>
                <th
                    v-for="item in learning" 
                    :key="item['.key']"
                >
                    {{ item.month }}
                </th>
            </thead>
            <tbody>
                <tr v-for="row in rows">
                    <td class="statis-type-user">{{ row.value }}</td>
                    <td
                        v-for="item in learning" 
                        :key="item['.key']"
                    >
                        {{ item.data[row.key] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "StatisticalInformationLearning",

        data() {
            return {
                currentYear: (new Date()).getFullYear(),

                rows: [
                    { key: 'install', value: 'Install' },
                    { key: 'register', value: 'Register' },
                    { key: 'active', value: 'Active' },
                ],
            }
        },

        computed: {
            learning() {
                return this.$store.state.dashboard.learning
            },
        },

         methods: {
           getOptionYear() {
                let startYear = 2017, 
                    currentYear = (new Date()).getFullYear(),
                    options = []

                for(startYear; startYear <= currentYear; startYear++) {
                    options.push(startYear)
                }

                return options
            },

            onChangeYearLearning(event) {
                let year = event.target.value
                this.$store.dispatch('dashboard/doFetchLearning', { year: year })
                return this.currentYear = year
            }
        },
    }
</script>
