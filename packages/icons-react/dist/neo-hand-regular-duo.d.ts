import React from 'react';

export interface NeoHandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoHandRegularDuo: React.FC<NeoHandRegularDuoProps>;
export default NeoHandRegularDuo;
