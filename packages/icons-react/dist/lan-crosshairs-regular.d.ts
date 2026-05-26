import React from 'react';

export interface LanCrosshairsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrosshairsRegular: React.FC<LanCrosshairsRegularProps>;
export default LanCrosshairsRegular;
