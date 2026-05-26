import React from 'react';

export interface LanHandLoveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandLoveSolid: React.FC<LanHandLoveSolidProps>;
export default LanHandLoveSolid;
