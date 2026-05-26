import React from 'react';

export interface LanSnakeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSnakeSolid: React.FC<LanSnakeSolidProps>;
export default LanSnakeSolid;
