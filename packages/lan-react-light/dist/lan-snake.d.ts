import React from 'react';

export interface LanSnakeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSnake(props: LanSnakeProps): React.ReactElement;
export default LanSnake;
