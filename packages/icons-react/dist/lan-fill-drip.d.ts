import React from 'react';

export interface LanFillDripProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFillDrip: React.FC<LanFillDripProps>;
export default LanFillDrip;
