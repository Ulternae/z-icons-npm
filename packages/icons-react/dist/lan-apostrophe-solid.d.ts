import React from 'react';

export interface LanApostropheSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanApostropheSolid: React.FC<LanApostropheSolidProps>;
export default LanApostropheSolid;
