import React from 'react';

export interface LanToiletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToiletSolid: React.FC<LanToiletSolidProps>;
export default LanToiletSolid;
