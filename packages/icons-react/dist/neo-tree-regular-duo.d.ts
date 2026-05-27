import React from 'react';

export interface NeoTreeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTreeRegularDuo: React.FC<NeoTreeRegularDuoProps>;
export default NeoTreeRegularDuo;
