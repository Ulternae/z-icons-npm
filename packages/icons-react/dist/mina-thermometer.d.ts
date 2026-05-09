import React from 'react';

export interface MinaThermometerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThermometer: React.FC<MinaThermometerProps>;
export default MinaThermometer;
