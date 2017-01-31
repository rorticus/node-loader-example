define(function() {
    return {
        sumSomeNumbers: function (numbers) {
            return numbers.reduce(function (sum, num) {
                return sum + num;
            }, 0);
        }
    };
});