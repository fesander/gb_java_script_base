let game = {
    run() {
        while(true) {
            const diraction = mover.getDiration();
            if(diraction === null) {
                console.log("Игра окончена");
                break;
            }
            const nextPoint = mover.getNextPosition(diraction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    init() {
        console.log("Ваше положение на поле в виде о.");
        renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init()