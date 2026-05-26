import React from 'react';

export interface LanCornerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCornerRegular: React.FC<LanCornerRegularProps>;
export default LanCornerRegular;
