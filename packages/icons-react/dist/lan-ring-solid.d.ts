import React from 'react';

export interface LanRingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRingSolid: React.FC<LanRingSolidProps>;
export default LanRingSolid;
