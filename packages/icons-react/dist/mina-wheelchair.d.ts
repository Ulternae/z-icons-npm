import React from 'react';

export interface MinaWheelchairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWheelchair: React.FC<MinaWheelchairProps>;
export default MinaWheelchair;
