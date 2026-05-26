import React from 'react';

export interface LanSnakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnake: React.FC<LanSnakeProps>;
export default LanSnake;
