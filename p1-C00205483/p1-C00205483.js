/**
 *main is the entry point in Java
 *
 */


function main()
{
	this.input = new Input();
  setInterval(onTimerTick, 1);
}

function onTimerTick()
{
  this.input.update();
}
