import React from 'react';

export interface LanArrowsToEyeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToEyeSolid: React.FC<LanArrowsToEyeSolidProps>;
export default LanArrowsToEyeSolid;
