import { ImGlass } from 'react-icons/im'
import {
  GiOrangeSlice,
  GiShinyApple,
  GiWineGlass,
  GiCherry,
  GiPear,
  GiChocolateBar,
  GiVanillaFlower,
  GiCoolSpices,
  GiPeach,
  GiCheeseWedge,
  GiSteak,
  GiShrimp,
  GiChickenOven,
  GiNoodles,
  GiHighHeel,
  GiBrokenHeart,
  GiRose,
  GiGlassCelebration,
  GiPartyPopper,
  GiForkKnifeSpoon,
  GiChainedHeart,
} from 'react-icons/gi'
import { IoMdFlower } from 'react-icons/io'
import { SiRaspberrypi } from 'react-icons/si'
import { IoFishOutline, IoWineOutline } from 'react-icons/io5'
import { MdOutlineOutdoorGrill } from 'react-icons/md'
import { TiWine } from 'react-icons/ti'

import React from 'react'

export const DisplayFlavours = ({ color, flavour1, flavour2 }) => {
  return (
    <div className='wine-icons'>
      <span>{color === 'alb' && <GiWineGlass />}</span>
      <span>{color === 'rosu' && <ImGlass />}</span>
      <span>{color === 'rose' && <IoWineOutline />}</span>
      <span>{color === 'spumant' && <TiWine />}</span>

      <span>{flavour1 === 'fructe de padure' && <SiRaspberrypi />}</span>
      <span>{flavour2 === 'fructe de padure' && <SiRaspberrypi />}</span>
      <span>{flavour1 === 'ciocolata' && <GiChocolateBar />}</span>
      <span>{flavour2 === 'ciocolata' && <GiChocolateBar />}</span>
      <span>{flavour1 === 'mere verzi' && <GiShinyApple />}</span>
      <span>{flavour2 === 'mere verzi' && <GiShinyApple />}</span>
      <span>{flavour1 === 'citrice' && <GiOrangeSlice />}</span>
      <span>{flavour2 === 'citrice' && <GiOrangeSlice />}</span>
      <span>{flavour1 === 'prune' && <GiPeach />}</span>
      <span>{flavour2 === 'prune' && <GiPeach />}</span>
      <span>{flavour1 === 'mirodenii' && <GiCoolSpices />}</span>
      <span>{flavour2 === 'mirodenii' && <GiCoolSpices />}</span>
      <span>{flavour1 === 'cirese' && <GiCherry />}</span>
      <span>{flavour2 === 'cirese' && <GiCherry />}</span>
      <span>{flavour1 === 'floral' && <IoMdFlower />}</span>
      <span>{flavour2 === 'floral' && <IoMdFlower />}</span>
      <span>{flavour1 === 'pere' && <GiPear />}</span>
      <span>{flavour2 === 'pere' && <GiPear />}</span>
      <span>{flavour1 === 'vanilie' && <GiVanillaFlower />}</span>
      <span>{flavour2 === 'vanilie' && <GiVanillaFlower />}</span>
    </div>
  )
}

export const DisplayOccasions = ({ pairing, occasions }) => {
  return (
    <div className='wine-icons'>
      <span>{pairing === 'fructe de mare' && <GiShrimp />}</span>
      <span>{pairing === 'branzeturi' && <GiCheeseWedge />}</span>
      <span>{pairing === 'paste' && <GiNoodles />}</span>
      <span>{pairing === 'pui' && <GiChickenOven />}</span>
      <span>{pairing === 'steak' && <GiSteak />}</span>
      <span>{pairing === 'carne la gratar' && <MdOutlineOutdoorGrill />}</span>
      <span>{pairing === 'peste' && <IoFishOutline />}</span>
      <span>{occasions === 'breaking up' && <GiBrokenHeart />}</span>
      <span>{occasions === 'cina romantica' && <GiRose />}</span>
      <span>{occasions === 'celebrare' && <GiPartyPopper />}</span>
      <span>{occasions === 'date night' && <GiGlassCelebration />}</span>
      <span>{occasions === 'dinner party' && <GiForkKnifeSpoon />}</span>
      <span>{occasions === "girl's night out" && <GiHighHeel />}</span>
      <span>{occasions === 'making up' && <GiChainedHeart />}</span>
    </div>
  )
}
