import React from 'react';

export interface LanCarSideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarSideSolid: React.FC<LanCarSideSolidProps>;
export default LanCarSideSolid;
