import React from 'react';

export interface LanFrameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFrameSolid: React.FC<LanFrameSolidProps>;
export default LanFrameSolid;
