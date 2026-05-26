import React from 'react';

export interface LanUnicycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnicycleSolid: React.FC<LanUnicycleSolidProps>;
export default LanUnicycleSolid;
