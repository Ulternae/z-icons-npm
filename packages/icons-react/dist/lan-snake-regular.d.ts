import React from 'react';

export interface LanSnakeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnakeRegular: React.FC<LanSnakeRegularProps>;
export default LanSnakeRegular;
