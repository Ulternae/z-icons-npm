import React from 'react';

export interface LanFingerprintRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFingerprintRegular: React.FC<LanFingerprintRegularProps>;
export default LanFingerprintRegular;
