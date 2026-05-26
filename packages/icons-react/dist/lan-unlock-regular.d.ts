import React from 'react';

export interface LanUnlockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUnlockRegular: React.FC<LanUnlockRegularProps>;
export default LanUnlockRegular;
