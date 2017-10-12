import $ from 'jquery'

export function getLyrics( band, song ) {
  const url =  `https://api.lyrics.ovh/v1/${band}/${song}`
  return $.ajax({ url })
}
