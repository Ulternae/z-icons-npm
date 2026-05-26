import React from 'react';

export interface LanWheelchairSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheelchairSolid: React.FC<LanWheelchairSolidProps>;
export default LanWheelchairSolid;
