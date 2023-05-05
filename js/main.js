const API = "https://api.github.com/users/";



//creamos la instancia Vue
const app = Vue.createApp({
    data(){
        return {
            // Propiedades del modelo
            search:null,
            result:null,
            error: null,
            message: null,
            dataUser: []
        };
    },

    //Los métodos que vamos a usar de ir dentro de la instacia veu en el elemento Veu
    methods: {
        // Función asincrona con sintaxis asyn aweit
        async doSearch(){

            this.result = this.error = null;
            this.dataUser = [];

            //Capturamos el error
            try {
            //Validar que el campo este lleno
            if(!this.search) throw new Error("Empty user!");
             //consumimos los datos publicos de los usuarios
            const response = await fetch(API + this.search);   
            if(!response.ok) throw new Error("User no found!");
            
            //Interpretamos la data que vienene en los headers en formato JSON
            const data = await response.json();
            const name = data.name;
            const blog = data.blog;
            const avatarUrl = data.avatar_url;
            let bio = data.bio;

            if(!bio) bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, est! Vitae voluptatem distinctio omnis sit?"
            // let descrption = data.
            this.dataUser.push(name, avatarUrl, bio, blog);
            this.result = data;
            console.log(data);
                
            } catch (error) {
                this.message = error;
                this.error = error
            } finally {
                this.search = null;
            }
            
        }
    }
});


//Pasar valores de propiedades a atributos html
{/* <div v-bind:title="nombre">Este es un ejemplo</div> */}
{/* <div :title="nombre">Este es un ejemplo</div> */}

//mustad {{}} interpolar valor de javascript en html
//vue es reactivo es decir los valores pueden cambiarse message = "Vue es reactivo!"
