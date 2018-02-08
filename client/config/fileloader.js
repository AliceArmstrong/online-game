import { ASSETS_URL } from '.';

const fileLoader = game => {
  game.load.crossOrigin = 'Anonymous';
  game.stage.backgroundColor = '#1E1E1E';
  game.load.image('space', `${ASSETS_URL}/sprites/space.png`);
  game.load.image('ship', `${ASSETS_URL}/sprites/ship.png`);
};

export default fileLoader;
