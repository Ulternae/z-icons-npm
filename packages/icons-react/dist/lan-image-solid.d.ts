import React from 'react';

export interface LanImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageSolid: React.FC<LanImageSolidProps>;
export default LanImageSolid;
