import React from 'react';

export interface CoreHourglassRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreHourglassRegularDuo: React.FC<CoreHourglassRegularDuoProps>;
export default CoreHourglassRegularDuo;
