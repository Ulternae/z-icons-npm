import React from 'react';

export interface LanWindowCloseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWindowCloseSolid: React.FC<LanWindowCloseSolidProps>;
export default LanWindowCloseSolid;
