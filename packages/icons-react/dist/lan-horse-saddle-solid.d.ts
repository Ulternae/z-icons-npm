import React from 'react';

export interface LanHorseSaddleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseSaddleSolid: React.FC<LanHorseSaddleSolidProps>;
export default LanHorseSaddleSolid;
