import React from 'react';

export interface LanUserSithProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserSith: React.FC<LanUserSithProps>;
export default LanUserSith;
