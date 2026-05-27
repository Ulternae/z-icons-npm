import React from 'react';

export interface NeoRectangleVerticalRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleVerticalRegularDuo: React.FC<NeoRectangleVerticalRegularDuoProps>;
export default NeoRectangleVerticalRegularDuo;
