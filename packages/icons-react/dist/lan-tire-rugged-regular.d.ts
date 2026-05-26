import React from 'react';

export interface LanTireRuggedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTireRuggedRegular: React.FC<LanTireRuggedRegularProps>;
export default LanTireRuggedRegular;
