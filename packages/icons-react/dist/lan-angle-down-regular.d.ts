import React from 'react';

export interface LanAngleDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAngleDownRegular: React.FC<LanAngleDownRegularProps>;
export default LanAngleDownRegular;
