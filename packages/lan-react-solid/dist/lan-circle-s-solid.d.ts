import React from 'react';

export interface LanCircleSSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleSSolid(props: LanCircleSSolidProps): React.ReactElement;
export default LanCircleSSolid;
