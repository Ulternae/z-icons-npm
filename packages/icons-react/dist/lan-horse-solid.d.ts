import React from 'react';

export interface LanHorseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHorseSolid: React.FC<LanHorseSolidProps>;
export default LanHorseSolid;
