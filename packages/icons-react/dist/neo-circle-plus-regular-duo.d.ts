import React from 'react';

export interface NeoCirclePlusRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCirclePlusRegularDuo: React.FC<NeoCirclePlusRegularDuoProps>;
export default NeoCirclePlusRegularDuo;
