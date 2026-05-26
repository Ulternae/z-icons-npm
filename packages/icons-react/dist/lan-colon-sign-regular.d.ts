import React from 'react';

export interface LanColonSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanColonSignRegular: React.FC<LanColonSignRegularProps>;
export default LanColonSignRegular;
