import React from 'react';

export interface LanWheelchairThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheelchairThin: React.FC<LanWheelchairThinProps>;
export default LanWheelchairThin;
