import React from 'react';

export interface NeoFileRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoFileRegularDuo: React.FC<NeoFileRegularDuoProps>;
export default NeoFileRegularDuo;
