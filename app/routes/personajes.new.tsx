export default function newCharacterRoute(){
    return (
        <div>
            <p>Crea tu personaje</p>
            <form>
                <div>
                    <label>
                    Nombre: <input type="text" name="nombre" />
                    </label>
                </div>
                <div>
                    <label>
                    Descripcion: <input type="text" name="descripcion" />
                    </label>
                </div>
                <div>
                    <button type="submit" className="button">
                        Agregar
                    </button>
                </div>
            </form>
        </div>
    );
}