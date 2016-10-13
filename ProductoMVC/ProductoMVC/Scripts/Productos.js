function initPage() {
    var productos = [];
    $("table tbody tr td p input").click(function () {
        var p = $(this).closest("p");
        if ($(p).children("label").text() == "Activo") {
            $(p).children("label").text("Inactivo");
            $(this).val(false);
        }
        else {
            $(p).children("label").text("Activo");
            $(this).val(true);
        }
    });
    $("#btnGuardar").click(function () {
        var json = [];
        var i = 0;
        $("table tbody tr td p input").each(function () {
            if (productos[i].Activo != $(this).val()) {
                productos[i].Activo = $(this).val();
                json.push(productos[i]);
            }
            i++;
        });
        if (json.length > 0) {
            var jsonpost = new jsonPost();
            jsonpost.Productos = json;
            console.log(JSON.stringify(jsonpost));
            $.ajax({
                type: "POST",
                url: "/Productoes/UpdateCheck",
                data: JSON.stringify(jsonpost),                
                dataType: "json",
                contentType: "application/json",
                success: function (response) {
                    if (response.status == "ok") {
                        Materialize.toast(response.message,5000);
                    }
                },
                error: function(response){}
            });
        }
    });
    $("table tbody tr").each(function () {
        var prod = new Producto();
        prod.Producto1 = $(this).children("td:nth-child(1)").text().trim();
        prod.Precio =parseFloat($(this).children("td:nth-child(2)").text().trim());
        prod.IdProducto = parseInt($(this).children("td:nth-child(3)").attr("data-id"));
        prod.Activo = $(this).children("td").children("p").children("input.filled-in").val();
        productos.push(prod);
    });
    console.log(productos);
}
//Objeto Producto
function Producto() {
    this.IdProducto = null;
    this.Producto1 = null;
    this.Precio = null;
    this.Activo = null;
}
//Objeto Post
function jsonPost ()
{
    this.Productos = null;
}