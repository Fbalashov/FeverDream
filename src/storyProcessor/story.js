export default story = {
    prompts: [
      `It's warm, the sun is smiling upon you, its rays warming every inch of your body. The air is cool, rushing by you as you stride down the street, carrying the crisp smell of trees and freshly cut grass.`,
      `You pause to observe the fragments in the beautiful tapestry of the day. The edges are jagged and if you look carefully at them you see that light splits through the cracks between them.`,
      `The light pulses in a regular rythmic pattern, a sharp tick sounding in time with the shifts in color, eluding your focus and startling you with every pulse.`,
      `People walk in and out of the different fragments, your view of them shifting as they enter and exit each piece of the bustling scene.`,
      `The ticking distracts you from the frocuing onn the scene, it calls you back home, you missed something, did you leave the oven on again? That must be it.`,
      `A friendly policeman from accross the street spies you and smiles, his exposed teeth jump and click in time with the ticking.`,
      `You stare, mesmerized by the sight until he takes notice of you watching and begins to walk towards you, his body jerkily moving, like someone dancing the robot.`,
      `Before you can react a hand grasps your shoulder, leathery and cold.`,
      `You are pulled into an alley to find yourself face to face with Reptile man as the air gets thick with smoke. Thank god it's clear in here.`],
    options: [{
      labels: [{ label: "What is a reptile man", probability: 60 }],
      prompts: [`This seems wrong, reptiles are not men, though perhaps they could be, it was decided during the 13th congress of reptiles that they could choose to be men, at least that is what the billboard in this alley says.`,
        `You struggle to remember what your mother told you about them when you realize that the door to your home is in front of you. Thank god you made it back.`,
        `The smoke get's thicker as you open the door but inside is just a cat. Your cat, the one your mother gave you when you were only four.`],
      options: [{
        labels: [{ label: "Ask your mom why your cat is wearing a santa hat", probability: 80 }],
        prompts: [`Mom stares into the kitchen with a smile. the Christmas tree behind her mirroring her actions.`,
          `Just as it had every year, the tree shakes and shimmers. "Didn't we get a new tree every year though mom?"`,
          `Her vacant eyes bore into you and her smile continues to gleam. The tree starts to shudder and shrink in fear, backing away from you and the axe in the room.`,
          `The ticking. Why is there ticking?`],
        options: [{
          labels: [{ label: "Ask the tree why it's ticking", probability: 70 }],
          prompts: [`"Please no more questions" says the tree, after hours of interrogation it still hasn't said a word but it's breaking.`,
            `Its boughs are cracked and patches of its bark are strewn accross the floor, the smell of sap mixed with a metalic tang is wafting through the air.`,
            `The tree huddles shivering in the corner, trying to stay as far back as possible from its tormentor, but the room is cold are bare with nothing to hide behind.`,
            `Your mother shifts the axe in her hands, carefully judging its weight, waiting for you to give the word to cut off a few more branches.`,
            `How much longer can this go before there is no tree to interrogate?`],
          options: [{
            labels: [{ label: "Tell her to finish the job", probability: 100 }],
            prompts: [`Mom falls upon the tree, axe gleaming in the harsh light positioned above it.`,
              `She smiles happier than you ever remember her, moving her loving warm arms in merciless motions.`,
              `"This is for the best honey", she tells you with her smile as the axe swings in her arms colliding with the crying hunk of wood collapsing to the ground.`,
              `The tree shrieks and screams for mercy, splinters scattering accross the ground, red wood chips coating the floor.`,
              `Your mother whacks heartlessly, rythmicly. The shrieks slowly give ways to yelps and then to murmurs, you are just left with your mother, smiling and swinging.`,
              `Whack, Whack, Tic, toc, Whack, Whack, Tic, Tic, Tic, Tic.`]
          },
          {
            labels: [{ label: "Give up", probability: 80 }],
            prompts: [`The tree smiles, your mother glares at you, with eyes overflowing with acid that would melt you as a child.`,
              `As you turn to explain to your mom the tree reaches out and takes her in its bushy bough.`,
              `Her eyes are hallow and sad, knowing exaclty what is to come and accepting the fate that her wonderful child has assigned her to.`,
              `It swallows her whole, licking its lips and chomping in time with her screams. So regular, so steady.`,
              `Chomp, chomp, tic, toc, chomp, chomp, tic, tic, tic, tic.`]
          },
          {
            labels: [{ label: "Give up", probability: 20 }],
            prompts: [`The tree smiles at you, just as your mother did when you were young.`,
              `It reaches out and steps towards you from the couch and rises up to meet you.`,
              `You reach out and embrace it, how long has it been since you hugged your mother? Days, months, years? It doesn't matter, it always feels so good.`,
              `As your body meets the embrace of your mothers branches, you smell the warm pine that you remembered of her.`,
              `Or was that the tree you climbed as a child. Resting your head there you feel at peace, at last at home.`,
              `And in the silence you just hear the fire crackle and her heart beat trough her needles.`,
              `ba-bump, ba-bump, ba-bump, ta-bump, tu-bump, tump, tump, timp, tic, tic, tic, tic.`]
          }]
        },
        {
          labels: [{ label: "Ask the tree why it's ticking", probability: 30 }, { label: "pickup the axe", probability: 100 }],
          prompts: [`The axe jumps into your hands, excited for what is to come.`,
            `Oh how you enjoyed chopping down trees with it when you were younger.`,
            `Oh how good it feel to heft it over your head and swing it, how much power!`,
            `Smash, chop, whack, whack, whack`,
            `The tree disintegrates stoicly not saying a word. Shuddering under each blow until you are swinging at the floor.`,
            `As you stare down at what you've done the axe jumps onto the oven and bounces up and down, in time with the timer you set for your dinner.`,
            `dink, dink, Tic, toc, dink, dink, Tic, Tic, Tic, Tic`]
        }]
      },
      {
        labels: [{ label: "Ask your mom why your cat is wearing a santa hat", probability: 20 }, { label: "pet the cat", probability: 30 }],
        prompts: [`The cat purrs and strolls around you. It's stripes rippling accross it's body. how did it ever get to be so big and you so small?`,
          `I remember when it was just the size of a tiger and now it's as big as an elephant.`,
          `You don't remember feeding it this morning, did you? You look into it's face and realize that it is staring hungrily at you.`],
        options: [{
          labels: [{ label: null, probability: 70 }],
          prompts: [
            `You realize you hadn't fed it and start to look for the kibble you left in the kitchen. As you run towards it you remember just how large the bag is`,
            `You will have to work hard to get it into the bowl, better do it quick before your elephant sized tiger gets hungry.`,
            `You push and tug, trying to move the bag from its spot, but try as you may you can't get the bag to pour.`],
          options: [{
            labels: [{ label: "Use the weight of your body", probability: 30 }],
            prompts: [`As you ram into the bag it sways and leans forward and then sways back towards you.`,
              `It hovers there adn then continues it's decent towards the ground and your body.`,
              `You start to run and your tap shoes make contact with the smooth metal surface of the floor.`,
              `Click-clack, click-clack`,
              `And as you run it begins to feel as if your feet are moving through molases and no matter how hard you push they slow down to a steady rate.`,
              `click-clack, click-clack... click-clack... click... clack... tic... tac...tic... tac... tic... tic... tic... tic`,
              `And then a sudden pressure.`]
          },
          {
            labels: [{ label: "Use the weight of your body", probability: 70 }],
            prompts: [`The bag tilts forward, sways and then continues towards the bowl.`,
              `As it makes contact kibble overflows and spills onto the floor. You must stop it, you can't let the kitchen become a mess.`,
              `Memories of your mother lecturing you as child fill your head, "The only way for it to be clean is for it to never have been messy".`,
              `And how she had yelled at you when you dropped a glass of milk, even though you tried to clean it up and hide it from her. "You missed shards everywhere! Are you trying to kill me? Or do you just want the floor to be moldy?"`,
              `You catch the bag, just barely propping it up and unable to push it back into position. A single kibble falls to the ground, bouncing accross the ground and into the center of the floor.`,
              `You strain to reach it with your foot and pull it closser to you and your foot scrapes against it pushing it further away.`,
              `You reach again and feel the weight of the bag shift as the packaging slips from your fingers. more kibble falls out onto the ground sending rattles through the kitchen.`,
              `You catch your breath and look wildly in terror. The sounds fade, silence again, the bag is steady in your arms.`,
              `The sound of heels shatters the silence, sending your heart back into your throat. They approach quickly, steadily building in intensity. Mom.`,
              `click, clack, click, clack, tick, tack, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Ask the cat to eat from the bag", probability: 100 }],
            prompts: [`How large your cat is, it's eyes are mirrors within mirrors within mirrors. You stare deeply into them and notice the interconnecting lattice of its iris pulsate.`,
              `A swaying forest that you are within shifting with the breeze of a warm day.`,
              `Your cat stands in front of you and your hands stretch out to meet the wall of fur.`,
              `So soft, so buttery. So relaxed, the fur becomes smoother and smoother to your hands and eyes.`,
              `You feel a soft pat on your head, as you grow more relaxed the scene becomes dimmer.`,
              `Then you feel as if you are flying up to the ceiling and land in a wet but welcoming bed.`,
              `A rythmic massage comences and you feel pressure pound across your body. With every pound you hear soft mushes and cracks.`,
              `Crack, mush, crack, mush, tic, tic, tic, tic`]
          }]
        },
        {
          labels: [{ label: null, probability: 30 }],
          prompts: [`How large your cat is, it's eyes are mirrors within mirrors within mirrors. You stare deeply into them and notice the interconnecting lattice of its iris pulsate.`,
            `A swaying forest that you are within shifting with the breeze of a warm day.`,
            `Your cat stands in front of you and your hands stretch out to meet the wall of fur.`,
            `So soft, so buttery. So relaxed, the fur becomes smoother and smoother to your hands and eyes.`,
            `You feel a soft pat on your head, as you grow more relaxed the scene becomes dimmer.`,
            `Then you feel as if you are flying up to the ceiling and land in a wet but welcoming bed.`,
            `A rythmic massage comences and you feel pressure pound across your body. With every pound you hear soft mushes and cracks.`,
            `Crack, mush, crack, mush, tic, tic, tic, tic`]
        }]
      },
      {
        labels: [{ label: "pet the cat", probability: 70 }],
        prompts: [`The cat freezes, it's eyes start twitching and you feel a slight hum eminate from its body.`,
          `How friendly he is whenever you are petting him.`,
          `But the ticking is new. The hum is rythmic, it undulates with a beat and sharp sticato. Like heels on a wood floor.`,
          `You look down and the spiked ball keeps rolling around your hand over and over, each tick accompanied by a sharp pain as it pierces your skin and makes contact with the bones in your hand.`,
          `It circles your hand and slowly begins to move up your arm the ticks growing louder as it does.`],
        options: [{
          labels: [{ label: "Throw it off", probability: 50 }],
          prompts: [`You swing your arm wildly to rid yourself of the mine connected to your arm, a shriek escapes your lips once you see that it is still climbing towards your head.`,
            `It leave a trail of mangled skin as it claws its way up, chuckling as your twirl around to no avail.`,
            `Exhausted you stop and are left leaned over breating heavily, trying to think of a way out.`,
            `Your outline begins to get fuzzy and everything around you fades to a beige peppered with specs of brown and white.`,
            `Looking back at yourself you realize you are now sketched out on a sheet of paper, moving in stop motion as the pages fold over you to reveal your next frame.`],
          options: [{
            labels: [{ label: "Peak Ahead", probability: 60 }],
            prompts: [`You flit through the pages trying to see how the story plays out, a beautiful scene unfolds and withers.`,
              `That pattern plays out repeatedly in the backdrop as you move through the seasons of the pages.`,
              `You stare back out, the same but older with every page, stoic, happy, sad, the emotions come and flow away`,
              `Then you realize it isn't you any more, it is a different face, another expression, someone else staring back`,
              `It's expressions match yours, and the story behind it follows the same pattern as before.`,
              `You turn the pages faster only to see another face with the same story.`,
              `The pages turn in a fury, whirring past you like a flipbook.`,
              `flip, flip, fip, fip, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Peak Ahead", probability: 40 }],
            prompts: [`You skip straight to the end of the book to be met with a blank page`,
              `hurridly you start flipping backwards trying to find where you reappear, burning through the expressionless pages.`,
              `As you near the front of the book you realize you have gone too far, where are you? Erased?`,
              `You flip the last few pages slowly, each page falling over with more gravity than the last`,
              `They each close with a boom deafing and final.`,
              `Boom, dom, dom, tom, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Close the book", probability: 100 }],
            prompts: [`You flip the book closed, only to realize that the darkening sky is closing down over you, shutting you in.`,
              `You try to push the pages back up, to hold the book open, but the weight is too much and you can't press it through the page.`,
              `The heavy weight smothers you, pressing your breath out of your lungs, you stuggle to push out, to escape the edge of the book, but it is too far, as good as miles away.`,
              `Blood rushes to your ears and you hear your heart pound against the little space left around you.`,
              `Bump, bump, dum, bum, tum, tic, tic, tic, tic`]
          }]
        },
        {
          labels: [{ label: "Throw it off", probability: 50 }],
          prompts: [`You wave your arm wildly to throw off the ball, banging it into cabinets and the counter.`,
            `It gnashes and gnaws at you, driving you into a frenzy. You blindly bash the ball, but it doesn't budge.`,
            `You hear a crash as your arm makes contact with a lamp and it shatters, raining glass upon you.`,
            `Time slows, and you watch the shards pierces your skin, shimmering in the light as they slice into you.`,
            `You try to cover yourself with your arms, but tiny splinters of glass manage to find a way through your defences.`,
            `Your whole body is left burning, some glass even enters into your eyes and mouth.`,
            `The world you see is tesselated, reflected on itself by the glass embedded in your cornea.`],
          options: [{
            labels: [{ label: "Pull it out", probability: 40 }],
            prompts: [`You look downwards and grip a shards of glass and pull. It tugs at your eye, shifting it back and forth. It must be deeply lodged in place.`,
              `You tenderly pull and wiggle it outwards, trying to keep your eye intact. Slowly it works its way out and pops away in your hand.`,
              `You reach up to continue the tedious process, repeating the stressful process with the same care as a mother removing a bee's stinger from her child.`,
              `Finally you pull out the last one and look back up see the world around you filled with holes. blood leaks out of the holes, leaving red streaks on your vision.`,
              `You blink them away only to find more flowing out onto your eye. You reach up and begin the process again for your other eye, realizing with a shudder that despite your efforts you will never be whole again.`,
              `That thought echos through your mind with each piece of glass you pull, you will only ever see a broken image of the world. Tears begin to flow, mixing with blood and burning the wounds.`,
              `The salty mixtrure drips to the floor as you pull, pooling by your feet.`,
              `plop, dop, drip, plip, dip, pic, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Pull it out", probability: 60 }],
            prompts: [`You reach up, trying to remove the splinters that have lodged themselves into your eyes. But they refuse to budge, they run deep into your eyes, entangled in your optic nerve, such that when you pull then it tugs at your whole skull.`,
              `They have become new apendages to your eye. This how you will always see the world, a shattered window, with distinct pieces displaying different angles, stiched together by the cracks between them.`,
              `Something buzzes by your face, you stare down, to see a giant fly, its every detail form its massive eyes down to the hairs on its body reflected in a thousand angles.`,
              `You scream in what sounds more like a screach, and find youself moving towards it in what can only be called... excitement?`,
              `Your six arms grab your prey, and you puncture a hole in its adbomen. the Fly fidgets and tries to escape, so you tear out its wings, and make short work of its arms. Motionless but very much alive, your treat can only watch you pull it towards your strawlike mouth.`,
              `Then you suck, drawing out the juices through the hole you made, a goey, warm tangy and earty fluid fills your mouth, so delectable.`,
              `As you gurgle away you feel the heart of the insect weakly beat in your hands, pushing the liquid into your mouth.`,
              `bum, bum, dum, bum, tum, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Find Safety", probability: 40 }],
            prompts: [`You gingerly step forward, trying to avoid the debris that coats the floor.`,
              `Your eyes inform you of nothing, forcing you to find your way by touch alone.`,
              `One tentative step after another you move accross the room, your arms searching for an exit.`,
              `Then, exuberence! You find it! just a right turn, a few steps and you will be in your room where you can follow the wall to your phone.`,
              `In excitement you pickup the pace, following your hands that guide you accross the cool wall, until it gives way to a soft furry mass.`,
              `In confusion you jolt back, this isn't expected, there should be a hallway here.`,
              `A dank smell of mildew and moss penetrates your nostrils, and you hurridly step back and reach for the wall, only to find yourself gripping more of the woolly hide.`,
              `The furry buld begins to rumble as it emotes with a low growl and heavy breathing. The smell grows stronger, adding in the reek of sulfur.`,
              `you step back only to find your back pressed against another furry body, it's heart pounding against your body as you shiver in fear.`,
              `bu-bump, bu-bump, bump, bum, tum, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Find Safety", probability: 60 }],
            prompts: [`You step back, trying to escape the horrors unleashed upon you in the room.`,
              `Your foot smashes into something hard, sending a shock of pain up your leg and pushing you off balance so you are hurtling towards the ground.`,
              `Your neck smashes into a counter, your arms catching a hard edge and you land in an awkward angle leaving your body broken on the floor.`,
              `You try to think what to do next, but every path forward leads to failure or more pain. No, it is better to just lie here, but that would leave you a broken mess.`,
              `A tightness forms in your chest, the air gets thinner, you feel a dribble of sweat leak down your face, but can't reach up to move it away.`,
              `Every sound is magnified around you, even though you can't do anything to react to it.`,
              `The pain throbs accross your whole body, a sharp reccuring sensation painted in bright red against the dusky burgundy of the dull pain in the background.`,
              `So sharp, you can even hear it pulse`,
              `dum, dum, dum, tum, tim, tic, tic, tic, tic`]
          }]
        },
        {
          labels: [{ label: "Watch", probability: 100 }],
          prompts: [`As the ball moves up your arm it smiles at you. Its teeth, they stretch backwards into the chasm of its mouth.`,
            `It opens its maw wide and you are consumed, falling into the depths of its stomach.`,
            `A solemn peace settles over you, cooling your body in the dark of the beasts belly.`,
            `As far as you can see are teeth, tesselated along the walls of the beast's throat.`],
          options: [{
            labels: [{ label: "Grab the walls", probability: 40 }],
            prompts: [`Your hands scrape against the walls, fraying into slivers, cut against the razor sharp teeth.`,
              `You are thrown wall to wall, bouncing and tearing against the walls that mercilessly taunt your frail body.`,
              `Bone and sinew comes apart, scraping against the walls with progressively more being left as orniments on the inverted tree of horrors.`,
              `You watch your torso come away, caught in the crux of two teeth. It twists and tumbles in your vision even though it is stationary, as your head tumbles on`,
              `Every collision echos sharply in your head, scratching and cracking as you go.`,
              `tap, crick, crack, tap, tic, tac, tic, tic, tic `]
          },
          {
            labels: [{ label: "Grab the walls", probability: 60 }],
            prompts: [`You grasp at the edges of the walls, hoping to find your grip on its sharp edges.`,
              `Thankfully they are softer than they look, allowing you to grasp with ease and no sense of pain.`,
              `But as you pull you feel your hands slip, not off the surface, but into it.`,
              `You deperately scramble to find another grip but the walls keep giving around you, melting at your touch.`,
              `Bright multicolored lights dance from the surfaces you touch, filling the chasm with a sublime glow that overwhelms the senses.`,
              `You close your eyes trying to block it out, but it drips into your eyes through the seems in your lids. Each drop bightly burning into your retinas.`,
              `Drip, drip, trip, tric, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Float", probability: 30 }],
            prompts: [`The wind brushes past your face as you fall, rustling by your ears and drawing patterns accross your face.`,
              `You hear whispers, then shock as they realize you've been spying on them.`,
              `A tingling sensation and ringing grows in your ears and you realize they are sucking away at that which you heard`],
            options: [{
              labels: [{ label: "Struggle", probability: 100 }],
              prompts: [`You push back but the voices claw at you, drawing away at your brain through your ears.`,
                `The air crackles with their cackles, they laugh at your futile attempts to escape them.`,
                `Memories and thoughts bubble to your mind, only to be drawn away, slurped away to sate their ravenous hunger.`,
                `All you hear is their slurpings, none of the fight, none of their shrieks, just a guzzle that resonates in the hallows of your skull.`,
                `gurgle, guzzle, blurb, guggle, trob, blip, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Float", probability: 100 }],
              prompts: [`The wind cracks and crackles as you try to recall what happened and where you are.`,
                `The pitch black leaves no clues, you try to feel yourself but the velvetty dark manages to conceal even your body.`,
                `The wind rushes by you, you can't hear or see it, but you feel it running over your eyes, even when you try to shut them.`,
                `You fall further, bodyless, only feeling the air against the two spheres of your eyes.`,
                `The frames of reality slow as you fall, becoming distinct moments that you can absorb and percieve in issolation`,
                `Each devoid of anything, only the dark around you. Popping into existence for a short moment only to disappear a moment later as you move to the next.`,
                `Pop, pop, poc, poc, toc, toc, tic, tic, tic, tic`]
            }]
          },
          {
            labels: [{ label: "Float", probability: 70 }],
            prompts: [`You float downwards, the sharp edges of the walls rotating and switching back forming patterns as you stare at their changing sheens.`,
              `As you stare at the walls you notice out of the edge of your eye that you are moving towards a slight glow.`,
              `A cool blue shade emenating from far below you, growing slightly brighter as you move towards it.`,
              `You feel a power, a sense of solemn gravity flow from the the core you fall towards.`,
              `It pulls at you, twisting and contorting your body without moving you an inch.`,
              `It beats into your head and body with growing intensity making it hard to breath or think, until all you can process is the beat.`,
              `bump, dum, bump, dum, tumb, tum, tim, tic, tic, tic  `]
          }]
        }]
      }]
    },
    {
      labels: [{ label: "Thank your friend", probability: 30 }, { label: "What is a reptile man", probability: 40 }],
      prompts: [`He smiles his toothy and familiar smile and reaches out a slimey hand.`,
        `It bends and you see the knuckles undulate to a regular rythem, a steady click of bones sharp as a knife on a counter.`,
        `As the finger knives move towards you you see your fearful reflection carved into them.`],
      options: [{
        labels: [{ label: "Run", probability: 30 }],
        prompts: [`You turn and run, you are so close to the end of the alley but the more steps you take the farther you seem from the end`,
          `reptile man is right behind you, not running but just extending his grasp.`,
          `You can feel his hands grazing your shirt and clawing at your hair.`],
        options: [{
          labels: [{ label: "Protect my hair", probability: 100 }],
          prompts: [`You grab at your hair and pull it towards you, it is shorter than before and raggedly cut. What type of barber is this?`,
            `you yell and get up from the chair and turn to face who did this. A grinning cheesestick with a fedora smiles back at you.`,
            `of course this would happen you think as you turn to leave and swallow a strand of cheese.`,
            `You step out of the store and take another bite. how large your mouth must be to eat this much.`,
            `You look around in wonder at the large teet around you mashing up and down on the cheese.`,
            `As you float on your tounge you hear the sonorous banging of tooth on tooth.`,
            `bang, bang, tang, tang, bang, bang, tang, tic, tic, tic`]
        },
        {
          labels: [{ label: "Run faster", probability: 30 }],
          prompts: [`You shut your eyes and push forward, reptile man scratches at your back.`,
            `Your weary feet pound on the ground and you gasp for air.`,
            `You reach your arms out to grasp at anything to pull your forward and feel a doorknob.`,
            `You open your eyes to see what you have found. It's a doorknob, that is all you release it and look around, you are surounded in a blank white landscape.`,
            `Just the silver knob is in front of you, and then it begins to twictch as if someone is trying to open it from the other side of another non existent door.`,
            `click, click, click, click, tick, tick, tic, tic, tic`]
        },
        {
          labels: [{ label: "Run Faster", probability: 70 }],
          prompts: [`You shut your eyes and push forward, reptile man scratches at your back.`,
            `You feel him scratch at your legs and then you don't feel your legs at all.`,
            `You reach your arms out to grasp at anything to pull your forward. but as you reach you just find`,
            `You open your eyes and see the world topling around you. On one side are your arms reaching and pulling at air and on the other a reptilian hand coated in knives reaching forward just behind them.`,
            `You blink and feel yourself lunge forward, just a thumb now running. Behind you rattles the knives and you still thrust forward.`,
            `clink, clink, clink, clink, click, click, tic, tic, tic`]
        }]
      },
      {
        labels: [{ label: "Run", probability: 70 }],
        prompts: [`You start moving your legs but rather than moving away from the reflection you are drawn towards it.`,
          `You see your other selves move towards you screaming, yelling, terrified. They pass you and you notice that you cannot touch them, instead they escape of the edges of the knives as reflections.`,
          `What is that ahead?`],
        options: [{
          labels: [{ label: "Stop", probability: 70 }],
          prompts: [`You slow down and come to stop, straining to see and hear what is ahead.`,
            `The skys ahead are dark and all you see are shadows within shadows.`,
            `Something is moving though, a darkening body in the darkness moving towards you.`],
          options: [{
            labels: [{ label: "Run", probability: 100 }],
            prompts: [`You try to move but your body isn't cooperating, it's glued to the spot.`,
              `From ahead of you you hear a growing low roar, like wind through a dark and deep cavern.`,
              `And within the constant roar a chilling clank of chains, whatever is ahead is not running towards you it is methodically making its way.`,
              `clink, clank, clink, clank, click, clack, click, clack, tick, tack, tic, tic, tic`]
          },
          {
            labels: [{ label: "Look closer", probability: 100 }],
            prompts: [`From ahead of you you hear a growing low roar, like wind through a dark and deep cavern.`,
              `And within the constant roar a chilling clank of chains, whatever is ahead is not running towards you it is methodically making its way.`,
              `You try to move but your body is glued to the spot.`,
              `clink, clank, clink, clank, click, clack, click, clack, tick, tack, tic, tic, tic`]
          }]
        },
        {
          labels: [{ label: "Stop", probability: 30 }],
          prompts: [`Try as you may your feet keep moving, the sky gets darker and you feel a drop of water on your head.`,
            `There is shelter ahead in the dark, but you have to get there before the light goes out.`,
            `Cold rain pelts you and soaks your clothes, its getting hard to see ahead so you run faster.`,
            `Plink, Plink, tink, tink, tic, tic, tic, tic`]
        },
        {
          labels: [{ label: "Run", probability: 40 }],
          prompts: [`A figure forms in the storm ahead. Shreiking fills the air, a woman in destress.`,
            `You who it is but each attemt to conjour a face or name only draws up ghostly whisps.`,
            `You reach and call, your voice hoarse and unintelligable to you.`,
            `Your scream a steel ball bounces off unseen walls splittling and becoming more cacophonous with every collision.`,
            `tic, tac, tic, tac, tic, tic, tic, tic`]
        },
        {
          labels: [{ label: "Run", probability: 60 }],
          prompts: [`You continue to move towards the figure in the storm. as small as a child and calling for you to reach it.`,
            `Rain starts to fall and you feel it dropplets drum your body and roll down your face.`,
            `You hear the yelling grow and fade rythmicly as wind carries it towards you.`,
            `So close, you can help.`,
            `The rain pitters around you in pools of water and you hear your feet patter against cold water.`,
            `So cold.`,
            `Pit, pat, pit, pat, pic, pac, pic, tic, tic, tic`,
            `...So cold.`]
        }]
      }]
    },
    {
      labels: [{ label: "Thank your friend", probability: 70 }],
      prompts: [`reptile man smiles his teeth sharp and pearly white, light gleams off of them beconing you to reach to touch one.`,
        `Your hand presses against the smooth surface, How does he keep such a tall tooth clean? It must take hours to scrub each of these down.`],
      options: [{
        labels: [{ label: "Touch it", probability: 40 }],
        prompts: [`Your hand grazes the smooth surface, it is softer than you had imagined, almost pillowy.`,
          `You lay your face on the surface and it gives way to you, perfectly cupping your head. a comforting pressure holds your head up, giving you the sensation that your head is practically weightless.`,
          `A smile spreads accross your face as your eyes close, completely out of your control. Images play behind your lids, friendly juggalos as angry parents chasing them trying to get them to `,
          `You smile and feel a warmth building inside of you.`],
        options: [{
          labels: [{ label: "Snuggle deeper", probability: 70 }],
          prompts: [`The weight of you head is too great to disturb, it pulls you deeper into the pillow making it hard to even turn over.`,
            `Light tickling sensations spread down from your head, accross your body. You feel your joints and miscles ache from the stresses of your day.`,
            `Everything is dulled, even your thoughts feel hazy, as if viewed through foggy glass from in a cabin on a cold winter night.`,
            `But lay as you may, you continue to hover in a state between sleep and consoiusness, unable to make the jump accross.`,
            `True relaxation teases your senses, giving you a small taste of nirvana and then drawing away.`],
          options: [{
            labels: [{ label: "Shut your eyes", probability: 50 }],
            prompts: [`You seal your eyes tightly, yearning to push yourself into sleep.`,
              `You struggle to shut them tighter as tiny hands grip your eyelases and try to peel your eyes open to taste the jellylike eyes beneath them`,
              `Giggle surround you the childlike mirth of innoncense untamed and rancid, you curl up and try to escape it all by sleep.`,
              `The creatins scamper over your body, groping and gnawing at your bare body, looking to find something scrumptous beneath.`,
              `They grow as they pick at you, picking you up and carrying you away, for nefarious purposes that could only bring joy to the wicked.`,
              `Sleep, sleep is your escape, you shut what is left of torn shades of your eyelids to block out the world and huddle your broken body.`,
              `Beneath you the heavy march of feet carries you forward, rocking you back and forth as calous claws cradle your body.`,
              `left, right, left, right, tic, toc, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Shut your eyes", probability: 50 }],
            prompts: [`You seal your eyes tightly, yearning to push yourself into sleep.`,
              `A sudden bang fills the air, snapping you to attention. Your eyes are filled with visions of broken bodies dancing over a multicolored background.`,
              `You can't look away, paralyzed with your mouth ajar and face forzen in horror at the awful parade of creeps and calous creations with sharp smiles.`,
              `They call to you, beconing you to join their circus of missfits, A yellow ooze spills behind them, unfurling like a banner.`,
              `You stand transfixed, unable to run though your body cries out for it, forced to watch the wickd band.`,
              `Out come the instruments! Flutes made of broken pipes, bagpipes of broken bones pierced into lungs, Trombones of intenstines and drums of any part that remained.`,
              `Their cacouphonous symphony claws at your ears, with off-key notes punctuated by shrieks and crackles. A toddler's orchestra of sorts.`,
              `The sounds slowly fall into a rhythim, eerie and unwordly, marking the steps of their march.`,
              `Skri, tri, skr, tec, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Count sheep", probability: 30 }],
            prompts: [`One, two. The two sheep frolic in the meadow, scampering up to you and then rushing away.`,
              `the open field around you is wide open with plenty of fresh food an air for grazing, a safe haven from the nightmares just beyond.`,
              `three, four, five. One sheep approaches you, baying and smiling, as if to sing hello to you. With slight trepidation, you reach out your arm and it eagerly nuzzles into it. `,
              `six, seven, eight You feel the sheep bustle around you in the now tight space, you are surrounded by fliece and warm bodies that brush and console you.`,
              `nine, tec, tic, tec, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Count sheep", probability: 70 }],
            prompts: [`The sheep jump over the fence rushing towards you one by one. They rush past you quickly crossing the open field and disappearing into the horizon`,
              `They pant heavily as they run, leaving trampled grass behind them looking like developing deserts in subsaharan africa.`,
              `They bay at you in what almost seems like a warning. They language is unintelligable to you, but with the gathering storm clouds it seems like they are earnestly yelling at you.`,
              `You turn back to the fence and see a dust cloud charging over it towards you. The last of the sheep trips and struggles to stand. The clouds surround it and from its edge you see a flash of claws grab at it and pull it in.`,
              `A blood chilling shriek scars your ears. You turn to run with the beast charging close behind you, its rotten breath condensating on the back of your neck.`,
              `Blindly you charge forward rushing to cross the seemingly endless field and enter your childhood home.`,
              `You suddenly realize your feet are peddling in thin air and your face is deep in the dirt, the fresh smell of soil filling your nostrils.`,
              `The last thing you hear are the pounding of heavy pads on the now freezing earth.`,
              `Dum, dum, tum, dum, tuc, tic, tic, tic, tic`]
          }]
        },
        {
          labels: [{ label: "Snuggle deeper", probability: 30 }],
          labels: [{ label: "Keep Going Home", probability: 20 }],
          prompts: [`You feel secure and cloistered in the warmth of your pillow, too much so to get-up. You resign yourself to the grasp of your new bed.`,
            `Your body settles into the grasp of the soft substance and you feel yourself drawn in, deeper and deeper.`,
            `You try to turn over and get into a more comfortable position but something tugs at your belly. As you struggle to see what it is you find yourself completely attached to your resting place.`],
          options: [{
            labels: [{ label: "Struggle", probability: 60 }],
            prompts: [`Your fight to remove yourself from the grips of your organic prison, as you shift around the substance that binds you hardens, turning into a sort of cemment.`,
              `Just as you find yourself unable to move one of your arms breaks free causing the ceramic to shatter around it. You desperately reach to free the rest of your body, pulling apart and breaking off the cast around you piece by piece.`,
              `You rejoice as your body is freed and you are able to move unconstricted again, for what has been years you have been imprisoned in the shell only now to finally liberate yourself, old and decrept.`,
              `Your bones frail, and muscles emaciated, you struggle to rise and carry yourself. Every joint aches as you move the arthritis compounding with your weakness.`,
              `You smile though, tootheless and mindless in your joy. The meaning of your situation just escaping you as you shuffle on step after step, slight sounds of creaking eminating from your ancient knees and hips as you do.`,
              `Creak, creak, crick, creak, crick, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Struggle", probability: 40 }],
            prompts: [`You fight and struggle to escape but your only manage to get yourself stuck deeper. You stand paralyzed, unable to move except for your eyes.`,
              `Panic starts to rise within you as you realize how many moments you will miss trapped in this prison. Your children's growth, your siblings' graduation, your friends' achievements through it all you will lay here, unmoving and unachieving.`,
              `You see the world change and grow around you, new innovations and people achieving new things, people in joy and sadness, all experiencing their lives, experiences you are denied.`,
              `The awareness gives you no peace, only anxiety at knowing how unfulfilled you are even compared to the children, just toddlers learning how to walk and talk.`,
              `You lay there fully aware of the passage of time and how helpless you are against it, trapped in concreate shoes, trying to avoid a rising tide that has just reached your waist.`,
              `It rolls in, and out, each time a bit higher, with the rigid schedule of an stoic second hand of a clock.`,
              `tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Stop Moving", probability: 60 }],
            prompts: [`You stop moving, exhausted and feel the bed close around you enveloping you in a dark warmth.`,
              `Strange sounds begin to eminate from deep within the sheath, a light hum, a bubbling, a gurgle here and there.`,
              `You nestle down as down as the sounds drift you into a state of meditation.`,
              `And then, a bright ray pokes in above you, piercing your momentary rest and waking you to a new world. You reach up and work your way towards the light breaking out into lush surroundings.`,
              `Strange new wings, attached to your back begin to beat, completely out of your control, propelling you upwards from your old cocoon.`,
              `dup dup dup tup tup toc tic toc tic tic tic tic`]
          },
          {
            labels: [{ label: "Stop Moving", probability: 40 }],
            prompts: [`You resign yourself to your face, sinking back into the substance that holds you. Your heart beats hard inside your chest and you feel a heavy weight form in the pit of your stomach.`,
              `The thick and soft putty envelops your arms and legs traveling up your back. you realize you can no longer feel your body, just your head bobing along in the sea of white.`,
              `You look up and around, everywhere is dark except for the now bubbling substance that seems to generate its own light. One of your eyes drop in as well leaving only your eye and ear hovering at the cusp.`,
              `The sea bubbles, and you float for what seems like eternity.`,
              `pop pop, pop pop, tic toc, tic, toc, tic, tic, tic, tic`]
          }]
        },
        {
          labels: [{ label: "Keep Going Home", probability: 80 }],
          prompts: [`You struggle and pull from the bed, a magnetic force pulling you back into it. A sensation that can only be described as mild electrocution flows through you slowing your progress.`,
            `You open your eyes to see concentric circles of yellowy white lights alternating with rings of darkeness. You squint and try to focus so you can see them more clearly, your muscles in your face strain and shift taking on a life of their own wiggling and moving beneath your skin.`,
            `They work their way around and start crawling deeper into your head. All the while the lights begin to settle in a set of three circles, one is a large light and the other two are a pair of glasses.`,
            `"Nurse, we need to work quickly, its working its way into their brain." The large doctor turns to his tray of tools pulling out what looks like a thin long straw and a wicked skinny fork with two prongs.`],
          options: [{
            labels: [{ label: "Watch", probability: 70 }],
            prompts: [`Your eyes follow the two tools as they flash in the air and then plunge down into your eyes. The doctors hands are almost pressed against your corneas pulling your vision every which way as he operates inside.`,
              `Each pull tears at your eyes, leaving a bit less of the world visble. All this is paired with a ripping sensation within your skull, making it oddly hard to think about what is going on.`,
              `Then the implements in your skull are gingerly removed, and something warm and fuzzy is put over your face.`,
              `Fuzzy, so fuzzy.`,
              `Unable to move, you blink away tears in a now dark world, unsure why you are even crying. After all wasn't it always like this? Images are just images afterall.`,
              `A low voice you recognize tells you not to worry, it will all be okay. Okay, okay sounds good.`,
              `Good, gud, guc, gucamole? No, toc, tic? Such a nice word.`,
              `tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Watch", probability: 30 }],
            prompts: [`You feel the doctor tug away at your scalp and it comes away at his hand, he reaches in pulling and pushing at parts of your brain.`,
              `Sensations spread over your body as he pokes and prods, searching for whatever has lodged itself in your skull. Then a tug.`,
              `Foam begins to flow down your scalp, mixed in are gray, mushy chunks of what must be your brain. You watch with curiosity that turns to horror as, what can only be described as a worm, slides down your face.`,
              `The wriggling creature is bright red and engorged, with yellow eyes and dark red veins running the lenght of its body, legs encircle the length of its body and along one side it has tens of mouths with tiny teeth.`,
              `The doctor reaches down and throws it off. More stream down your face. some latching on and chewing at your cheaks and nose. `,
              `The doctor steps away, pulls of their mask, and sighs, "It's too late". You stare unable to move as he and the nurse leave the room.`,
              `The lights slowly deep in the room, as worms continue to munch away in your head. `,
              `Crunch, munch, chuc, mic, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Blackmail", probability: 40 }],
            prompts: [`You know what this doctor has done, and there is no way you will let him harm you like his last patients.`,
              `A sense of dispair flows through you as you grab his hand and hold it at your crotch, without thinking you say "If you do this I will yell for the nurse".`,
              `He staggers back, unsure how to react the fear painted accross his face, he releases your bindings. You jump up the moment they are loose, eager to escape your captors.`,
              `You carefully back out of the clean-cut operating room and into the hall. As soon as you are in the center of the hall you bolt down the hall, rushing away and darting down halls.`,
              `Closed doors and empty halls blur past you. Each one identical to the last. You slow down and stop to catch your breath, your breath echoing down the windowless halls.`,
              `The harsh artificial lighting dries your eyes leaving them feeling like sandpaper and forcing you to blink repeatedly as you try to moisten them.`,
              `Your head throbs, a dull thudding in your ears that becomes more distinct with each beat. It beats in your ears, like, footsteps.`,
              `Your heart jumps to your throat and you break back into a run, trying to escape the maze of the hospital with the steps relentlessly clicking behind you.`,
              `click, click, clic, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Blackmail", probability: 60 }],
            prompts: [`The lid to the yellow box snaps open, a monotonous robotic voice drones, "Please leave your complaint for management to review and respond. to ensure adequate..."`,
              `The voice continues carrying as you fill out the 33 page form, each field asking for more abstruse information than the last, how are you supposed to know the prime minister of Wa'Batakla`,
              `You march into your manager's room ready to air your greavances, the mole man staring back at you with horned rimed glasses. He stutters out some excuses that only manage to anger you further.`,
              `Then the bird security swoops in the doors, that spineless mole must have ratted you out! His snickering expression gives it all away as your are dragged out and straight into rat prison.`,
              `Your cell is infested of course, any time you move you feel rats shift around you, yelling at you to make way, after all they are trying to get to and from work, they weren't the ones who got locked up.`,
              `Their furry bodies, scurrying feet, and chatter fill the dark musty room. As you stand, bolted to your place, angry and unable to fight, listening to the seconds tick away.`,
              `tic, tic, tic, tic`]
          }]
        }]
      },
      {
        labels: [{ label: "Touch it", probability: 60 }],
        prompts: [`Your hand grazes the smooth surface leaving a dark blemish, a sort of scratch, or maybe its from the oil on your hands.`,
          `The perfect luster is ruined, maybe if you look away and back you wont notice it? No it's too dark, its obviously ruined.`,
          `What have you done? This is just like you to ruin something like this, adults don't make mistakes like this, childsplay, childsplay!`,
          `The townspeople in the square ever wary of your indeiscretions beging to circle around you and chant with disdain.`],
        options: [{
          labels: [{ label: "wipe it away with cloth", probability: 40 }],
          prompts: [`The only cloth you have is your clothing, you ball up a corner of the shirt you are wearing leaning towards the obelisk to wipe away the massive smear.`,
            `Slowly, painstakingly you are able to rub bits of the blemish away, revealing the beautiful sheen below.`,
            `It glistens so brightly your eyes water. The roar of the crowd subsides as they stare entranced by the beauty of the obelisk.`,
            `You look down on the crowd but the bright shimmer is all you see.`],
          options: [{
            labels: [{ label: "squint", probability: 40 }],
            prompts: [`No matter how you squint your eyes everything is radiant and bright. You blink to clear your eyes but even when they are closed the image of the world is burned into them.`,
              `You grasp at your eyes trying to cover them and slip from the precipice. Down you tumble towards the crowd, their hunger for your desecration renewed.`,
              `They shriek in joy and exultation around you, grasping your limbs you feel their warm appendages grasp at you, and yet all you see is still gold.`,
              `nails dig into you and their feathered wings beat you for your unkown insolence. Thumping you down, down into the cold cobblestones beneath you.`,
              `You feel bruised and stuggle to breath, gasping for some air in a space filled with wings. The muffled beating is all you hear drowning out your screams and the shouts of your persecutors.`,
              `dum bum dum dum tum tic tic tic tic`]
          },
          {
            labels: [{ label: "squint", probability: 60 }],
            prompts: [`You narrow your eyes and stare out into the crowd, you can see blurs of faces and arms undulating and moving wih the roars of the crowd.`,
              `A single spot in the crowd draws your attention, why, you can't quite say. It moves slightly out of sync from the rest of the crowd, as if it had been photoshoped into the the crowd as a meme.`,
              `The rest of the crowd falls into the background along with the noise as you watch this odd figure. Their arms are wild, swinging more viscously than the others, and you see their maw opening wide with gutteral yells.`,
              `The figure reaches their arms high above you, as if its arms are streched out taffy. The hover and then crash down threatening to crumple your body.`,
              `You struggle to hide while holding onto the pillar, but a massive hand grabs the base and starts to pull it up, straight out of the ground.`,
              `The air rushes by your face, causing your eyes to water and pressing it heavily into the obelisk. As the arms reach the top of their arc you feel your momentum carry yourself away from the pillar and struggle to keep grip.`,
              `You fly up, high into the sky, unable to hold on any longer, and your eyes close up to protect against the dry air.`,
              `The howling wind slowly dies down as you reach higher altitudes of the atmosphere. You open your eyes and are met by the dark backdrop of space and bright splashes of starts against it.`,
              `Out here all you can feel and hear is the light beat of your heart.`,
              `bum, dum, bum, tum, bum, tum, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "take off your pants", probability: 100 }],
            prompts: [`You reach down and pull your pants out of your legs, the feathers on your scragally limb flutter in the light breeze.`,
              `You flex your feet and stretch your freed legs as your arms grasp around the radiant stone. Then you release yourself`,
              `falling downwards, face up, all around you is gold. The sweet air cushions your fall and you smell the fresh floral smell of the woods.`,
              `The hands of the crowd catch you and throw you back up higher. Higher you go without stopping, you feel yourself accelerate towards more gold.`,
              `You try to breath but the air around you is gold, it seeps into your lungs and fills every crany, the sounds of the crowd far below you are gold as well.`,
              `Gold, gold is all you think, all you see is gold, hearing is gold and gold is the taste.`,
              `Gold, gold, gold, tic, tic, tic, tic`]
          }]
        },
        {
          labels: [{ label: "wipe it away with cloth", probability: 60 }],
          prompts: [`The only cloth you have is your clothing, you ball up a corner of the shirt you are wearing leaning towards the panel to wipe away the smear.`,
            `The stain starts to quickly disappear with your labour, you work your way from the bottom clearing away the grime and up the face of the panel.`,
            `The crowd still jeers your name, "Childsplay, Childsplay!" Your shirt strains to touch the top of the panel and you lean in so you can finish your work and return to the gutters.`,
            `As you lean in you lose your balance and find your face pressed against the panel, you leaned to far, and the rage of the crowd starts to build as you descend towards the ground with the panel.`,
            `The roar rises in intensity for your sacrelidge, to have defaced such a monument with your face is tantamount to treason.`],
          options: [{
            labels: [{ label: "fight", probability: 100 }],
            prompts: [`You descend the rock on which you are perched ready to make war with your tormentors.`,
              `You meet their calls for blood with your own driving the crowd into a frenzy. They reach and snap trying to reach your feet and drag you down amoungst them.`,
              `Beautiful, beautiful madness red as the glowing sun which casts an eerie light onto the square disapating the masks of the crowd and revealing their demonic features.`,
              `You smile ready to lay waste and spread your leathery wings and drop your talons to harvest the heads of the unrepentant. A gutteral shriek emerges from your throat and you close down upon the horde shredding them.`,
              `They bask in the carnage, praying for more calling for your blood and bathing in their own.`,
              `You grab up one of them, an crooked deamon masquerading as an old lady. She shrieks in fear and delight, so delicious, you peck at her with your beak as you fly to your perch for your feast.`,
              `She chortles and begins to cackle, a horse laugh filled with notes of cracking glass.`,
              `Ha, cra, kra, ha, kra, tric, tri, tric, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Mom", probability: 40 }],
            prompts: [`Mom? You cry out uncertainly hoping that there will be an answer from the crowd.`,
              `The yells and shrieks continue to build, they want to tear into you, to see you laid out into the street.`,
              `You yell for your mother again, your eyes seeking her in the crowd but you only met by a cacophonous roar and bloodthirsty faces.`,
              `A shadow falls over the square, bringing a hush with it, you stare up and see the silhuette of a human figure eclising the sun.`,
              `Your mother reaches down and lifts you, you can't see her face but can feel her warm welcoming grasp envelope your body.`,
              `You feel your body rocked back and forth as you are pressed into her warm breast, and snuggle in, cooing and closing your eyes. As you drift off you hear a soft clicking of her tounge which settles into a soft ticking.  `,
              `tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Mom", probability: 60 }],
            prompts: [`You cry out seeking your mother, praying for a guiding hand to carry you out. But no mater where you look all you see are angry faces and fiery glares.`,
              `Around the base of the obelisk they beign to raise up stick, trying to prod you out of your perch. You climb higher all the while calling for your mother.`,
              `The townspeople jeer and laugh seeing that you are helpless. Mixed amoungst them are your friends, yellign louder than the rest, for they have seen your indiscresions and felt the costs of your sins.`,
              `They take a lead of the crowd and begin to scale the rock. You look down from the top`,
              `A warm hand wraps around your outstretched hand, grasing it as another pats the top. It is all you can distinctly feel outside of the mass of writhing bodies against you.`,
              `it neither pushes or pulls you simply holding your hand in a welcoming grasp. You feel the pulse against your hand as you drown.`,
              `Bump dum bum tum bum tuc tic tic tic tic`]
          }]
        },
        {
          labels: [{ label: "Run", probability: 30 }],
          prompts: [`In panic you turn and flee, any direction is fine, just as you clear the the crowd and reach an alleyway you feel something snag your foot.`,
            `A child, only three or four looks up at you with shining green eyes. Your foot pressed through its body. You reach down, tenderly touching its face to see if it responds.`,
            `A chill runs through your heart as you feel its cold cheek. Her lips ashen but her eyes still shining, your hands begin to shake as the enormity of your actions dawn upon you.`,
            `You killed her, how could you!`],
          options: [{
            labels: [{ label: "Continue", probability: 100 }],
            prompts: [`You can't stop! So you resolve to keep moving. Guilt cannot be your guide while the crowd is still so close behind you.`,
              `You pull your foot up and continue to run down the alley, turning down corridors and looking for a door somewhere to hide behind.`,
              `The sounds of the mob are still clear and distinct, you glace back and see them stepping over each other and tearing at one another to be the first to grab you.`,
              `You take a series of sharp turns and finally find a door ajar. Slamming it behind you you breath a sigh of releaf, no you must continue.`,
              `You run into the hall, it is large and hallow with fleeting ornate decorations spread accross the room, a once grand room that had been stripped of most of its finery.`,
              `Along the walls stand numerous doors.`],
            options: [{
              labels: [{ label: "To the right", probability: 40 }],
              prompts: [`You dive into a room on the right side of the room, it is tiny and cramped with brushes, brooms, mops and other cleaning implements.`,
                `You shut and lock the door behind you and take a moment to get your bearings.`,
                `High above you, to far to reach, a small window lets in some light. The walls are stoic and gray, and the room empty except for a a concrete slab adjutting from a wall.`,
                `You walk towards your bunk and lay down, counting the time in your head till you can walk free.`,
                `The sounds of the prison echo through the halls, clanging doors, swinging chains, yelling inmates.`,
                `clang, ching, ting, clang, tinc, tic, tic, tic, tic  `]
            },
            {
              labels: [{ label: "To the right", probability: 60 }],
              prompts: [`You dash into the first door on your right, hearing the sounds of the crowd approach you.`,
                `Slamming the door behind you you look around and realize that you are in a dead end, praying that the crowd chooses not to look in here.`,
                `You stare down, trying to catch your breath. children's bloody footprints surround you.`,
                `You lift your foot and find that a bloody footprint below. Hesitantly you take a few more steps, each leaving a fresh print on the ground.`,
                `A yell echoes through the door and more follow, the voices, unearthly and cold grow closser. You brace against the door and hear the fists fall against it, tearing into the soft wood.`,
                `Tears begin to roll down your face, and your body grows numb. the footprints continue to spread accross the room on their own, covering every spare space on the floor, walls and ceiling.`,
                `pit pat, bang, bang, pic, pac, bang, bang, tic tac tic tic tic tic`]
            },
            {
              labels: [{ label: "Straight on", probability: 50 }],
              prompts: [`You dash straight through the hall breaking out into the opens plains on the other end.`,
                `Breating hard you push on refusing to stop. your lungs burn as bandly as your scalp under the hot summer sun and the parched earth scratches and stings your feet.`,
                `You run on, still hearing the dull roar behind you. Your eyes sting with sweat that has rolled into them.`,
                `You're so parched in the dry heat of the summer. You reach up to wipe the sweat from your head only to find that is has evaporated. Looking at your hand you realize that your skin is crackign and withering.`,
                `Your feet burn and your skin gives way exposing first the muscle and then the bone beneath.`,
                `yet your bare bones still beat as your run, a dry thump on the arid land.`,
                `thump thump thunk thunc thuc tuc tic tic tic tic`]
            },
            {
              labels: [{ label: "Straight on", probability: 50 }],
              prompts: [`The room begins to blur as your rush down the hall, but no matter how quickly you move your legs you find you aren't able to make any progress.`,
                `You push harder now gasping for oxygen as the air thickens around you.`,
                `You can't move fast enough, the yells become stronger and the air becomes an acrid smoke.`,
                `They can see you! They are here! You hear the crowd burst into the hall behind you yelling for you, shaking their claws and baring fangs, like shitposters on 4chan finding their pray at hand.`,
                `You scream but your lungs are paralyzed, as is the rest of your body. All you move is your eyes arcing them back and to the side to see if your tormentors are upon you yet.`,
                `The smell of smoke grows, you find yourself transfixed on the fangs and claws that are endtering the periphery.`,
                `Then darkness.`,
                `tic, tic, tic, tic`]
            }]
          },
          {
            labels: [{ label: "Hold her", probability: 70 }],
            prompts: [`You cradle the girls body, uncertain where to take her or what to do. She weighs so much that you find it hard to move her.`,
              `Weary of the strain you try to lay her back down but the weight keeps your arms pinned to the ground below her, it is as if your arms themselves have become heavy.`,
              `A panic rises in your chest, what have you done? Your arms sink into the earth, weighed down by an unseen force. They carry you with it as your pulse rises, sinking you into the earth.`,
              `You start to panic yelling and sweating as your neck is pulled into the ground. The earth flows into your hears drowning out your own yells and replacing it with the panicked beating of your heart.`,
              `dubump dubump, dubump, dum , dum, tum, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Hold her", probability: 30 }],
            prompts: [`Gently you pick up the small, frail body. A sad warmth flows through your body and an invisible weight passes through your body like waves on the shore.`,
              `Your arms are shaking and your eyes begin to sting, tears roll down your face and drop onto the limp body in your arms.`,
              `You stand but can't feel your legs as they carry you back to the center of the square, there you lay her body to rest as the onlookers watch in muted horror.`,
              `What do you do? What can you do? Resigned, you stand watching the small body wave goodbye to you, a solemn look painted on its face.`,
              `Rain starts to drizzle around you, though you can't feel it you hear it collide with the aluminium roofs.`,
              `tinc, tic, tac, tinc, tic, tic, tic, tic`]
          }]
        },
        {
          labels: [{ label: "Run", probability: 70 }],
          prompts: [`You turn to find a gap in the crowd and spot a small opening between some children.`,
            `As you break into a sprint the crowd reacts matching your movement, by the time you are in the gap they are right behind you.`,
            `The children however have filled the gap, and they wrap their arms like vines around your legs, pulling you down, your feet rooted to the ground and the crowd descends upon you.`,
            `You are lifted into the air and they begin to tear and toss you, simultaneusly reviling you and wishing to grab a token of their cumulative achievement.`],
          options: [{
            labels: [{ label: "Watch", probability: 100 }],
            prompts: [`You step back horrified by the spectacle, seeing the crowd toss you up and pull you back down.`,
              `Children crowd at the periphery of the crowd trying to snatch up a small scrap, perhaps a bit of your shirt or maybe a segment of a finger!`,
              `They laugh and giggle as blood is sprays out from the crowd like a fountain in July.`,
              `You watch as your limbs are tossed around and slowly shrink in size as people take their trophies.`,
              `The festivities wind down to an end, with the bloodstained crowd returning to their normal reticent selves. Parents call their children hurridly guiding them home for supper.`,
              `In the background the town clock begins to chime.`,
              `ding, ding, ting, ding, tinc, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Fight", probability: 30 }],
            prompts: [`A fire burns in your mind, clearing out all thoughts besides those of survival. You feel an animalistic rage rise up inside of you and you jaw locks in determination.`,
              `Your eyes are focused on each person that approaches you and you move with inhuman coreography, placing each punch perfectly.`,
              `They flee, fearing the fury that you have brough upon them, clearing a circle around you. You stare around, looking for anyone who would fight, seeking anyone who would challenge you.`,
              `The ground shakes, and hushes whispers start behind you. You turn to find an ugly muscled tormentor, a brute almost 20 feel tall and towering well over the rest of the crowd.`,
              `With excitement and resolve you charge and tackle him bringing him to his back, he hollers in pain and grabs you.`,
              `You snap his arm to come free and land on his chest laying blow after blow on his exposed body.`,
              `One last punch, one finishing blow, you raise your hands in an interlocked fist over him ready to bring it down on his head for a satifying blow. You swing them downwards!`,
              `tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Fight", probability: 70 }],
            prompts: [`Your hands flail against the wall of arms, you draw your claws and slash away at the poor souls who fall in front of you.`,
              `You mechnically swipe and chop, fighting the continual flow. All you can see is limb come away from limb everything else is painted in red.`,
              `And then, with it a satisfying rotation of your arm, you feel yourself complete your mission, and a sense of liberation flows through you.`,
              `You smile, and watch as your head rolls off your body. The crowd behind you cheers for your job well done circling and holding you up in ceremony.`,
              `Below you your head tumbles and bounces on the rough stones of the street.`,
              `thunk, bumb, thunk, tunc, tinc, tic, tic, tic, tic `]
          }]
        }]
      },
      {
        labels: [{ label: "Look closer", probability: 100 }],
        prompts: [`The surface sparkels in the moonlight and you see your faint reflection.`,
          `Your eyes radiate in the tooth, its a shame that one hangs lower than the other.`,
          `Why did you need to go and melt your face by drinking acid as a child. your parents told you not to but yet you did.`,
          `Now the left side of your face sags and hangs down to your shoulder, and your left ear is almost completely detached.`],
        options: [{
          labels: [{ label: "Push your face back", probability: 40 }],
          prompts: [`You push at your cheek, trying to move the left side of your face to a more pleasant configuration.`,
            `It shifts, and you see your left eye realign with the right one. How beautiful you are!`,
            `Your hand pulls away to grab and shift more of your face, and with it comes your skin.`,
            `It pulls away from your face like putty and you struggle to put it back in place.`,
            `As you do, you see a flap of skin slide over your left eye and half of your world goes dark.`],
          options: [{
            labels: [{ label: "find your eye", probability: 20 }],
            prompts: [`You dig your hand through the skin on your face to find your eye`,
              `You feel your skin part like clay and then your fingers enter an abyss within your skull.`,
              `You feel something smooth, a small globe and simultaneously see the shiluette of a hand over a gray background.`,
              `You grab and pull in desperation. Your hand slowly escapes the grasp of your poorly modled face, and then pops straight out.`,
              `As your hand comes free you see yourself first hand, skin drooping like softened and melting brie that has been given to a toddler to play with, and a gaping hole where your eye should be.`,
              `As you stare in horror your view of the world starts to rotate and you realize that your eye has sliped from your grasp and is now bouncing of the ground.`,
              `Plop, plop, pop, pop, top, top, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Find your eye", probability: 80 }],
            prompts: [`You force your fingers through the goupy mixture on your face.`,
              `skin, muscle and a slurry of bone press against your fingers as they dig and claw for a familiar globe.`,
              `A tight ball of muscle brushes against your fingers and you grab at it in desperation.`,
              `It stays in place, tightly secured to the matter around it.`],
            options: [{
              labels: [{ label: "Pull", probability: 70 }],
              prompts: [`Your hands tightly grasp the fleshy orb and start to draw it out, you struggle to move it but persevere drawing it out inch by inch. You feel it constrict as it moves till you feel a sudden crunch deep within your skull and find yourself grasping a broken mass deep in your head.`,
                `You tenderly pull the jellylike contents of the sphere out and find yourself looking at a mess of skin muscle and white jelly.`,
                `Your hand sweeps through the rubble of your face and you are met with the stare of a fragment of and iris and pupil.`,
                `Breathing becomes harder as your chest tightens and numbness moves through your fingers, then your arms and into your body. Your eye still locked on the broken stare originating from your hand.`,
                `Blood rushes to your ears and pounds against your ears in time with your heart.`,
                `bu-bump, bu-bump, bu-toc, bu-toc, ti-bump, tic-toc, tic-toc, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Pull", probability: 30 }],
              prompts: [`As you pull you feel the muscles around the globe shift and give.`,
                `the sinewy muscle pulls away and your hand is left gripping a smooth sphere.`,
                `The orb is slowly released until, "Pop" you feel a strong suction in your skull as it escapes`,
                `You stare at your hand and realize your fears, your eyeball is sitting in your hand.`,
                `In desperation you try to jam it back into your face but you cannot fit it into your eye socket.`,
                `As you panic, you start to slam it into place harder and harder trying to regain your sight.`,
                `toc, toc, toc, toc, tic, toc, tic, toc, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Panic", probability: 100 }],
              prompts: [`Frustration boils in your body and seeps through your pores. you reach up your other hand and use your claws to excavate you face.`,
                `You start with the left side but are soon tearing indiscriminately at your face. You rage for how you failed to listen to your parents and eat well to maintain your looks, How you managed to squander everything you had to unsucessfully fix them, and how you had self-mutilated yourself even further.`,
                `Bit by bit your vision returns as skin and sinew come free. You are met with a beutifully symetric face reflecting in the pearly mirror. Eyes forver open in an eyelidless stare.`,
                `Blood and skin drip to the floor as you stare the the flayed face before you.`,
                `drip, drop, drip, drop, drip, drip, tic, tic, tic, tic`]
            }]
          },
          {
            labels: [{ label: "Stop", probability: 60 }],
            prompts: [`You stop, and stare at your reflection.`,
              `Ruined, a beast stares back at you.`,
              `You reach up to touch what remains in your face and feel something wet and slimy drip onto your right cheek`,
              `You move your hand to wipe it away and find a wet glob of skin. Then another glob smacks your fingers and you see that your forhead is sagging down.`],
            options: [{
              labels: [{ label: "Close your eyes", probability: 100 }],
              prompts: [`You shut your eyes tightly and try to gasp for some air to calm yourself.`,
                `Your chest is tight, and your lips are now gumming up toghether`,
                `You try to gasp for more air but you can barely pull anything in`,
                `Your teeth start to chatter and settle into a regular methodical cycle.`,
                `click-clack, tic-clack, click-tac, click, tac, tic, tac, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Hold your face in place", probability: 100 }],
              prompts: [`You press one hand to your forhead and feel your skin start to ooze between your fingers.`,
                `You bring your other hand to your face to help keep it from falling throughbut it does nothing.`,
                `In desperation you try to hold your shirt against your face, but it seeps right through.`,
                `drip, drip, drip, dip, dip, tic, tic, tic, tic`]
            }]
          },
          {
            labels: [{ label: "Stop", probability: 40 }],
            prompts: [`Your face is a gnarled trunk of a tree, you try to make some expression but it is almost completely static.`,
              `Your hair is pushed up in every which direction and you try to make out just how far it reaches.`,
              `Your neck is too stiff to move and you find yourself unable to shift it.`,
              `your arms try to feel your hair but they too are sore and unmoving.`,
              `Wind rustles through your branches and they creak gently in the breeze.`,
              `Creak, creak, crick, creak, crick, cick, tic, tic, tic, tic`]
          }]
        },
        {
          labels: [{ label: "Push your face back", probability: 60 }],
          prompts: [`You push at your face, trying to reform it into something passable for human.`,
            `Your skin is strangely rubbery and moist, stretching and slipping under your grip`,
            `You push harder trying to move it but it fails to stay in place.`,
            `You feel liquid moving beneath the surface of your face as you move your hands and in the reflection you see it has swollen`],
          options: [{
            labels: [{ label: "puncture your face", probability: 50 }],
            prompts: [`You poke at your face trying to release the liquid building up beneath it`,
              `with a pop it gives way and empties out quickly.`,
              `You smile at your reflection and notice that there is a small gash where the liquid drained from.`,
              `It looks back at you with a frown and chastises you for what you have done to your face.`,
              `How you have mutilated yourself, not that it matters with how you take care of yourself.`,
              `It berrates you screaming as you try to ignore it and only quieting down when you give it your full attention.`,
              `Your failures are recounted in great depth and all the opportunities you never took are resurrected for it to judge.`],
            options: [{
              labels: [{ label: "Plug your ears", probability: 50 }],
              prompts: [`In your frustration you jam your fingers into your ears trying to plug out the sound of the ever disparaging mouth.`,
                `The voice is instantly silenced and you smile in relaxation.`,
                `"That's much more like it" you say, you don't even hear yourself say that.`,
                `You gingerly pull out your hands and realize that all is silent, dead quite`,
                `You hum, speak and yell but you cannot hear any of that.`,
                `All you can do now is feel the vibration of your heart as it pounds in panic of your new state`,
                `dum, dum. dum, tum, tim. tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Plug your ears", probability: 50 }],
              prompts: [`You jam your fingers into your ears trying to plug out the drone of the disparaging mouth`,
                `But it's voice is just as clear as before, ringing through the inside of your skull and into your ear.`,
                `It castizes you for ignoring it, ignoring what you have done`,
                `It screams and yells at you for failing, failing to do what you dreamed of as a child, it's voice in a never ending cresendo.`,
                `The shrieks are unintelligable, a deafening whistle being blown over and over again straight into your ears.`,
                `Briiiiip, briiip, triiip, tiic, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Cut it out", probability: 100 }],
              prompts: [`With the knife in your hand you begin to carve out the mouth`,
                `It screams and shrieks of murder but you fight through that and the pain to pull it out and toss it to the ground.`,
                `It twitches in your hand and hoarsely curses your nature before falling limp, silenced.`,
                `Are you at peace with what you have done, or have you just failed to grow? A low voice asks you`,
                `You look around you and then realize that there is a new voice, a lower one emenating from the home that you cut.`,
                `This one questioning, poking, stinging.`,
                `It drones on with the same line asking what and why you are, but without waiting for an answer. A constant stream of monologue pouring into the well of your ears.`,
                `drop, drop, drop, top, tip, tic, tic, tic, tic`]
            }]
          },
          {
            labels: [{ label: "puncture your face", probability: 50 }],
            prompts: [
              `With the spoon in your hand you push and prod at your face, trying to relieve the building pressure.`,
              `You face to pierce the surface and feel your face becoming inflamed as it reddens.`,
              `You feel heat eminating from your skin and it becomes stiffer the more you jab and poke at it.`,
              `The heat builds into a burning sensation like a beesting that hasn't been treated yet.`],
            options: [{
              labels: [{ label: "Slam", probability: 100 }],
              prompts: [`You slam your face into the counter, and it cracks into large chunks, liquid pours out of the honeycomb structure in your face`,
                `You reach up to your face and find that it has the same structure as the chunks around you.`,
                `You try to pull at it and be rid of the hive that has formed in your skull.`,
                `You pull chunk after chunk trying to reach some familiar muscle of bone.`,
                `Sticky fragments drop from your head as you dig, plating onto the counter as they do.`,
                `Plap, plop, plap, top, tap, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Tear", probability: 30 }],
              prompts: [`You take the spoon and tear at your face.`,
                `Shavings begin to come off the hardned surface with the same consistency as chocolate but you aren't able to release the pressure.`,
                `You continue to tear creating more shavings around you but unable to do anything to bring you more comfort.`,
                `You carve with a viguor trying to find some peace and release, the shavings cracking away from your face like bark.`,
                `crick, crick, crack, crick, crack, tric, track, tric, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Tear", probability: 70 }],
              prompts: [`You take the spoon and tear at your face, it gives but dowsn't give way.`,
                `The spoon slips runnign up your cheek and deep into your eye socket, it becomes wedged deep under you eyeball.`,
                `Strangely it doesn't hurt, you see the handle of the spoon just along the top edge of your vision.`,
                `It trembles and stutters as you move your eye.`],
              options: [{
                labels: [{ label: "Gentle Pull", probability: 100 }],
                prompts: [`You gingerly pull at the handle but it barely budges`,
                  `You start to move it back and forth to try and free it and it slowly begins to pull out of your head.`,
                  `With the last bit left you gently tug and hear it pop out along with your eyeball. You try to find it so you can put it back in but it bounces into the dark.`,
                  `You give chase, with the only guide to your path being the soft bouncing of your eyeball as it leads you.`,
                  `Plop, pop, plop, top, tlop, toc, tic, tic, tic, tic`]
              },
              {
                labels: [{ label: "Strong pull", probability: 100 }],
                prompts: [`With a strong tug the spoon pops out of your head, releasing with it a stream of liquid`,
                  `You feel the pressure slowly get released from your face as the warm liquid runs down your face`,
                  `An easy breath of relaxation runs through your body as a cool breeze runs over you`,
                  `you hear a welcome fireplace crackle behind you, you will need that to try off after all that liquid soaked your clothing.`,
                  `Especially with how cold it is right now, a cold breeze rushes over your body chilling you. You turn towards the fire and realize it is a good walk away.`,
                  `As you trudge towards it you realize snow has now built up to your ankles.`,
                  `The cold pierces your thin layer of wet clothing and you feel your teeth beging to chatter/`,
                  `Far in the distance you see the fire with friends fiendishly dancing around it. You can just hear it through the thick snow pelting around you as you struggle to make your way to it.`,
                  `Crack, crackle, crack, crac, tac, tic, tic, tic, tic`]
              },
              {
                labels: [{ label: "Give it a name", probability: 100 }],
                prompts: [
                  `It shall be Jim! A pleasant name if you ever knew one`,
                  `You smile at Jim he seems disapointed in you, and you know that you have let it down`,
                  `Jim would always talk to you about how much you could be, how much better you could be than the adults around you.`,
                  `But now at this age you know that you never reached those heights and visions.`,
                  `Jim, your oldest friend, opens his mouth and begins to tisk, you try to hide but cannot, he remains fixed in your vision disapointed at what you are now.`,
                  `Tisk, tisk, tisk, tik, tisk, tik, tic, tic, tic, tic`]
              }]
            }]
          },
          {
            labels: [{ label: "Ignore the swelling", probability: 40 }],
            prompts: [`You keep trying to push your face back into place but at this point it is too stiff and swollen to move`,
              `Your hands slip over the smooth surface unable to grasp it.`,
              `Then you hear a slight pop and feel that there is a hairy pipe poking out of your face right by your mouth`,
              `You stare into the reflection and it looks like a mandible emerging from your swollen face`],
            options: [{
              labels: [{ label: "Pull it out", probability: 60 }],
              prompts: [`The mandible pops out of your face with ease, leaving a small hole but no other signs`,
                `Your face slowly begins to drain and you feel the pressure begin to abate as the pressure moves down your face`,
                `Small dots begin to move accoss your reflection, you look closser and notice they are bugs moving accross the mirror`,
                `You reach up to brush them away but it does nothing`,
                `Slowly you move a hand to your face and feel one scutter onto your hand`,
                `The stream of insects from the hole in your face only grows covering your eyes nose and mouth`,
                `You throw yourself at the ground trying to rid yourself of the bugs but they continue to march over you.`,
                `You feel some crawl into your ears and a punding builds in your eardrums as they scurry forth.`,
                `Bum, dum, bum, tum, dum, tum, tim, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Pull it out", probability: 40 }],
              prompts: [`You tug at the mandible and feel a sharp pain in the side of your jaw`,
                `It shifts and tears your skin accross your face and another mandible pops into place on the other side of your mouth`,
                `another seam opens up vertically up the center of your head and an from beneath your skin a yellowish brown shell emerges`,
                `Your eight eyes stare in horror as your skin continues to split and peel and you mandibles click together in distress.`,
                `Click, click, tic, click, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Scream", probability: 100 }],
              prompts: [`A gutteral shriek errupts from your mouth, but it sounds nothing like you`,
                `As you scream the skin on your faace begins to peel away splitting in different places`,
                `You see parts of an foreign face emerge between, one of an insect`,
                `You reach up with your claws to feel if this is really your face and to brush your attenae back into place`,
                `You realize that everyone else is staring at you and stop your screaming, what a comotion we are causing.`,
                `Then you look accross your colony moving in person coreography before scrulling on to your task`,
                `You hear the feet of hundreds of thousands just like you pound in unison and focus to match it`,
                `clap, clap, tac, clap, tic, tac, tic, tic, tic, tic`]
            }]
          },
          {
            labels: [{ label: "Ignore the swelling", probability: 60 }],
            prompts: [`You keep trying to push your face back into place but it becomes harder and harder as a thick liquid starts to pour from your pores`,
              `You clear it away just to find more of it forming on your skin`,
              `It pools between your fingers and gums them up so that you are forced to just scrape it away with the side of your hands`,
              `A drop oozes into your mouth, it carries a sharp acrid flavor similar to an old cheese that has since been smoked, it leaves a sickeningly sweet aftertaste mingled with a moldy flavor that can only be what you immagine old, unwashed gym socks taste like.`],
            options: [{
              labels: [{ label: "Rub it off", probability: 40 }],
              prompts: [`You rub with a mad vigour trying to free yourself but as you remove the gunk, more pours out of you to replace it.`,
                `Your pet technicolor rabbit scratched at your head to try and get rid of the liquid, loosening a large glob that flows down your face.`,
                `It gets sucked into your nose and you stuggle to breath due to the stench of moldy clothes, spoiled cheese and smoke fill.`,
                `You open your mouth to breath and shake your head to be rid of that rascal. More puss is freed and pours down into your mouth, pooling at the bottom and coating your tounge with the same sickening flavor`,
                `You close your mouth and eyes to keep the gel out and realize that your nose is clogged shut with the hardening gunk. With a growing sense of horror you try to open your mouth and find that it is gummed shut.`,
                `The flow of the thickening substance on your face starts to slow as it settles into place, you try to scratch it off but it has become so thick that your fingers become stuck as well.`,
                `You manage to pull one hand free but not all your fingers come off with it.`,
                `In your new suffocating, pitch black prison all you hear is the slow drip of liquid to the ground as you wonder if you can breath through your ears, but of course that wont be relevant soon as they are almost completely gummed up as well.`,
                `drip, drip, drip, dip, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Rub it off your body", probability: 60 }],
              prompts: [`You struggle to rub it off your body as the liquid begins to thicken.`,
                `It becomes harder to move your limbs as they become coated and stick together.`,
                `You desperately try to scrape the puss off your arms to keep them free but instead find youself in a tangled mess, arms fused together.`,
                `As you struggle the liquid continues to run down your face and onto your body encasing it in more and more gunk`,
                `You fall to the grond unable to stay balanced and the shell shatters spreading accross the ground, along with you`,
                `A million peices spreading out you bounce in every which way into the distance`,
                `Your fragements rattle against the ground, their echos fall into a rythim as they scatter accross the ground.`,
                `Tic, tac, tic, tac, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "rinse off", probability: 70 }],
              prompts: [`You turn on the shower and feel water begin to pour donw on you`,
                `You close your eyes as it washes your body rasing your hands to the spray`,
                `You try to lower your hands but find them stiffer than before`,
                `Your eyes as shut tight and you feel a film start to develop over your face`,
                `You try to struggle and escape the spray of the shower but your trapped in a thickening shell.`,
                `You hear the water ping off your chrysalis ringing clearly through the amber-like case.`,
                `Ping, ding, ping, ting, ping, ting, tic, tic, tic`]
            },
            {
              labels: [{ label: "rinse it off", probability: 30 }],
              prompts: [`You grab the shower head above you and spray down yourself`,
                `The gel begins to liquify again and run off your body`,
                `It slips onto the floor od the bathtub and swirls its way down to the drain`,
                `You watch as the water continues to run over your body, carying more and more of the gel away`,
                `The water is turned off and the tub swirls around you. You look up as you drop down the drain with the last of the liquid`,
                `It slips around you ringing off the pipes as you descend downwards`,
                `Ping, Drip, ping, drip, ting, tric, ping, tic, tic, tic, tic`]
            }]
          }]
        },
        {
          labels: [{ label: "Turn away from the mirror", probability: 100 }],
          prompts: [`You pivot away from the mirror in disgust, unable to face the wretch you have become.`,
            `You feel your shoulders sag over your head and arch your neck back up to see where you are going`,
            `You step forward trying to find a place away from the prying eyes around you`,
            `You see some children with their mothers pulling at the hem of their mothers dresses and pointing at you.`,
            `The men and women try to ignore you, you stumble forward through the crowd and realize you are facing a door`,
            `You try to open it but it barely budges`],
          options: [{
            labels: [{ label: "Try again", probability: 100 }],
            prompts: [`You pull and jiggle the knob and tug at the door but it refuses to move`,
              `Some people in the crowd stop to stare at you as you struggle.`,
              `As you grunt and wheeze you hear them gravitate closser and closser`,
              `You feel a warm breath against your neck and they close in.`],
            options: [{
              labels: [{ label: "Try again", probability: 70 }],
              prompts: [`In desperation you tug at the door with all your might`,
                `You feel it budge but just barely so you pull again`,
                `The door comes loose and you stumble back and then forward as you catch your balance`,
                `Your body is weightless as you lose your balance and tumble into the doorway accomanied by some rocks, plaster, and debris from the broken doorway`,
                `You grasp around you but your hands can't grab anything. You can't even see what to grab as everything around you is pitch black`,
                `As you turn and fall you see a small prick of light from the doorway and hear the debris from the doorway shatter below you`,
                `Crack, click, click, crack, click, tic, click, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Try again", probability: 30 }],
              prompts: [`You pull in desperation and the knob pulls away from the door`,
                `Fixaited you stare at a world of strange machinery inside the knob`,
                `Spindly arms work gears back and forth and pipes as large as smokestacks vibrate and belch white smoke`,
                `small little gold figures run up and down the pathways between the intricate machinery and travel quickly through the grid`,
                `You stare into the horizon transfixed by how far the grid goes with intricate layers of golden life`,
                `Then you scurry forth, as there is no time to pause your many legs rythmicly pounding against the path`,
                `tic, tic, tic, tic, tic, tic`]
            },
            {
              labels: [{ label: "Keep looking", probability: 100 }],
              prompts: [`You stumble forward trying to stay hidden as you search for another place to hide`,
                `You see a door and work your way to it but are stopped by a cold and familiar hand on your shoulder`,
                `You are too terrified to look but you hear those cold familiar teeth click together as he moves closser to you`,
                `Click, click, click, cick, tic, tic, tic, tic`]
            }]
          },
          {
            labels: [{ label: "Keep looking", probability: 40 }],
            prompts: [`You stumble forward trying to stay hidden as you search for another place to hide`,
              `You see a door and work your way to it but are stopped by a cold and familiar hand on your shoulder`,
              `You are too terrified to look but you hear those cold familiar teeth click together as he moves closser to you`,
              `Click, click, click, cick, tic, tic, tic, tic`]
          },
          {
            labels: [{ label: "Keep looking", probability: 60 }],
            prompts: [`You pull yourself away from the door and lumber forth, your feet heavy and your legs stiff`,
              `As you step down the street they make loud clicks against the pavement and you feel the stiffness move up your waist`,
              `You can barely muster the strenth to move forward but your back is too stiff for you to sit and rest`,
              `You try to breath but even that is labourious`,
              `The people around you pause to stare and point, you try to hide your face but your arms wont budge.`,
              `Then you see their cameras come out and some pose to take photos in front of you`,
              `Your heart beats and you struggle to hide but you are glued to the spot as the clicks of the cameras buzz around you`,
              `Click, click, click, cick, tic, tic, tic, tic`]
          }]
        }]
      }]
    }]
  };