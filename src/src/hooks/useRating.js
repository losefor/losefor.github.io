export function useRating(likes, dislikes) {
  return  Number(likes) / (Number(likes)  + Number(dislikes) ) * 100 ;
}
