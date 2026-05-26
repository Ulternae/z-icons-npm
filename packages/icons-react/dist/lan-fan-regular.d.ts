import React from 'react';

export interface LanFanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFanRegular: React.FC<LanFanRegularProps>;
export default LanFanRegular;
