import React from 'react';

export interface LanUserPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserPenRegular: React.FC<LanUserPenRegularProps>;
export default LanUserPenRegular;
