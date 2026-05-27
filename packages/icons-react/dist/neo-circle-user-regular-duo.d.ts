import React from 'react';

export interface NeoCircleUserRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCircleUserRegularDuo: React.FC<NeoCircleUserRegularDuoProps>;
export default NeoCircleUserRegularDuo;
