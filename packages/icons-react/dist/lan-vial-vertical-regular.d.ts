import React from 'react';

export interface LanVialVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanVialVerticalRegular: React.FC<LanVialVerticalRegularProps>;
export default LanVialVerticalRegular;
