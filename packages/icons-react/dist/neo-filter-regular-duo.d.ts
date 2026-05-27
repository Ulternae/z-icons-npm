import React from 'react';

export interface NeoFilterRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFilterRegularDuo: React.FC<NeoFilterRegularDuoProps>;
export default NeoFilterRegularDuo;
