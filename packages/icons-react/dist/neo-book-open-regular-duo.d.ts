import React from 'react';

export interface NeoBookOpenRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBookOpenRegularDuo: React.FC<NeoBookOpenRegularDuoProps>;
export default NeoBookOpenRegularDuo;
