import React from 'react';

export interface LanMosqueRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMosqueRegular: React.FC<LanMosqueRegularProps>;
export default LanMosqueRegular;
