import React from 'react';

export interface NeoAngleDownRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAngleDownRegularDuo: React.FC<NeoAngleDownRegularDuoProps>;
export default NeoAngleDownRegularDuo;
