import React from 'react';

export interface LanManatSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanManatSignRegular: React.FC<LanManatSignRegularProps>;
export default LanManatSignRegular;
