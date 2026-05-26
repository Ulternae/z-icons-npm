import React from 'react';

export interface LanRecycleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRecycleSolid: React.FC<LanRecycleSolidProps>;
export default LanRecycleSolid;
