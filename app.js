// Budget Controller
var budgetController = (function () {


})();

// UI Controller
var UIController = (function () {
    return {
        getInput: function() {
            return {
                type: document.getElementById('type').value,
                description: document.getElementById('add__description').value,
                value: document.getElementById('add__value').value
            }
        }
    }

})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    document.getElementById('add__btn').addEventListener('click', ctrlAddItem);

    var ctrlAddItem = function() {
        console.log('it works');
        var input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Clear the fields

        // 5. Calculate and update budget

        // 6. Calculate and update percentages
    }

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);
