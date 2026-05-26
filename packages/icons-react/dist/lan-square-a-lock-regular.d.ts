import React from 'react';

export interface LanSquareALockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareALockRegular: React.FC<LanSquareALockRegularProps>;
export default LanSquareALockRegular;
