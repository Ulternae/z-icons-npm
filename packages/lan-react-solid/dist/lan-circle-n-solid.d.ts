import React from 'react';

export interface LanCircleNSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNSolid(props: LanCircleNSolidProps): React.ReactElement;
export default LanCircleNSolid;
