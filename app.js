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

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();

        document.getElementById(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };



    var ctrlAddItem = function() {
        var input, newItem;

        // 1. Get the field input data
        input = UICtrl.getInput();

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Clear the fields

        // 5. Calculate and update budget

        // 6. Calculate and update percentages
    };

    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    }



})(budgetController, UIController);


controller.init();
