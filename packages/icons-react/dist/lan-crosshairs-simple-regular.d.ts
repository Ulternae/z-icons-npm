import React from 'react';

export interface LanCrosshairsSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrosshairsSimpleRegular: React.FC<LanCrosshairsSimpleRegularProps>;
export default LanCrosshairsSimpleRegular;
