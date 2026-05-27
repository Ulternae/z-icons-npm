import React from 'react';

export interface NeoSkullRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSkullRegularDuo: React.FC<NeoSkullRegularDuoProps>;
export default NeoSkullRegularDuo;
