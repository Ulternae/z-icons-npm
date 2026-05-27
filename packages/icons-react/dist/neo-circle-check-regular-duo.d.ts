import React from 'react';

export interface NeoCircleCheckRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleCheckRegularDuo: React.FC<NeoCircleCheckRegularDuoProps>;
export default NeoCircleCheckRegularDuo;
