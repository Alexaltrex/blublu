export const getColor = (index: number): string => {

    switch (index % 6) {
        case 0: {
            return "#F600FF"
        }
        case 1: {
            return "#0F2"
        }
        case 2: {
            return "#02F"
        }
        case 3: {
            return "#FFF200"
        }
        case 4: {
            return "#7700FF"
        }
        case 5: {
            return "#FFAE00"
        }
        default: {
            return "#FFF"
        }
    }
}
