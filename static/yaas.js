// we'll want to title-case the no
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

$(document).ready(function(){
    // get a yes
    $.getJSON("https://api.wrong.tools/yaas", function(resp) {
        // convert the yes to a no
        $.ajax({
            url: "https://api.wrong.tools/yaas",
            data: JSON.stringify(resp),
            type: "PUT",
            dataType: "json",
        })
            // upcase and append the no
            .done(function(resp) {
                $("#big-link a").html(resp.toProperCase() + '.');
            })
    })
});
