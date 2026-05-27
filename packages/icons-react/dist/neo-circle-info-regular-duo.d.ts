import React from 'react';

export interface NeoCircleInfoRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleInfoRegularDuo: React.FC<NeoCircleInfoRegularDuoProps>;
export default NeoCircleInfoRegularDuo;
