var id = new Id_Number();

var languages =
    [
        {
            id: id.get_and_increment(),
            name: languages_names[id],
            path: languages_paths[id]
        },
        {
            id: id.get_and_increment(),
            name: languages_names[id],
            path: languages_paths[id]
        }
    ];