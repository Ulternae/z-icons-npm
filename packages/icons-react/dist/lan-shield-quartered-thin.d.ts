import React from 'react';

export interface LanShieldQuarteredThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldQuarteredThin: React.FC<LanShieldQuarteredThinProps>;
export default LanShieldQuarteredThin;
