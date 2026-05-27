import React from 'react';

export interface NeoCodeRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCodeRegularDuo: React.FC<NeoCodeRegularDuoProps>;
export default NeoCodeRegularDuo;
