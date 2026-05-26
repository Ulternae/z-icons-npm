import React from 'react';

export interface LanPopsicleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPopsicleSolid: React.FC<LanPopsicleSolidProps>;
export default LanPopsicleSolid;
