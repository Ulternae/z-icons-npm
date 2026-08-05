import React from 'react';

export interface LanCancerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCancerSolid(props: LanCancerSolidProps): React.ReactElement;
export default LanCancerSolid;
