import React from 'react';

export interface LanBoxIsometricTapeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxIsometricTapeSolid(props: LanBoxIsometricTapeSolidProps): React.ReactElement;
export default LanBoxIsometricTapeSolid;
