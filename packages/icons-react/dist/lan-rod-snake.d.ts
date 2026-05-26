import React from 'react';

export interface LanRodSnakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRodSnake: React.FC<LanRodSnakeProps>;
export default LanRodSnake;
