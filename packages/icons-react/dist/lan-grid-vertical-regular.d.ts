import React from 'react';

export interface LanGridVerticalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGridVerticalRegular: React.FC<LanGridVerticalRegularProps>;
export default LanGridVerticalRegular;
