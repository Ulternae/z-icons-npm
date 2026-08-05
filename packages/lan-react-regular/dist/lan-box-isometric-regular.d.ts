import React from 'react';

export interface LanBoxIsometricRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxIsometricRegular(props: LanBoxIsometricRegularProps): React.ReactElement;
export default LanBoxIsometricRegular;
