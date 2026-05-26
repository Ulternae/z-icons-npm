import React from 'react';

export interface LanGarlicSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGarlicSolid: React.FC<LanGarlicSolidProps>;
export default LanGarlicSolid;
