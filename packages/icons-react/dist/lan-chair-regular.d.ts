import React from 'react';

export interface LanChairRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChairRegular: React.FC<LanChairRegularProps>;
export default LanChairRegular;
