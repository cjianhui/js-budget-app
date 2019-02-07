// Budget Controller
var budgetController = (function () {


})();

// UI Controller
var UIController = (function () {

    var DOMStrings = {
        inputType: 'add__type',
        inputDescription: 'add__description',
        inputValue: 'add__value',
        inputBtn: 'add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.getElementById(DOMStrings.inputType).value,
                description: document.getElementById(DOMStrings.inputDescription).value,
                value: document.getElementById(DOMStrings.inputValue).value
            }
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    }

})();

// Global App Controller
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMStrings();

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

    document.getElementById(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);
