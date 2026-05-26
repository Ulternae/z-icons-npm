import React from 'react';

export interface LanScarfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScarfRegular: React.FC<LanScarfRegularProps>;
export default LanScarfRegular;
