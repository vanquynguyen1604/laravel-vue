<template>
    <div class="statistical__left--statis-lesson">
        <div class="statis-header">
            <div class="statistical__title">
                statistical the lesson
            </div>
            <select class="btn btn-select" @change="onChangeOption('month', $event)">
                <option v-for="month in getOptionMonth()"
                    :value="month.key"
                    :selected="month.key == selectedOptions.month"
                >{{ month.value }}</option>
            </select>
            <select class="btn btn-select btn-select-year" @change="onChangeOption('year', $event)">
                <option v-for="year in getOptionYear()"
                    :value="year"
                    :selected="year == selectedOptions.year"
                >{{ year }}</option>
            </select>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Lesson</th>
                    <th>Practice</th>
                    <th>Test</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="lesson in lessons">
                    <td>{{ lesson.id }}</td>
                    <td>{{ lesson.title ? lesson.title.japanese : '' }}</td>
                    <td>{{ lesson.count_practiced }}</td>
                    <td>{{ lesson.count_examination }}</td>
                </tr>
            </tbody>
        </table>
        <div class="view-all-lesson">
            <router-link to="/" class="btn btn-view-all">
                View All
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StatisticalLesson",

        data() {
            let now =  new Date()
            return {
                selectedOptions: {
                    year: now.getFullYear(),
                    month: now.getMonth() + 1,
                },
            }
        },

        computed: {
            lessons() {
                return this.$store.state.dashboard.lessons
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

            getOptionMonth() {
                return [
                    { key: 1, value: 'January' },
                    { key: 2, value: 'February' },
                    { key: 3, value: 'March' },
                    { key: 4, value: 'April' },
                    { key: 5, value: 'May' },
                    { key: 6, value: 'June' },
                    { key: 7, value: 'July' },
                    { key: 8, value: 'August' },
                    { key: 9, value: 'September' },
                    { key: 10, value: 'October' },
                    { key: 11, value: 'November' },
                    { key: 12, value: 'December' },
                ];
            },

            async onChangeOption(key, event) {
                this.selectedOptions[key] = event.target.value
                this.$store.dispatch('dashboard/doFetchLessons', this.selectedOptions)
            },
        },
    }
</script>
