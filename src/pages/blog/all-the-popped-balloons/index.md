---
title: All the Popped Balloons - Devlog
date: 2019-01-05
cover: "./cover.png"
---

*Grandma, Come Here* (was later renamed to *All the Popped Balloons*, hereinafter *Grandma*) is a small narrative game based on a true story. Through the game, I wish to depict ordinary people’s life in China. The prototype will take you 10 mins to play. This article will show some of my design and development decisions as well as the problems I meet. I’ll describe the development of the story in this article, so spoiler is included.



## Who Has the Control of the Camera?

If the player controls the camera, they’ll decide what they see. This makes the narrative hard, especially for a scripted one. Another problem of losing control of the camera is that the player’s experience has to be continuous and linear which also isn’t the way of telling stories. *Thirty Flights of Loving* is a great example of how game designers can take back part of the control to improve the narrative. Since *Grandma* is a pure narrative, I decide not to give the control to the player so I can make full use of the camera. I can change the field size, angle, and frame size, use montage, change the scene and break the linear time to support the narrative. For example, I used a top-down god-like perspective to render the character small, isolated and helpless; A side view to show the characters’ relationship in position – one higher and the other lower.

## 2D pixel vs 2D vs 3D

I thought the 3D provides the most details among these three art styles. But it’s just because the 3D is rendered on a larger resolution. If the resolution is limited or the target is far away, the result is opposite — 2D pixel is the most detailed one because we can choose which part to highlight within a few pixels, and make sure it’s clear at every pose and animation frame. *Grandma* will mostly use extreme long shot because I want the player to see the contrast between the character and the environment. So 2D pixel is a better choice.

Besides, pixel art is a flexible art style. Both rough and polished picture is acceptable to the players. I mean, a rough pixelated picture is still rough, but the player won’t think it’s strange. Instead, they’ll fill the blank by themselves. So in my game, I filled it with different pixel art style together, including the rough one and the polished one. They’ll serve different expression.

## Prototype Without Non-creation Work

While reading the essays written by film directors, I realized that filmmakers successfully transferred every process of filmmaking into creative work. For example, if we are holding a camera. We are not just pointing to the characters. The light, focal distance, focal point, angle, position, and movement are all vocabularies we can use *freely* for creation. Also, these vocabularies are influenced by other team members’ works, like the scene, weather, script, and characters. The process includes accident, surprise and inspiring. We should solve the problem creatively. So shooting a film is a half planed and half improvised work, like a live jazz show. But making a game is different, we have a TODO list, maybe spend one day to code the movement, one day to model a character, and one day to design a puzzle. There’re too many trivial things we need to do, and only when every part is finished can we test the result and move on. They’re separated and filled with repeat work. Worse, there’ll be bugs in the code. Coding is never a creation work for me, let along fixing bugs. As a result, those non-creation works break the flow of the creation.

So I decided to make the prototype without coding. After the prototype the gameplay will be set, then I’ll program an editor. This is still not a creative process, but it can save me from solving technical problems during the next designing part.

![](./dev.png 'A simple editor I made for the prototype. By aligning them in a row, I can review the story with Unity’s arrows + shift shortcuts.')

In *Grandma*, after I finished a rough storyboard on paper, I tried some coding-free game editor including *bitsy* and *flickgame*, they don't suit my game. But inspired by *flickgame*, I decided to use keynote for a playable prototype. Then I decided to keep this subtle point and click interaction because by asking the player to find a clickable key point, the game provides information beyond the graph and dialogues. The player may think “Why should I click here?”, “Why does the character want to go there?” or “Oh, I remember this object because I just clicked it a few scenes before!”

## Answers Without Feedback

A game is an artifact build upon questions, answers, and feedbacks. But what if I remove the feedbacks or answers of some questions? Will the player guess if they gave the right answers and keep thinking it in the next scenes? Will they become impatient or disappointed? Or maybe no feedback is actually another type of feedback? It can serve the narrative.

## Problems Need to be Solved

In the current prototype, the game is just a simple story about a pitiful old Chinese lady. It doesn’t raise any meaningful question. Meanwhile, I wish to present or reference some China’s culture, strange scenes and social events, but in the current prototype, they are superficial because they are replaceable in the story. A believable story happens in a certain environment that can breed it inevitably. So my next stage of work is to reconsider the storyline and to provide more detail on the old lady’s choices and more interaction with the environment.

My intention of using point and click is to make the player search the environment and think about the designer’s intention then fill the story by themselves. But currently, the problem is that if the player tries to think the meaning behind the clickable point but get no result. They’ll give up thinking and click randomly. So next I’ll add more feedback to the clickable point in the story layer. For example, the story explains the meaning after the player clicked a clickable point that seems random. Also, I need to review all the clickable points to make them reasonable enough.
