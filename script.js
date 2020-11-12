/**
 * this function takes info from the form and makes the query url
 * @returns {string}
 */
function buildQueryURl() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";

    var queryParams = { "api-key": "R1a31F4tBjCUaM2ho8GtIFsrSdtXt30M"};

    queryParams.q = $("#search-term").val().trim();

    var startYear = $("#start-year").val().trim();

    if(parseInt(startYear)) {
        queryParams.begin_date = startYear + "0101";
    }

    var endYear = $("#end-year").val().trim();

    if(parseInt(endYear)){
        queryParams.end_date = endYear + "0101";
    }

    console.log("---------------\nURL: " + queryURL + "\n---------------");
    console.log(queryURL + $.param(queryParams));
  return queryURL + $.param(queryParams);

}