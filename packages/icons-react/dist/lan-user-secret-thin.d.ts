import React from 'react';

export interface LanUserSecretThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserSecretThin: React.FC<LanUserSecretThinProps>;
export default LanUserSecretThin;
