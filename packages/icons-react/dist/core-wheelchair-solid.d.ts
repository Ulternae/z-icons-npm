import React from 'react';

export interface CoreWheelchairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWheelchairSolid: React.FC<CoreWheelchairSolidProps>;
export default CoreWheelchairSolid;
