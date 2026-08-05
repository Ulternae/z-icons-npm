import React from 'react';

export interface LanCircle8SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle8Solid(props: LanCircle8SolidProps): React.ReactElement;
export default LanCircle8Solid;
