import React from 'react';

export interface LanCircle4SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircle4Solid(props: LanCircle4SolidProps): React.ReactElement;
export default LanCircle4Solid;
