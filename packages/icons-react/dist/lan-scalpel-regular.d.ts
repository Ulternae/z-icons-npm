import React from 'react';

export interface LanScalpelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScalpelRegular: React.FC<LanScalpelRegularProps>;
export default LanScalpelRegular;
