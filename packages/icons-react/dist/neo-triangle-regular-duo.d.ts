import React from 'react';

export interface NeoTriangleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoTriangleRegularDuo: React.FC<NeoTriangleRegularDuoProps>;
export default NeoTriangleRegularDuo;
