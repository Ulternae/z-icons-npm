import React from 'react';

export interface NeoPlayRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlayRegularDuo: React.FC<NeoPlayRegularDuoProps>;
export default NeoPlayRegularDuo;
