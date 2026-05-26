import React from 'react';

export interface LanGreaterThanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGreaterThanRegular: React.FC<LanGreaterThanRegularProps>;
export default LanGreaterThanRegular;
