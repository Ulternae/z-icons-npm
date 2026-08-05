import React from 'react';

export interface LanFingerprintSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFingerprintSolid(props: LanFingerprintSolidProps): React.ReactElement;
export default LanFingerprintSolid;
