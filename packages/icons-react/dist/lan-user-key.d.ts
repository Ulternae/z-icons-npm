import React from 'react';

export interface LanUserKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserKey: React.FC<LanUserKeyProps>;
export default LanUserKey;
