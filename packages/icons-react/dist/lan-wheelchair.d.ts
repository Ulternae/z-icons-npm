import React from 'react';

export interface LanWheelchairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheelchair: React.FC<LanWheelchairProps>;
export default LanWheelchair;
