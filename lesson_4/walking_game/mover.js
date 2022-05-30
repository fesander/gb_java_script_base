let mover = {

    getDiration() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while(true) {
            let direction = parseInt(prompt("Введите число (2, 4, 6, 8), куда вы хотите переместиться. 'Отмена' для выхода."));
            if(isNaN(direction)) {
                return null;
            }
            if(!availableDirections.includes(direction)) {
                alert("Для перемещения ввести одно из чисел 2, 4, 6, 8.");
                continue;
            }
            return direction;
        }
    }, 

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1:
                if(player.x != 0 && player.y != config.rowsCount - 1) {
                    nextPosition.x--;
                    nextPosition.y++;
                }
                break;
            case 2:
                if(player.y != config.rowsCount - 1) {
                    nextPosition.y++;
                }
                break;
            case 3:
                if(player.x != config.colsCount - 1 && player.y != config.rowsCount - 1) {
                    nextPosition.x++;
                    nextPosition.y++;
                }
                break;
            case 4:
                if(player.x != 0) {
                    nextPosition.x--;
                }
                break;
            case 6:
                if(player.x != config.colsCount - 1) {
                    nextPosition.x++;
                }
                break;
            case 7:
                if(player.x != 0 && player.y != 0) {
                    nextPosition.x--;
                    nextPosition.y--;
                }
                break;
            case 8:
                if(player.y != 0) {
                    nextPosition.y--;
                }
                break;
            case 9:
                if(player.x != config.colsCount - 1 && player.y != 0) {
                    nextPosition.x++;
                    nextPosition.y--;
                }
                break;
        }
        return nextPosition;
    }
}