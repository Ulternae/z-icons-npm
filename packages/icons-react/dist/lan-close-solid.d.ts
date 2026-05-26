import React from 'react';

export interface LanCloseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCloseSolid: React.FC<LanCloseSolidProps>;
export default LanCloseSolid;
