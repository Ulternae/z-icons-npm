import React from 'react';

export interface LanVirgoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVirgoSolid: React.FC<LanVirgoSolidProps>;
export default LanVirgoSolid;
