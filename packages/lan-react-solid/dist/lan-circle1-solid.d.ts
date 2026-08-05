import React from 'react';

export interface LanCircle1SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle1Solid(props: LanCircle1SolidProps): React.ReactElement;
export default LanCircle1Solid;
