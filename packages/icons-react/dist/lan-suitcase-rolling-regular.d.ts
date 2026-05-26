import React from 'react';

export interface LanSuitcaseRollingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseRollingRegular: React.FC<LanSuitcaseRollingRegularProps>;
export default LanSuitcaseRollingRegular;
