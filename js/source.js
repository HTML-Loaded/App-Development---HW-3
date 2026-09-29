$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    //JS Injection

    var usernameElement = $("#username");
    usernameElement.html(username);

    var revenueElements = $(".revenue-amt");
    revenueElements.each(function() {
        $(this).html(revenueAmt);
    });

    var customerElement = $("#customer-num");
    customerElement.html(customerNum);

    var orderElement = $("#orders-amt");
    orderElement.html(ordersAmt);

    var issuesElement = $("#issues-amt");
    issuesElement.html(issuesAmt);

    var salesList = $("#salesTableBody");
    sales.forEach(function (sale) {
        salesList.append(
            "<tr>" +
                "<td>" + sale.product + "</td>" +
                "<td>" + sale.quantity + "</td>" +
                "<td>" + sale.revenue + "</td>" +
            "</tr>"
        );
    });

    var customerList = $("#customerTableBody");
    customers.forEach(function (customer) {
        customerList.append(
            "<tr>" +
                "<td>" + customer.name + "</td>" +
                "<td>" + customer.email + "</td>" +
                "<td>" + customer.status + "</td>" +
                "<td>" + customer.joined + "</td>" +
            "</tr>"
        )
    });

    var statusMessages = $("#system-status-list");
    messages.forEach(function (message) {
        statusMessages.append(
            "<li>" + message.messsage + "</li>"
        )
    });

    var notificationMessages = $("#notifications-list");
    notifications.forEach(function (notification) {
        notificationMessages.append(
            "<li>" + notification.messsage + "</li>"
        )
    })

    var taskMessages = $("#tasks-list");
    tasks.forEach(function (task) {
        taskMessages.append(
            "<li>" + task.messsage + "</li>"
        )
    })

    //jQuery UI

    $("button").button();

    $("#dashboardTabs").tabs();

    $("#customerDialog").dialog({
        autoOpen: false,
        modal: true,
        width: 450,

        buttons: {
            "Create Customer": function () {
                var name = $("#customerName").val();
                var email = $("#customerEmail").val();

                if (!name || !email) {
                    alert("Please enter a name and email.");
                    return;
                }

                alert("Customer created: " + name);
                $(this).dialog("close");
            },

            "Cancel": function () {
                $(this).dialog("close");
            }
        }
    });

    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });

    $("#newCustomerButton").on("click", function () {
        $("#customerDialog").dialog("open");
    });

    $("#customerDate").datepicker();
});