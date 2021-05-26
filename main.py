@namespace
class SpriteKind:
    宝箱 = SpriteKind.create()
    金币 = SpriteKind.create()
    金币2 = SpriteKind.create()
    金币3 = SpriteKind.create()
    金币4 = SpriteKind.create()
    金币5 = SpriteKind.create()
    cdd = SpriteKind.create()
    ccd2 = SpriteKind.create()
    ccd3 = SpriteKind.create()
    ccd4 = SpriteKind.create()

def on_on_overlap(sprite, otherSprite):
    global 复活点序号
    ccd1.say("复活点", 100)
    复活点序号 = 1
sprites.on_overlap(SpriteKind.player, SpriteKind.cdd, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    global 复活点序号
    ccd44.say("复活点", 100)
    复活点序号 = 4
sprites.on_overlap(SpriteKind.player, SpriteKind.ccd4, on_on_overlap2)

def on_on_overlap3(sprite, otherSprite):
    global 复活点序号
    ccd22.say("复活点", 100)
    复活点序号 = 2
sprites.on_overlap(SpriteKind.player, SpriteKind.ccd2, on_on_overlap3)

def on_overlap_tile(sprite, location):
    if info.life() <= 0:
        game.over(False, effects.blizzard)
    elif info.life() > 0:
        info.change_life_by(-1)
        if 复活点序号 == 1:
            mySprite.set_position(120, 152)
        elif 复活点序号 == 2:
            mySprite.set_position(312, 88)
        elif 复活点序号 == 3:
            mySprite.set_position(440, 88)
        elif 复活点序号 == 4:
            mySprite.set_position(183, 24)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.forest_tiles0,
    on_overlap_tile)

def on_on_overlap4(sprite, otherSprite):
    music.ba_ding.play()
    info.change_score_by(1)
    金币1.destroy(effects.spray, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.金币, on_on_overlap4)

def on_on_overlap5(sprite, otherSprite):
    music.ba_ding.play()
    info.change_score_by(1)
    金币42.destroy(effects.spray, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.金币4, on_on_overlap5)

def on_on_overlap6(sprite, otherSprite):
    music.ba_ding.play()
    info.change_score_by(1)
    金币22.destroy(effects.spray, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.金币2, on_on_overlap6)

def on_on_overlap7(sprite, otherSprite):
    global 复活点序号
    ccd33.say("复活点", 100)
    复活点序号 = 3
sprites.on_overlap(SpriteKind.player, SpriteKind.ccd3, on_on_overlap7)

def on_on_overlap8(sprite, otherSprite):
    music.ba_ding.play()
    info.change_score_by(1)
    金币32.destroy(effects.spray, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.金币3, on_on_overlap8)

def on_on_overlap9(sprite, otherSprite):
    music.ba_ding.play()
    info.change_score_by(1)
    金币52.destroy(effects.spray, 500)
sprites.on_overlap(SpriteKind.player, SpriteKind.金币5, on_on_overlap9)

复活点序号 = 0
mySprite: Sprite = None
ccd44: Sprite = None
ccd33: Sprite = None
ccd22: Sprite = None
ccd1: Sprite = None
金币52: Sprite = None
金币42: Sprite = None
金币32: Sprite = None
金币22: Sprite = None
金币1: Sprite = None
tiles.set_tilemap(tilemap("""
    级别2
"""))
金币1 = sprites.create(img("""
        . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . .
    """),
    SpriteKind.金币)
金币22 = sprites.create(img("""
        . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . .
    """),
    SpriteKind.金币2)
金币32 = sprites.create(img("""
        . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . .
    """),
    SpriteKind.金币3)
金币42 = sprites.create(img("""
        . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . .
    """),
    SpriteKind.金币4)
金币52 = sprites.create(img("""
        . . b b b b . . 
            . b 5 5 5 5 b . 
            b 5 d 3 3 d 5 b 
            b 5 3 5 5 1 5 b 
            c 5 3 5 5 1 d c 
            c d d 1 1 d d c 
            . f d d d d f . 
            . . f f f f . .
    """),
    SpriteKind.金币5)
ccd1 = sprites.create(img("""
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
    """),
    SpriteKind.cdd)
ccd22 = sprites.create(img("""
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
    """),
    SpriteKind.ccd2)
ccd33 = sprites.create(img("""
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
    """),
    SpriteKind.ccd3)
ccd44 = sprites.create(img("""
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
    """),
    SpriteKind.ccd4)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
mySprite.set_position(34, 34)
ccd1.set_position(120, 152)
ccd22.set_position(312, 88)
ccd33.set_position(440, 88)
ccd44.set_position(183, 24)
金币1.set_position(55, 120)
金币22.set_position(392, 57)
金币32.set_position(264, 89)
金币42.set_position(201, 297)
金币52.set_position(71, 246)
mySprite.start_effect(effects.trail)
mySprite.follow(mySprite)
controller.move_sprite(mySprite, 42, 42)
scene.camera_follow_sprite(mySprite)
info.set_score(0)
info.set_life(4)
mySprite.say("走出迷宫并且收集5枚金币", 4000)

def on_forever():
    music.play_melody("C5 G B A F A C5 B ", 170)
forever(on_forever)

def on_forever2():
    if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
        if info.score() == 5:
            music.stop_all_sounds()
            game.over(True, effects.confetti)
        else:
            mySprite.set_position(424, 301)
            game.set_dialog_cursor(img("""
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
            """))
            game.show_long_text("请收集5枚金币后再来", DialogLayout.TOP)
            game.show_long_text("" + "还需要" + str((5 - info.score())) + "枚金币。",
                DialogLayout.TOP)
            mySprite.set_position(424, 301)
forever(on_forever2)
