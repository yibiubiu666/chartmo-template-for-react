/*
 * 移动端防止滚动触发 thouchend 或单击事件
 */
export function StopTouchendPropagationAfterScroll () {
  let locked = false;
  window.addEventListener('touchmove', function (ev){
    locked || (locked = true, window.addEventListener('touchend', stopTouchendPropagation, true));
  }, true);

  function stopTouchendPropagation(ev){
    ev.stopPropagation ();
    window.removeEventListener('touchend', stopTouchendPropagation, true);
    locked = false;
  }
}
