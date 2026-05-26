import React from 'react';

export interface LanSoftServeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSoftServeRegular: React.FC<LanSoftServeRegularProps>;
export default LanSoftServeRegular;
