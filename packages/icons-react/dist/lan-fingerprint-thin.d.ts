import React from 'react';

export interface LanFingerprintThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFingerprintThin: React.FC<LanFingerprintThinProps>;
export default LanFingerprintThin;
