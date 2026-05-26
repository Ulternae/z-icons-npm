import React from 'react';

export interface LanDrawCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawCircleRegular: React.FC<LanDrawCircleRegularProps>;
export default LanDrawCircleRegular;
