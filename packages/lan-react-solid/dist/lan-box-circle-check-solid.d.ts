import React from 'react';

export interface LanBoxCircleCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxCircleCheckSolid(props: LanBoxCircleCheckSolidProps): React.ReactElement;
export default LanBoxCircleCheckSolid;
