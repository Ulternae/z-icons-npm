import React from 'react';

export interface MinaWheelchairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWheelchairSolid: React.FC<MinaWheelchairSolidProps>;
export default MinaWheelchairSolid;
