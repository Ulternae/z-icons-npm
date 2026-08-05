import React from 'react';

export interface LanFingerprintThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFingerprintThin(props: LanFingerprintThinProps): React.ReactElement;
export default LanFingerprintThin;
