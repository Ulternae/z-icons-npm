import React from 'react';

export interface LanXmarkLargeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanXmarkLargeSolid: React.FC<LanXmarkLargeSolidProps>;
export default LanXmarkLargeSolid;
