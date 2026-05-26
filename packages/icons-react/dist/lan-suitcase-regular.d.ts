import React from 'react';

export interface LanSuitcaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSuitcaseRegular: React.FC<LanSuitcaseRegularProps>;
export default LanSuitcaseRegular;
