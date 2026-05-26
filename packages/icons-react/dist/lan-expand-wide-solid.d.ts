import React from 'react';

export interface LanExpandWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExpandWideSolid: React.FC<LanExpandWideSolidProps>;
export default LanExpandWideSolid;
