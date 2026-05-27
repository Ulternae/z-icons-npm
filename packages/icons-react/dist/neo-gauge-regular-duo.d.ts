import React from 'react';

export interface NeoGaugeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoGaugeRegularDuo: React.FC<NeoGaugeRegularDuoProps>;
export default NeoGaugeRegularDuo;
