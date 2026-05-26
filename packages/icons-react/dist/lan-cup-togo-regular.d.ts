import React from 'react';

export interface LanCupTogoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCupTogoRegular: React.FC<LanCupTogoRegularProps>;
export default LanCupTogoRegular;
