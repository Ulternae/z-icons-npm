import React from 'react';

export interface LanFingerprintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFingerprint: React.FC<LanFingerprintProps>;
export default LanFingerprint;
