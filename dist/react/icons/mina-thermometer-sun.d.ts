import React from 'react';

export interface MinaThermometerSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThermometerSun: React.FC<MinaThermometerSunProps>;
export default MinaThermometerSun;
