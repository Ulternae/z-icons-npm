import React from 'react';

export interface CoreGaugeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGaugeRegularDuo: React.FC<CoreGaugeRegularDuoProps>;
export default CoreGaugeRegularDuo;
