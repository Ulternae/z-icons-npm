import React from 'react';

export interface MinaWheelSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWheelSolid: React.FC<MinaWheelSolidProps>;
export default MinaWheelSolid;
