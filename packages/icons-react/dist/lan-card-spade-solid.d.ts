import React from 'react';

export interface LanCardSpadeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCardSpadeSolid: React.FC<LanCardSpadeSolidProps>;
export default LanCardSpadeSolid;
