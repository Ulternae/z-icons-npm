import React from 'react';

export interface LanCircleHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHeartSolid(props: LanCircleHeartSolidProps): React.ReactElement;
export default LanCircleHeartSolid;
