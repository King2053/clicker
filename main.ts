input.onButtonPressed(Button.B, function () {
    sprite += 1
    game.addLife(sprite)
    basic.showNumber(sprite)
})
let sprite = 0
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.LoopingInBackground)
