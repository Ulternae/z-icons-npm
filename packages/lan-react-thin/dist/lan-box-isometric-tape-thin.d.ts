import React from 'react';

export interface LanBoxIsometricTapeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxIsometricTapeThin(props: LanBoxIsometricTapeThinProps): React.ReactElement;
export default LanBoxIsometricTapeThin;
