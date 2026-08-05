import React from 'react';

export interface LanBoxIsometricThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxIsometricThin(props: LanBoxIsometricThinProps): React.ReactElement;
export default LanBoxIsometricThin;
