import React from 'react';

export interface LanBootSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBootSolid: React.FC<LanBootSolidProps>;
export default LanBootSolid;
