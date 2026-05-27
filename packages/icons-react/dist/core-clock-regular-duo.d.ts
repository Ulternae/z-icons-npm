import React from 'react';

export interface CoreClockRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreClockRegularDuo: React.FC<CoreClockRegularDuoProps>;
export default CoreClockRegularDuo;
