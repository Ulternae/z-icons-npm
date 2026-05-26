import React from 'react';

export interface LanLocustSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocustSolid: React.FC<LanLocustSolidProps>;
export default LanLocustSolid;
