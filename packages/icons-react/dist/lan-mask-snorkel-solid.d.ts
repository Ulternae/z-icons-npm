import React from 'react';

export interface LanMaskSnorkelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMaskSnorkelSolid: React.FC<LanMaskSnorkelSolidProps>;
export default LanMaskSnorkelSolid;
