import React from 'react';

export interface LanFingerprintRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFingerprintRegular(props: LanFingerprintRegularProps): React.ReactElement;
export default LanFingerprintRegular;
