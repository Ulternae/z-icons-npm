import React from 'react';

export interface LanFingerprintProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFingerprint(props: LanFingerprintProps): React.ReactElement;
export default LanFingerprint;
