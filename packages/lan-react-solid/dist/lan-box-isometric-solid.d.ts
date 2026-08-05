import React from 'react';

export interface LanBoxIsometricSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxIsometricSolid(props: LanBoxIsometricSolidProps): React.ReactElement;
export default LanBoxIsometricSolid;
