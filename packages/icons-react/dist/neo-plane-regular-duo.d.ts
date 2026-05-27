import React from 'react';

export interface NeoPlaneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoPlaneRegularDuo: React.FC<NeoPlaneRegularDuoProps>;
export default NeoPlaneRegularDuo;
