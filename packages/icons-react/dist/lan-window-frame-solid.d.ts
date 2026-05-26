import React from 'react';

export interface LanWindowFrameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowFrameSolid: React.FC<LanWindowFrameSolidProps>;
export default LanWindowFrameSolid;
