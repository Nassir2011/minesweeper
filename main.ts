namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const fire = SpriteKind.create()
    export const fireball = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . c c . . . . . . 
. . . . . . . . c c . . . . . . 
. . . . . . . c c c . . . . . . 
. . . . . . . c c c c . . . . . 
. . . . . . . c c c c . . . . . 
. . . . . . c c c c c c . . . . 
. . . . . . c c c c c c . . . . 
. . . . . . c c c c c c c . . . 
. . . . . c c c c c c c c . . . 
. . . . c c c c c c c c c . . . 
. . . c c c c c c c c c c c c . 
. . c c c c c c c c c c c c c . 
. . c c c c c c c c c c c c c . 
. . c c c c c c c c c c c c c . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . c c . . . . . . c c . . 
. . . . c c . . . . . . c c . . 
. . . . c c . . . . . . c c . . 
. . . . c c . . . . . . c c . . 
. . . c c c c . . . . c c c c . 
. . . c c c c . . . . c c c c . 
. . c c c c c c . . c c c c c c 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . 2 2 2 2 . 
. . . . . . . . . . . 2 4 4 . . 
. . . . 2 2 . . . . . 2 4 4 . . 
. . . . 2 4 4 . . . . 4 4 4 2 . 
. . . . 2 2 4 4 . . 2 4 2 2 2 . 
. . . . 2 2 2 4 4 4 4 4 2 2 2 . 
. . . . 2 2 2 5 5 5 5 5 2 2 . . 
. . . 2 2 2 2 5 5 5 5 5 2 2 2 . 
. . 2 2 2 2 5 5 5 5 5 5 2 2 2 . 
. . 2 2 2 2 5 5 5 5 5 5 2 2 2 . 
. 2 2 2 8 2 2 5 5 5 5 5 2 2 2 . 
. 2 2 2 2 2 2 5 5 5 5 5 2 2 2 . 
. 2 2 2 2 2 8 8 8 8 8 8 8 2 2 . 
e e e e e e e e e e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . 1 1 1 1 1 b b b b 1 1 1 1 . 
. . 1 1 1 1 1 b 2 2 b 1 1 1 1 . 
. . 1 1 1 1 1 b 2 2 b 1 1 1 1 . 
. . 1 1 1 1 1 b b b b 1 1 1 1 . 
. . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
. . . 1 1 1 1 1 1 1 1 1 1 1 . . 
. . . . 1 1 1 1 1 1 1 1 1 . . . 
. . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . b 2 2 2 . . . . . 
. . . . . . . b 2 2 . . . . . . 
. . . . . . . b 2 . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . . . b . . . . . . . . 
. . . . . . . b . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`
}
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fireball, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile5, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile3, function (sprite, location) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.magicWand.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (squary.vy == 0) {
        squary.vy = -250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fire, function (sprite, otherSprite) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile8, function (sprite, location) {
    game.over(true)
})
let fireball: Sprite = null
let fire: Sprite = null
let coin: Sprite = null
let squary: Sprite = null
squary = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 5 5 5 5 5 5 5 5 . . 
. . . . 5 4 4 4 4 4 4 4 4 5 . . 
. . . . 5 4 4 f 4 4 f 4 4 5 . . 
. . . . 5 4 4 4 4 4 4 4 4 5 . . 
. . . . 5 4 f f 4 4 f f 4 5 . . 
. . . . 5 4 4 f f f f 4 4 5 . . 
. . . . 5 4 4 4 4 4 4 4 4 5 . . 
. . . . 5 4 4 4 4 4 4 4 4 5 . . 
. . . . 5 4 4 4 4 4 4 4 4 5 . . 
. . . . 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(squary)
effects.blizzard.startScreenEffect()
tiles.setTilemap(tiles.createTilemap(
            hex`4e001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000020000050000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000060006000000000000000000000006060000000000060000030303030008000000000000000000000000000000060000000000000000000000000000000002020000000000000006000000000000000002000003030000000200000006060005000000020202020202020202000000000000000000000006000000000000000006000303030000000303000000000000000006000000000000000000000000000202020000000000020202020000000000000000000000000000070000000000000303030000000202020000000002020202020202020202000000000000000000000100060606060606000000000000000000000009000000000000000000000000000000000000020202020202020202020202000000000000020000000000000000000000000000000000020202020202020202020202020900090000000000000500000600000900000600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000202000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000003030300000009000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000009020202020202020202020202020200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . . . . . 2 . . . . . . . 2 . . . . . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 . . . . . 2 2 2 2 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 2 2 2 . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . 2 . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9],
            TileScale.Sixteen
        ))
squary.ay = 350
scene.cameraFollowSprite(squary)
for (let value of tiles.getTilesByType(myTiles.tile6)) {
    coin = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.coin)
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, myTiles.tile0)
    animation.runImageAnimation(
    coin,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . f f f f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f 5 5 5 5 f . . . . . 
. . . . . f f 5 5 f f . . . . . 
. . . . . . f 5 5 f . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f f . . . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . f 5 5 5 5 5 5 5 5 5 5 5 f . 
. . . f 5 5 5 5 5 5 5 5 5 f . . 
. . . . f 5 5 5 5 5 5 5 f . . . 
. . . . . f f f f f f f . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    200,
    true
    )
    animation.runMovementAnimation(
    coin,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
}
tiles.placeOnRandomTile(squary, myTiles.tile7)
info.startCountdown(50)
for (let value of tiles.getTilesByType(myTiles.tile4)) {
    fire = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.fire)
    tiles.placeOnTile(fire, value)
    animation.runImageAnimation(
    fire,
    [img`
2 . . . . . . . . . . . . . . . 
. . 2 . . . 2 . 2 2 . 2 . . 2 . 
. . 2 2 . . . . 2 2 . . . 2 2 . 
. . 2 2 . . . . 2 2 2 . 2 2 2 . 
. . 2 2 . . . . 2 2 2 . 2 2 2 . 
. . 2 2 2 2 2 2 2 2 2 . 2 2 2 . 
. . 2 4 4 4 4 4 4 4 2 2 2 4 2 . 
. . 2 5 5 5 5 5 4 4 4 4 4 4 2 . 
. . 2 5 5 5 5 5 5 5 5 5 5 5 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 5 2 2 . 
. 2 2 2 2 2 2 2 2 2 8 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 8 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 8 8 8 8 8 8 8 2 2 2 2 
e e e e e e e e e e e e e e e e 
`,img`
. . . . . . 2 . . . . . . . . . 
. . 2 . . . . . 2 2 2 2 2 . . . 
. . 2 2 2 . . . 2 2 2 2 2 . . . 
. . 2 4 2 . . . 2 4 4 4 2 . 2 . 
. . 2 4 2 . . . 2 4 4 4 2 . . . 
2 . 2 4 4 2 2 2 2 4 4 4 2 2 2 . 
. . 2 4 4 4 4 4 4 4 4 4 4 4 2 . 
. . 2 5 5 5 5 5 5 5 5 5 4 4 2 . 
. . 2 2 2 2 2 2 2 2 2 5 5 5 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 5 2 . 
. 2 2 2 2 2 2 2 2 2 8 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 8 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 8 8 8 8 8 8 8 2 2 2 2 
e e e e e e e e e e e e e e e e 
`],
    200,
    true
    )
    tiles.setTileAt(value, myTiles.tile0)
}
for (let value of tiles.getTilesByType(myTiles.tile9)) {
    fireball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 . . . . . . . 
. . . . 2 2 2 2 2 2 . . . . . . 
. . . 2 2 2 2 2 2 2 2 . . . . . 
. . . 2 4 2 2 4 4 2 2 2 . . . . 
. . . 2 4 4 4 4 4 4 4 2 2 . . . 
. . . 2 4 4 4 4 4 4 4 2 2 . . . 
. . . 2 2 2 2 2 2 2 4 2 2 . . . 
. . . 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.fireball)
    tiles.placeOnTile(fireball, value)
    tiles.setTileAt(value, myTiles.tile0)
    animation.runMovementAnimation(
    fireball,
    "c 0 -100 0 100 0 0 ",
    1000,
    true
    )
    fireball.startEffect(effects.fire)
}
forever(function () {
    music.playMelody("C5 B C5 B C5 B C5 B ", 240)
    music.playMelody("C5 B G A D E - E ", 240)
})
