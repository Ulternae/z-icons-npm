import React from 'react';

export interface LanTShirtSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTShirtSolid: React.FC<LanTShirtSolidProps>;
export default LanTShirtSolid;
