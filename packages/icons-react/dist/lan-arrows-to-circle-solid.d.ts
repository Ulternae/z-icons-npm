import React from 'react';

export interface LanArrowsToCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanArrowsToCircleSolid: React.FC<LanArrowsToCircleSolidProps>;
export default LanArrowsToCircleSolid;
