import React from 'react';

export interface CoreWheelchairProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWheelchair: React.FC<CoreWheelchairProps>;
export default CoreWheelchair;
