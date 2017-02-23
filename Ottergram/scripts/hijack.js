//Function to diable default click functionality
function disableAllLinks(){
    'use-strict';
     document.addEventListener('click', function (e) {
     e.preventDefault();
     e.stopPropagation();
     return false;
});
}
