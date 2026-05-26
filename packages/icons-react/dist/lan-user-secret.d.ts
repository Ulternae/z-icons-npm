import React from 'react';

export interface LanUserSecretProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserSecret: React.FC<LanUserSecretProps>;
export default LanUserSecret;
