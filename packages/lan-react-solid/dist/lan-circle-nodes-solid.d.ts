import React from 'react';

export interface LanCircleNodesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNodesSolid(props: LanCircleNodesSolidProps): React.ReactElement;
export default LanCircleNodesSolid;
