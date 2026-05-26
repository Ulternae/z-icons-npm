import React from 'react';

export interface LanMicroscopeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicroscopeSolid: React.FC<LanMicroscopeSolidProps>;
export default LanMicroscopeSolid;
