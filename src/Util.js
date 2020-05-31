const RETRO_COLORS = ["rgb(255,237,130)","rgb(240,207,207)","rgb(236,90,90)","rgb(147,212,165)","rgb(134,221,205)"]

export function getRandomValueFromArray(list) {
    const index = Math.floor(Math.random() * list.length)
    
    return list[index]
}

export function getRandomRetroColor() {
    return getRandomValueFromArray(RETRO_COLORS)
}