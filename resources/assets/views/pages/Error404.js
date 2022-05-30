let Error404 = {
    render : async () => {
        let view =  /*html*/`
        <div class="section section--blue text-center py-5 px-2 px-md-5 mt-5"><br><br><br>
            <h1>Whoops!</h1>
            <br>
            <h4>
                Нещо се обърка
            </h4>
            <br>

            <a href="/" type="button" class="btn btn-primary">Върни се обратно</a>
        </div>
        `
        return view
    }
}

export default Error404;
