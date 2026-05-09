import React from 'react';

export interface MinaThermometerSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThermometerSunSolid: React.FC<MinaThermometerSunSolidProps>;
export default MinaThermometerSunSolid;
