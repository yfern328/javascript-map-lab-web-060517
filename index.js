const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const sortedRobots = robots.map(robot => {
  let new_robot = Object.assign({}, robot);
    if(knownDecepticons.includes(new_robot.name)){
      new_robot.alliance = "decepticon"
    }
    else{
      new_robot.alliance = "autobot"
    };
    return new_robot;
});

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null }
];

const coloredZebraStripes = zebraStripes.map((zebra, idx) => {
  let new_zebra = Object.assign({}, zebra);
  if(idx % 2 === 0){
    new_zebra.color = "black"
  }
  else{
    new_zebra.color = "white"
  };
  return new_zebra;
})
