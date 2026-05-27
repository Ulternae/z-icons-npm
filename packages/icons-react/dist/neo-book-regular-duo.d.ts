import React from 'react';

export interface NeoBookRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoBookRegularDuo: React.FC<NeoBookRegularDuoProps>;
export default NeoBookRegularDuo;
