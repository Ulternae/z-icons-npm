import React from 'react';

export interface LanShoeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShoeSolid: React.FC<LanShoeSolidProps>;
export default LanShoeSolid;
