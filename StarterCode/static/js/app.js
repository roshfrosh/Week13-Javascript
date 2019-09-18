// from data.js
var tableData = data;

// Create variables
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape","durationMinutes", "comments"]
var btn1 = d3.selectAll("#filter-btn");
function append_table(data){
    data.forEach(ufo_sight => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sight[column])
        )
    });
}
//add data to table
append_table(data);

//Filter data
function button(){
    d3.event.preventDefault();
    //var city_data1 = d3.select("#city").property("value").toLowerCase().trim();
    var date1 = d3.select("#datetime").property("value").trim();
    //Filter by date
    //var date2 = data.filter(data => data.datetime === date1)
    //Filter by city
    //var city2 = data.filter(data => data.city ===city_data1 )

    //Clear data
    tbody.html("");
    //Add filtered data to the table
    let x = tableData;
    if (date1){
        x = x.filter(row => row.datetime === date1);
    }
    append_table(x);
}
btn1.on("click",button);
append_table(tableData);
