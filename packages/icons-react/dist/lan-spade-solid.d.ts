import React from 'react';

export interface LanSpadeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpadeSolid: React.FC<LanSpadeSolidProps>;
export default LanSpadeSolid;
