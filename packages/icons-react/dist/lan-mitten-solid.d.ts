import React from 'react';

export interface LanMittenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMittenSolid: React.FC<LanMittenSolidProps>;
export default LanMittenSolid;
