namespace SpriteKind {
    export const 宝箱 = SpriteKind.create()
    export const 金币 = SpriteKind.create()
    export const 金币2 = SpriteKind.create()
    export const 金币3 = SpriteKind.create()
    export const 金币4 = SpriteKind.create()
    export const 金币5 = SpriteKind.create()
    export const cdd = SpriteKind.create()
    export const ccd2 = SpriteKind.create()
    export const ccd3 = SpriteKind.create()
    export const ccd4 = SpriteKind.create()
    export const cccd = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.cdd, function (sprite, otherSprite) {
    ccd1.say("复活点", 100)
    复活点序号 = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ccd4, function (sprite, otherSprite) {
    ccd44.say("复活点", 100)
    复活点序号 = 4
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ccd2, function (sprite, otherSprite) {
    ccd22.say("复活点", 100)
    复活点序号 = 2
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles0, function (sprite, location) {
    if (info.life() <= 0) {
        game.over(false)
    } else if (info.life() > 0) {
        info.changeLifeBy(-1)
        if (复活点序号 == 1) {
            mySprite.setPosition(120, 152)
        } else if (复活点序号 == 2) {
            mySprite.setPosition(312, 88)
        } else if (复活点序号 == 3) {
            mySprite.setPosition(440, 88)
        } else if (复活点序号 == 4) {
            mySprite.setPosition(183, 24)
        } else if (复活点序号 == 0) {
            mySprite.setPosition(34, 34)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.金币, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    金币1.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.金币4, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    金币42.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cccd, function (sprite, otherSprite) {
    复活点序号 = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.金币2, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    金币22.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ccd3, function (sprite, otherSprite) {
    ccd33.say("复活点", 100)
    复活点序号 = 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.金币3, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    金币32.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.金币5, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    金币52.destroy(effects.spray, 500)
})
let 复活点序号 = 0
let mySprite: Sprite = null
let ccd44: Sprite = null
let ccd33: Sprite = null
let ccd22: Sprite = null
let ccd1: Sprite = null
let 金币52: Sprite = null
let 金币42: Sprite = null
let 金币32: Sprite = null
let 金币22: Sprite = null
let 金币1: Sprite = null
tiles.setTilemap(tilemap`级别2`)
金币1 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.金币)
金币22 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.金币2)
金币32 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.金币3)
金币42 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.金币4)
金币52 = sprites.create(img`
    . . b b b b . . 
    . b 5 5 5 5 b . 
    b 5 d 3 3 d 5 b 
    b 5 3 5 5 1 5 b 
    c 5 3 5 5 1 d c 
    c d d 1 1 d d c 
    . f d d d d f . 
    . . f f f f . . 
    `, SpriteKind.金币5)
let ccccd = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.cccd)
ccd1 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.cdd)
ccd22 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.ccd2)
ccd33 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.ccd3)
ccd44 = sprites.create(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, SpriteKind.ccd4)
mySprite = sprites.create(img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ............2222222...........
    ............2222222...........
    ............2222222...........
    ............2222222...........
    ............2222222...........
    ............2222222...........
    ............2222222...........
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Player)
mySprite.setPosition(34, 34)
ccd1.setPosition(120, 152)
ccd22.setPosition(312, 88)
ccd33.setPosition(440, 88)
ccd44.setPosition(183, 24)
ccccd.setPosition(34, 34)
金币1.setPosition(55, 120)
金币22.setPosition(392, 57)
金币32.setPosition(264, 89)
金币42.setPosition(201, 297)
金币52.setPosition(71, 246)
mySprite.startEffect(effects.trail)
mySprite.follow(mySprite)
controller.moveSprite(mySprite, 42, 42)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(4)
mySprite.say("走出迷宫并且收集5枚金币", 4000)
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (info.score() == 5) {
            music.stopAllSounds()
            game.over(true)
        } else {
            mySprite.setPosition(424, 301)
            game.setDialogCursor(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
                . . . 4 4 4 4 4 4 4 4 4 . . . . 
                . . . . 4 4 4 4 4 4 4 . . . . . 
                . . . . . 4 4 4 4 4 . . . . . . 
                . . . . . . 4 4 4 . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            game.showLongText("请收集5枚金币后再来", DialogLayout.Top)
            game.showLongText("" + "还需要" + (5 - info.score()) + "枚金币。", DialogLayout.Top)
            mySprite.setPosition(424, 301)
        }
    }
})
forever(function () {
    music.playMelody("C5 G B A F A C5 B ", 170)
})
