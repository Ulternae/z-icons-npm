import React from 'react';

export interface LanCircleESolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleESolid(props: LanCircleESolidProps): React.ReactElement;
export default LanCircleESolid;
