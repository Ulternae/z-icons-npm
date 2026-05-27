import React from 'react';

export interface NeoRectangleTallRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoRectangleTallRegularDuo: React.FC<NeoRectangleTallRegularDuoProps>;
export default NeoRectangleTallRegularDuo;
