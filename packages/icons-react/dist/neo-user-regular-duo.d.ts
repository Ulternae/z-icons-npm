import React from 'react';

export interface NeoUserRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoUserRegularDuo: React.FC<NeoUserRegularDuoProps>;
export default NeoUserRegularDuo;
