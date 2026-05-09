import React from 'react';

export interface MinaThermometerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThermometerSolid: React.FC<MinaThermometerSolidProps>;
export default MinaThermometerSolid;
