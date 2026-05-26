import React from 'react';

export interface LanDeerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDeerRegular: React.FC<LanDeerRegularProps>;
export default LanDeerRegular;
