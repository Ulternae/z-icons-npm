import React from 'react';

export interface CoreWheelchairRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreWheelchairRegularDuo: React.FC<CoreWheelchairRegularDuoProps>;
export default CoreWheelchairRegularDuo;
