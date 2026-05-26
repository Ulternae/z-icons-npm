import React from 'react';

export interface LanDryerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDryerRegular: React.FC<LanDryerRegularProps>;
export default LanDryerRegular;
