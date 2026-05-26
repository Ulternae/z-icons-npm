import React from 'react';

export interface LanCrateEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCrateEmptyRegular: React.FC<LanCrateEmptyRegularProps>;
export default LanCrateEmptyRegular;
