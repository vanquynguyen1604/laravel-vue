export default {
    changeTitlePage(title = 'HOME | LARAVEL-VUE') {
        let e = document.head.querySelector('title');

        return e && (e.text = title)
    },

    errorsToArray(errors) {
        if (typeof errors == 'string') {
            return [errors];
        } else if (typeof errors == 'object') {
            let errorString = [];
            for (let key in errors) {
                errorString = errorString.concat(this.errorsToArray(errors[key]));
            }

            return errorString;
        }

        return errors
    },

    getFirstError(xhr) {
        let errorsArray = [];
        if (xhr.responseJSON) {
            errorsArray = this.errorsToArray(xhr.responseJSON);
        } else if (xhr.response) {
            errorsArray = this.errorsToArray(xhr.response);
        }

        if (errorsArray[0] && errorsArray[0] !== '') {
            return errorsArray[0];
        }

        return 'A server error occurred. Please contact the administrator!';
    },
}
