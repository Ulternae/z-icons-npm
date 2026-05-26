import React from 'react';

export interface LanImagePortraitSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImagePortraitSolid: React.FC<LanImagePortraitSolidProps>;
export default LanImagePortraitSolid;
