import React from 'react';

export interface LanBicycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBicycleSolid: React.FC<LanBicycleSolidProps>;
export default LanBicycleSolid;
