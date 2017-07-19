export function fetchMainMenu() {
    return {
        type: "FETCH_MAIN_MENU",
        payload: [
            {id:"menuItem_1", text: "Home"},
            {id:"menuItem_2", text: "Meu Perfil"}
        ]
    };
}