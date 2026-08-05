import React from 'react';

export interface LanCircle3SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle3Solid(props: LanCircle3SolidProps): React.ReactElement;
export default LanCircle3Solid;
