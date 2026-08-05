import React from 'react';

export interface MinaWheelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaWheelSolid(props: MinaWheelSolidProps): React.ReactElement;
export default MinaWheelSolid;
