const autos = require('./autos.js')

const concesionaria = {
   autos: autos,
   buscarAuto: function(pat){
        let autoABuscar = null;
        // Opcion Foreach
        this.autos.forEach(auto => {
            if(auto.patente == pat){
                autoABuscar = auto;
            }
        });
        return autoABuscar;
        // Opcion Filter
        autoABuscar = this.autos.filter((e)=> e.patente == patente )
        return autoABuscar[0];
        // Opcion Find
        autoABuscar = this.autos.find((e)=> e.patente == patente )
        return autoABuscar;
    },
    venderAuto: function(pat){
        let auto = this.buscarAuto(pat);
        if(auto){
            auto.vendido = true
        }
    },
    autosParaLaVenta: function() {
        return this.autos.filter(e => !e.vendido)
    },
    autos0KM: function(){
        return this.autosParaLaVenta().filter(e => e.km < 100)
    },
    listaDeVentas: function(){
        return this.autos.filter(auto => auto.vendido == true).map(auto => auto.precio)
    },
    totalDeVentas: function(){
        return this.listaDeVentas().reduce( (acumulador, valor) => acumulador + valor , 0);
     },
    puedeComprar: function(auto,persona){
        return persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas && persona.capacidadDePagoTotal >= auto.precio;
    },
    autosQuePuedeComprar: function(persona){
        return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto,persona));
    }
};