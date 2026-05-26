import React from 'react';

export interface LanTreeLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTreeLargeSolid: React.FC<LanTreeLargeSolidProps>;
export default LanTreeLargeSolid;
