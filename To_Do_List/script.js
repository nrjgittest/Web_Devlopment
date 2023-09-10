$(document).ready(function() {
    $("#addTask").click(function() {
        var taskText = $("#taskInput").val();
        if (taskText.trim() === "") {
            alert("Enter a task ");
            return;
        }
        
        var listItem = $("<li>").text(taskText);
        var deleteButton = $("<button>").addClass("delete-button").text("Delete");
        
        listItem.append(deleteButton);
        $("#taskList").append(listItem);
        
        $("#taskInput").val("");
        
        deleteButton.click(function() {
            listItem.remove();
        });
    });
});
