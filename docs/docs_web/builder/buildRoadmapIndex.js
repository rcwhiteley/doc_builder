export default function buildRoadmapIndex ( roadmap ) {
  const index = {};

  roadmap.forEach( section => {
    section.items.forEach( item => {
      index[ item.id ] = item;
    });
  });

  return index;
}