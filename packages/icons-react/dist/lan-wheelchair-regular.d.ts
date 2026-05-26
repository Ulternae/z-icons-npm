import React from 'react';

export interface LanWheelchairRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWheelchairRegular: React.FC<LanWheelchairRegularProps>;
export default LanWheelchairRegular;
