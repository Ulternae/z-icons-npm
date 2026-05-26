import React from 'react';

export interface LanUserVisorRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserVisorRegular: React.FC<LanUserVisorRegularProps>;
export default LanUserVisorRegular;
