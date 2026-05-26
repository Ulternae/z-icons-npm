import React from 'react';

export interface LanExcavatorSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanExcavatorSolid: React.FC<LanExcavatorSolidProps>;
export default LanExcavatorSolid;
