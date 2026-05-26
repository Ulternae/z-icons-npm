import React from 'react';

export interface LanFingerprintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFingerprintSolid: React.FC<LanFingerprintSolidProps>;
export default LanFingerprintSolid;
