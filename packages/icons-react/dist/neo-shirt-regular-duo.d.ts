import React from 'react';

export interface NeoShirtRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoShirtRegularDuo: React.FC<NeoShirtRegularDuoProps>;
export default NeoShirtRegularDuo;
