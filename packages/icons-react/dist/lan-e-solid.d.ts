import React from 'react';

export interface LanESolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanESolid: React.FC<LanESolidProps>;
export default LanESolid;
