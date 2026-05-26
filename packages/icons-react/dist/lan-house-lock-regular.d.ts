import React from 'react';

export interface LanHouseLockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHouseLockRegular: React.FC<LanHouseLockRegularProps>;
export default LanHouseLockRegular;
