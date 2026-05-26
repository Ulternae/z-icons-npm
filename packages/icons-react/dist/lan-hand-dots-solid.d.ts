import React from 'react';

export interface LanHandDotsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandDotsSolid: React.FC<LanHandDotsSolidProps>;
export default LanHandDotsSolid;
