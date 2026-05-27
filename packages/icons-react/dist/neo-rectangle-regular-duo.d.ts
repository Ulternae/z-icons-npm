import React from 'react';

export interface NeoRectangleRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleRegularDuo: React.FC<NeoRectangleRegularDuoProps>;
export default NeoRectangleRegularDuo;
