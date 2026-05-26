import React from 'react';

export interface LanShieldQuarteredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldQuartered: React.FC<LanShieldQuarteredProps>;
export default LanShieldQuartered;
