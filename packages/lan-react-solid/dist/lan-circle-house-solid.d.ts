import React from 'react';

export interface LanCircleHouseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleHouseSolid(props: LanCircleHouseSolidProps): React.ReactElement;
export default LanCircleHouseSolid;
