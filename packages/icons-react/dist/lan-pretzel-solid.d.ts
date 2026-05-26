import React from 'react';

export interface LanPretzelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPretzelSolid: React.FC<LanPretzelSolidProps>;
export default LanPretzelSolid;
