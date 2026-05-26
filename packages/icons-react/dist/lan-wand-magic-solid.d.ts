import React from 'react';

export interface LanWandMagicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWandMagicSolid: React.FC<LanWandMagicSolidProps>;
export default LanWandMagicSolid;
